from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from organization.models import Organization
from organization.serializers import OrganizationSerializer
from organization_bank.models import OrganizationBank
from organization_bank.serializers import OrganizationBankSerializer
from organization_promptpay.models import OrganizationPromptpay
from organization_promptpay.serializers import OrganizationPromptpaySerializer
from bank.models import Bank
from bank.serializers import BankSerializer
from product.models import Product
from product.serializers import ProductSerializer
from order.models import Order
from order.serializers import OrderSerializer


@csrf_exempt
def organization_list(request):
    if request.method == 'GET':
        organization = Organization.objects.all()
        serializer = OrganizationSerializer(organization, many=True)
        data = {}
        data['data'] = serializer.data
        return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = OrganizationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def organization_detail(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = OrganizationSerializer(organization)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OrganizationSerializer(organization, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        organization.delete()
        return HttpResponse(status=204)


@csrf_exempt
def organization_bank(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        organization_bank = OrganizationBank.objects.filter(
            organization_id=organization.id)
        organization_promptpay = OrganizationPromptpay.objects.filter(
            organization_id=organization.id)
        bank = Bank.objects.filter(
            pk=organization.id
        )

        serializerOrganization = OrganizationSerializer(organization)
        serializerOrganizationBank = OrganizationBankSerializer(
            organization_bank, many=True)
        serializerBank = BankSerializer(bank, many=True)
        serializerOrganizationPromptpay = OrganizationPromptpaySerializer(
            organization_promptpay, many=True)

        data = serializerOrganization.data
        data['bankAccount'] = serializerOrganizationBank.data
        data['bank'] = serializerBank.data
        data['promptPay'] = serializerOrganizationPromptpay.data

        return JsonResponse(data)


@csrf_exempt
def organization_sell_order(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        product = Product.objects.filter(
            organization_id=pk).values_list('id', flat=True)
        # serializerProduct = ProductSerializer(product, many=True)
        order = Order.objects.filter(product_id__in=product)
        serializerOrder = OrderSerializer(order, many=True)

        data = {}
        data['data'] = serializerOrder.data
        data['organizationId'] = pk

        return JsonResponse(data)


@csrf_exempt
def organization_login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        email = data['email']
        password = data['password']

        try:
            organization = Organization.objects.get(
                email=email, password=password)

            serializerOrganization = OrganizationSerializer(organization)
            return JsonResponse(serializerOrganization.data, status=200)
        except Organization.DoesNotExist:
            return HttpResponse(status=404)


@csrf_exempt
def organization_promptpay(request, pk):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        name = data['name']
        number = data['number']

        organizationPromptpay = OrganizationPromptpay.objects.create(
            name=name, number=number, organization_id=pk)

        serializerOrganizationPromptpay = OrganizationPromptpaySerializer(
            organizationPromptpay)

        return JsonResponse(serializerOrganizationPromptpay.data, status=200)
