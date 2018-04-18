from rest_framework import serializers
from .models import OrganizationPromptpay


class OrganizationPromptpaySerializer(serializers.ModelSerializer):

    class Meta:
        model = OrganizationPromptpay
        fields = (
            'name',
            'number',
        )
