from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'detail',
            'price',
            'quantity',
            'auction',
            'type',
            'user_id',
            'viewer',
            'hit',
            'thumbnail',
            'created_time',
            'organization_id',
            'category_id'
        )
