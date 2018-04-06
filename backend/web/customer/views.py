from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from customer.models import Customer
from customer.serializers import CustomerSerializer
from order.models import Order
from order.serializers import OrderSerializer
from cart.models import Cart
from cart.serializers import CartSerializer
from cart.serializers import FullCartProductSerializer
from cart_product.models import CartProduct
from cart_product.serializers import CartProductSerializer
from product.models import Product
from product.serializers import ProductSerializer
from order.models import Order
from order.serializers import OrderSerializer

from datetime import datetime


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
def customer_create(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)

        email = data['email']
        firstname = data['firstname']
        lastname = data['lastname']
        password = data['password']

        customer = Customer(email=email,
                            first_name=firstname,
                            last_name=lastname,
                            password=password)
        customer.save()

        serializerCustomer = CustomerSerializer(customer)

        return JsonResponse(serializerCustomer.data, status=201)


@csrf_exempt
def customer_orders(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        order = Order.objects.filter(buyer_id=pk)
        serializer = OrderSerializer(order, many=True)
        data = {}
        data['data'] = serializer.data
        data['userId'] = int(pk)
        return JsonResponse(data, safe=False)


@csrf_exempt
def customer_cart(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        cart = Cart.objects.get(customer_id=pk)
        cartProduct = CartProduct.objects.filter(cart_id=cart.pk)
        serializerCartProduct = CartProductSerializer(cartProduct, many=True)
        serializerCart = FullCartProductSerializer(cart)
        data = serializerCart.data
        data['items'] = serializerCartProduct.data
        return JsonResponse(data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        itemId = data['itemId']
        quantity = data['quantity']

        cart, created = Cart.objects.get_or_create(customer_id=pk)
        product = Product.objects.get(pk=itemId)

        try:
            cartProduct = CartProduct.objects.get(
                cart_id=cart.id,
                product_id=itemId)
            cartProduct.quantity += quantity
        except CartProduct.DoesNotExist:
            cartProduct = CartProduct(cart_id=cart.id,
                                      product_id=itemId,
                                      price=product.price,
                                      quantity=quantity,
                                      time=datetime.now())

        cartProduct.save()

        return HttpResponse(status=201)
    elif request.method == 'DELETE':
        data = JSONParser().parse(request)
        itemId = data['itemId']

        cart, created = Cart.objects.get_or_create(customer_id=pk)
        product = Product.objects.get(pk=itemId)

        cartProduct = CartProduct.objects.get(
            cart_id=cart.id,
            product_id=itemId)

        cartProduct.delete()

        return HttpResponse(status=202)


@csrf_exempt
def customer_cart_auction(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        cart = Cart.objects.get(customer_id=pk)
        cartProduct = CartProduct.objects.filter(
            cart_id=cart.pk).filter(product__auction=1)
        serializerCartProduct = CartProductSerializer(
            cartProduct, many=True)
        serializerCart = FullCartProductSerializer(cart)
        data = serializerCart.data
        data['items'] = serializerCartProduct.data
        return JsonResponse(data)


@csrf_exempt
def customer_cart_buy(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        cart = Cart.objects.get(customer_id=pk)
        cartProduct = CartProduct.objects.filter(
            cart_id=cart.pk).filter(product__auction=0)
        serializerCartProduct = CartProductSerializer(
            cartProduct, many=True)
        serializerCart = FullCartProductSerializer(cart)
        data = serializerCart.data
        data['items'] = serializerCartProduct.data
        return JsonResponse(data)


@csrf_exempt
def customer_address(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CustomerSerializer(customer)
        data = serializer.data
        data['name'] = data['firstname'] + ' ' + data['lastname']
        return JsonResponse(data, safe=False)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)

        firstname = data['firstname']
        lastname = data['lastname']
        tel = data['tel']
        district = data['district']
        subDistrict = data['subDistrict']
        province = data['province']
        postcode = data['postcode']

        newAddress = firstname + '\\' + lastname + '\\' + district + '\\' + \
            subDistrict + '\\' + province + '\\' + postcode + '\\' + tel

        putCustomer = Customer.objects.filter(
            pk=pk).update(address=newAddress)

        customer = Customer.objects.get(pk=pk)

        serializerPutCustomer = CustomerSerializer(customer)
        data = serializerPutCustomer.data
        data['name'] = data['firstname'] + ' ' + data['lastname']

        return JsonResponse(data, status=201)


@csrf_exempt
def customer_sell_order(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        product = Product.objects.filter(
            owner_id=pk).values_list('id', flat=True)
        # serializerProduct = ProductSerializer(product, many=True)
        order = Order.objects.filter(product_id__in=product)
        serializerOrder = OrderSerializer(order, many=True)

        data = {}
        data['data'] = serializerOrder.data
        data['userId'] = pk

        return JsonResponse(data)
