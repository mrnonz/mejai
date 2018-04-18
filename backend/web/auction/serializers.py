from rest_framework import serializers
from .models import Auction


class AuctionSerializer(serializers.ModelSerializer):
    userId = serializers.IntegerField(source='customer_id')

    class Meta:
        model = Auction
        fields = (
            'userId',
            'product_id',
            'exp_time',
            'lastest_price',
            'price_step'
        )
