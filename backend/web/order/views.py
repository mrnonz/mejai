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
        data['item'] = serializerProduct.data
        data['userId_update'] = data['buyerId']
        data['organizationId'] = data['item']['organization']['organizationId']
        data['address_update'] = "address_update"
        data['slip_update'] = "slip_update"
        data['sellerId_update'] = data['item']['owner_id']

        # clean data
        data.pop('buyerId')

        return JsonResponse(data)
