from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    orderId = serializers.IntegerField(source='id')
    productId = serializers.IntegerField(source='product_id')
    buyerId = serializers.IntegerField(source='buyer_id')
    orderStatus = serializers.BooleanField(source='status')

    class Meta:
        model = Order
        fields = (
            'orderId',
            'time',
            'quantity',
            'price',
            'productId',
            'buyerId',
            'orderStatus'
        )
