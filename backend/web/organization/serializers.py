from rest_framework import serializers
from .models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    organizationId = serializers.IntegerField(source='id')
    description = serializers.CharField(source='detail')
    class Meta:
        model = Organization
        fields = (
            'organizationId',
            'name',
            'description'
        )
