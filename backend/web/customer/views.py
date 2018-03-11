from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from customer.models import Customer
from customer.serializers import CustomerSerializer
from order.models import Order
from order.serializers import OrderSerializer
from cart.models import Cart
from cart.serializers import CartSerializer
from cart_product.models import CartProduct
from cart_product.serializers import CartProductSerializer


@csrf_exempt
def customer_list(request):
    if request.method == 'GET':
        customer = Customer.objects.all()
        serializer = CustomerSerializer(customer, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CustomerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def customer_detail(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CustomerSerializer(customer)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CustomerSerializer(customer, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        customer.delete()
        return HttpResponse(status=204)


@csrf_exempt
def customer_orders(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        order = Order.objects.filter(buyer_id=pk)
        serializer = OrderSerializer(order, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def customer_cart(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        cart = Cart.objects.get(customer_id=pk)
        serializer = CartSerializer(cart)
        return JsonResponse(serializer.data)
