from rest_framework import serializers
from .models import OrganizationBank


class OrganizationBankSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrganizationBank
        fields = (
            'name',
            'type',
            'number',
            'branch',
        )
