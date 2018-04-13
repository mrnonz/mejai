from rest_framework import serializers
from .models import ProductAttribute


class ProductAttributeSerializer(serializers.ModelSerializer):
    productId = serializers.IntegerField(source='product_id')

    class Meta:
        model = ProductAttribute
        fields = (
            'id',
            'productId',
            'name',
            'value',
            'quantity'
        )
