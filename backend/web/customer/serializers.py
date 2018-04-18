from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    userId = serializers.IntegerField(source='id')
    firstname = serializers.CharField(source='first_name')
    lastname = serializers.CharField(source='last_name')

    class Meta:
        model = Customer
        fields = (
            'userId',
            'firstname',
            'lastname',
            'email',
            'username',
            'line_id',
            'sex',
            'address',
            'tel',
            'picture',
            'order_count',
            'buy_count',
            'sell_count'
        )
