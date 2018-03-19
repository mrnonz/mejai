from rest_framework import serializers
from .models import Product
from organization.serializers import OrganizationSerializer


class ProductSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer(read_only=True)
    productId = serializers.IntegerField(source='id')

    class Meta:
        model = Product
        fields = (
            'productId',
            'name',
            'detail',
            'price',
            'quantity',
            'auction',
            'type',
            'owner_id',
            'viewer',
            'hit',
            'thumbnail',
            'created_time',
            'organization',
            'category_id'
        )
