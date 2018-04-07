from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from order.models import Order
from order.serializers import OrderSerializer
from product.models import Product
from product.serializers import ProductSerializer
from customer.models import Customer
from customer.serializers import CustomerSerializer
from google.cloud import storage
from django.core.files.storage import FileSystemStorage
from datetime import datetime
import uuid
import os


@csrf_exempt
def order_detail(request, pk):
    try:
        order = Order.objects.get(pk=pk)
    except Order.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        data = {}
        serializerOrder = OrderSerializer(order)

        product = Product.objects.get(id=order.product_id)
        serializerProduct = ProductSerializer(product)

        data = serializerOrder.data

        buyer = data['buyerId']
        buyer = Customer.objects.get(pk=buyer)
        serializerBuyer = CustomerSerializer(buyer)
        buyer_data = serializerBuyer.data
        address = {
            "firstname": buyer_data['first_name'],
            "lastname": buyer_data['last_name'],
            "tel": buyer_data['tel'],
            "address": buyer_data['address']
        }

        data['item'] = serializerProduct.data
        data['userId'] = data['buyerId']
        data['organizationId'] = data['item']['organization']['organizationId']
        data['slip'] = data['slip']
        data['sellerId'] = data['item']['owner_id']
        data['address'] = address
        # clean data
        data.pop('buyerId')
        data.pop('slip')
        return JsonResponse(data)


@csrf_exempt
def order_status(request, pk):
    try:
        order = Order.objects.get(pk=pk)
    except Order.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'PUT':
        if order.status < 3:
            order.status += 1

        order.save()
        serializerOrder = OrderSerializer(order)

        return JsonResponse(serializerOrder.data)


@csrf_exempt
def order_slip(request, pk):
    try:
        order = Order.objects.get(pk=pk)
    except Order.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'POST':
        slip = request.FILES['slip']

        filename_slip, file_extension = os.path.splitext(slip.name)

        nameSlip = uuid.uuid4().hex + file_extension
        fs = FileSystemStorage()
        filename = fs.save(nameSlip, slip)

        storage_client = storage.Client()
        bucket_name = 'mejai'
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob('bank/transfer/slip/' + nameSlip)

        blob.upload_from_filename(filename=filename)
        blob.make_public()

        fs.delete(nameSlip)

        order.slip = blob.public_url
        order.save()
        serializerOrder = OrderSerializer(order)

        return JsonResponse(serializerOrder.data)


@csrf_exempt
def order_create(request):

    if request.method == 'POST':
        data = JSONParser().parse(request)
        userId = data['userId']
        cartId = data['cartId']
        items = data['items']

        result = {}
        result['data'] = []

        for item in items:
            productId = item['product']['id']
            attributeName = item['product']['attribute']['name']
            attributeValue = item['product']['attribute']['value']
            price = item['price']
            quantity = item['quantity']

            order = Order(quantity=quantity,
                          price=price,
                          status=1,
                          product_id=productId,
                          buyer_id=userId,
                          attributename=attributeName,
                          attributevalue=attributeValue,
                          time=datetime.now()
                          )

            order.save()
            serializerOrder = OrderSerializer(order)
            appendData = serializerOrder.data
            appendData['item'] = item['product']

            productOrganization = Product.objects.get(id=productId)
            appendData['organizationId'] = productOrganization.organization_id

            result['data'].append(appendData)

    return JsonResponse(result)
