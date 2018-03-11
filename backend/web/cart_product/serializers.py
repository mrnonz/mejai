from rest_framework import serializers
from .models import CartProduct


class CartProductSerializer(serializers.ModelSerializer):
    itemId = serializers.IntegerField(source='product_id')

    class Meta:
        model = CartProduct
        fields = (
            'time',
            'price',
            'quantity',
            'itemId'
        )
