from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from product.models import Product
from product.serializers import ProductSerializer
from customer.models import Customer
from customer.serializers import CustomerSerializer
from product_attribute.models import ProductAttribute
from product_attribute.serializers import ProductAttributeSerializer
from product_image.models import ProductImage
from product_image.serializers import ProductImageSerializer
from auction.models import Auction
from auction.serializers import AuctionSerializer
from auction_customer.models import AuctionCustomer
from google.cloud import storage
from django.core.files.storage import FileSystemStorage
from datetime import datetime
import uuid
import os


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

        for item in data['data']:
            productId = item['productId']

            auction = Auction.objects.get(product_id=productId)
            serializerAuction = AuctionSerializer(auction)
            item['auction'] = serializerAuction.data

        return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_auction_bid(request, pk):

    if request.method == 'POST':
        data = JSONParser().parse(request)

        price = data['price']
        userId = data['userId']

        auction = Auction.objects.get(product_id=pk)

        if price <= auction.lastest_price:
            return HttpResponse(status=400)

        AuctionCustomer(price=price, customer_id=userId,
                        auction_id=auction.id).save()

        Auction.objects.filter(pk=auction.id).update(
            lastest_price=price, customer_id=userId, exp_time=auction.exp_time)

        return HttpResponse(status=201)


@csrf_exempt
def product_auction_create(request):

    if request.method == 'POST':
        data = JSONParser().parse(request)

        name = data['name']
        price = data['price']
        price_step = data['price_step']
        userId = data['userId']
        organizationId = data['organizationId']
        categoryId = data['categoryId']
        exp_time = data['exp_time']
        info = data['info']

        newProduct = Product(name=name,
                             detail=info,
                             price=price,
                             auction=1,
                             owner_id=userId,
                             organization_id=organizationId,
                             category_id=categoryId,
                             created_time=datetime.now())
        newProduct.save()

        serializerNewProduct = ProductSerializer(newProduct)

        newAuction = Auction(exp_time=datetime.fromtimestamp(float(exp_time)),
                             lastest_price=price,
                             price_step=price_step,
                             product_id=newProduct.pk)
        newAuction.save()

        return JsonResponse(serializerNewProduct.data, status=201)


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
        image = ProductImage.objects.filter(product_id=product.id)
        serializerImage = ProductImageSerializer(image, many=True)

        data = serializerProduct.data
        data['seller'] = serializerSeller.data
        data['attributes'] = serializerAttibute.data
        data['images'] = serializerImage.data

        if product.auction == 1:
            auction = Auction.objects.get(product_id=pk)
            serializerAuction = AuctionSerializer(auction)
            data['auction'] = serializerAuction.data

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


@csrf_exempt
def product_create(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        name = data['name']
        price = data['price']
        userId = data['userId']
        organizationId = data['organizationId']
        categoryId = data['categoryId']
        quantity = data['quantity']
        info = data['info']

        newProduct = Product(name=name,
                             detail=info,
                             price=price,
                             quantity=quantity,
                             auction=0,
                             owner_id=userId,
                             organization_id=organizationId,
                             category_id=categoryId,
                             created_time=datetime.now())
        newProduct.save()

        serializerNewProduct = ProductSerializer(newProduct)

        return JsonResponse(serializerNewProduct.data, status=201)


@csrf_exempt
def product_create_attribute(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        name = data['name']
        price = data['price']
        sellerId = data['sellerId']
        organizationId = data['organizationId']
        categoryId = data['categoryId']
        # quantity = sum()
        attributes = data['attributes']
        info = data['info']

        newProduct = Product(name=name,
                             detail=info,
                             price=price,
                             auction=0,
                             owner_id=sellerId,
                             organization_id=organizationId,
                             category_id=categoryId,
                             created_time=datetime.now())
        newProduct.save()

        for attribute in attributes['values']:
            newAttribute = ProductAttribute(name=attributes['name'],
                                            product_id=newProduct.id,
                                            quantity=attribute['quantity'],
                                            value=attribute['value'])
            newAttribute.save()

        serializerNewProduct = ProductSerializer(newProduct)

        return JsonResponse(serializerNewProduct.data, status=201)


@csrf_exempt
def product_image(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Order.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'POST':
        image = request.FILES['image']

        filename_image, file_extension = os.path.splitext(image.name)

        nameImage = uuid.uuid4().hex + file_extension
        fs = FileSystemStorage()
        filename = fs.save(nameImage, image)

        storage_client = storage.Client()
        bucket_name = 'mejai'
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob('product/image/' + nameImage)

        blob.upload_from_filename(filename=filename)
        blob.make_public()

        fs.delete(nameImage)

        # product-Image save step

        newproductImage = ProductImage(url=blob.public_url,
                                       product_id=product.id)
        newproductImage.save()

        if not product.thumbnail:
            Product.objects.filter(
                pk=pk).update(thumbnail=blob.public_url)

        serializerImage = ProductImageSerializer(newproductImage)

        return JsonResponse(serializerImage.data)
