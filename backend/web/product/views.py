from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from product.models import Product
from product.serializers import ProductSerializer
from customer.models import Customer
from customer.serializers import CustomerSerializer
from product_attribute.models import ProductAttribute
from product_attribute.serializers import ProductAttributeSerializer


@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_buy(request):
    if request.method == 'GET':
        product = Product.objects.all().filter(auction=0)
        serializer = ProductSerializer(product, many=True)
        data = {}
        data['data'] = serializer.data
        return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_auction(request):
    if request.method == 'GET':
        product = Product.objects.all().filter(auction=1)
        serializer = ProductSerializer(product, many=True)
        data = {}
        data['data'] = serializer.data
        return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializerProduct = ProductSerializer(product)
        seller = Customer.objects.get(pk=product.owner_id)
        serializerSeller = CustomerSerializer(seller)
        attribute = ProductAttribute.objects.filter(product_id=product.id)
        serializerAttibute = ProductAttributeSerializer(attribute, many=True)

        data = serializerProduct.data
        data['seller'] = serializerSeller.data
        data['attributes'] = serializerAttibute.data

        return JsonResponse(data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(product, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        product.delete()
        return HttpResponse(status=204)
