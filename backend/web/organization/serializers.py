from rest_framework import serializers
from .models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    organizationId = serializers.IntegerField(source='id')
    description = serializers.CharField(source='detail')
    contribution = serializers.FloatField(source='fund')

    class Meta:
        model = Organization
        fields = (
            'organizationId',
            'name',
            'description',
            'thumbnail',
            'contribution',
            'category',
            'info'
        )
