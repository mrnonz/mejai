from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from order.models import Order
from order.serializers import OrderSerializer
from product.models import Product
from product.serializers import ProductSerializer
from customer.models import Customer
from customer.serializers import CustomerSerializer


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
        address_update = {
            "firstname": buyer_data['first_name'],
            "lastname": buyer_data['last_name'],
            "tel": buyer_data['tel'],
            "address": buyer_data['address']
        }

        data['item'] = serializerProduct.data
        data['userId_update'] = data['buyerId']
        data['organizationId'] = data['item']['organization']['organizationId']
        data['slip_update'] = data['slip']
        data['sellerId_update'] = data['item']['owner_id']
        data['address_update'] = address_update
        # clean data
        data.pop('buyerId')
        data.pop('slip')
        return JsonResponse(data)
