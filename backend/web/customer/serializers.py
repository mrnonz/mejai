from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'username',
            'password',
            'line_id',
            'sex',
            'address',
            'tel',
            'picture',
            'order_count',
            'buy_count',
            'sell_count'
        )
