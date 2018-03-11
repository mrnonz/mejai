from rest_framework import serializers
from .models import Cart


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
