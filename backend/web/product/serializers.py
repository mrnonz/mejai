from rest_framework import serializers
from .models import Product
from organization.serializers import OrganizationSerializer


class ProductSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer(read_only=True)

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
            'organization',
            'category_id'
        )
