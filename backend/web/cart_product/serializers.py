from rest_framework import serializers
from .models import CartProduct
from product.serializers import ProductSerializer


class CartProductSerializer(serializers.ModelSerializer):
    itemId = serializers.IntegerField(source='product_id')
    product = ProductSerializer(read_only=True)

    class Meta:
        model = CartProduct
        fields = (
            'time',
            'price',
            'quantity',
            'itemId',
            'product'
        )
