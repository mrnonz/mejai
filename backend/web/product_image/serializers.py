from rest_framework import serializers
from .models import ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    productId = serializers.IntegerField(source='product_id')

    class Meta:
        model = ProductImage
        fields = (
            'productId',
            'url'
        )
