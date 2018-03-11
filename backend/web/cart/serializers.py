from rest_framework import serializers
from .models import Cart
from cart_product.serializers import CartProductSerializer


class CartSerializer(serializers.ModelSerializer):
    cartId = serializers.IntegerField(source='id')
    customerId = serializers.IntegerField(source='customer_id')

    class Meta:
        model = Cart
        fields = (
            'cartId',
            'time',
            'customerId'
        )


class FullCartProductSerializer(serializers.ModelSerializer):
    cartId = serializers.IntegerField(source='id')
    customerId = serializers.IntegerField(source='customer_id')
    items = CartProductSerializer(
        many=True, read_only=True)

    class Meta:
        model = Cart
        fields = (
            'cartId',
            'time',
            'customerId',
            'items'
        )
