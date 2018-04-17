from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from auction.models import Auction
from auction.serializers import AuctionSerializer
from cart.models import Cart
from cart_product.models import CartProduct
from datetime import datetime


@csrf_exempt
def auction_checkcart(request):
    if request.method == 'GET':
        auctions = Auction.objects.filter(
            valid=True,
            exp_time__lt=datetime.now()
        )

        serializerAuction = AuctionSerializer(auctions, many=True)

        for auction in auctions:
            itemId = auction.product_id
            lastest_price = auction.lastest_price

            cart, created = Cart.objects.get_or_create(
                customer_id=auction.customer_id, time=datetime.now())

            cart = Cart.objects.get(customer_id=auction.customer_id)

            cartProduct = CartProduct(cart_id=cart.id,
                                      product_id=itemId,
                                      price=lastest_price,
                                      quantity=1,
                                      time=datetime.now())

            cartProduct.save()

            Auction.objects.filter(
                pk=auction.id).update(valid=False)

        return JsonResponse(serializerAuction.data, status=200, safe=False)
