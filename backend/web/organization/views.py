from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from organization.models import Organization
from organization.serializers import OrganizationSerializer


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
        serializer = OrganizationSerializer(organization)
        # organizationId
        # bankAccount
        # promptPay
        # return JsonResponse(serializer.data)

        # serializerProduct = ProductSerializer(product)
        # seller = Customer.objects.get(pk=product.owner_id)
        # serializerSeller = CustomerSerializer(seller)
        # attribute = ProductAttribute.objects.filter(product_id=product.id)
        # serializerAttibute = ProductAttributeSerializer(attribute, many=True)
        # image = ProductImage.objects.filter(product_id=product.id)
        # serializerImage = ProductImageSerializer(image, many=True)

        # data = serializerProduct.data
        # data['seller'] = serializerSeller.data
        # data['attributes'] = serializerAttibute.data
        # data['images'] = serializerImage.data

        return JsonResponse(data)
