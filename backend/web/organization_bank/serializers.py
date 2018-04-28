from rest_framework import serializers
from .models import OrganizationBank


class OrganizationBankSerializer(serializers.ModelSerializer):
    bankId = serializers.IntegerField(source='bank_id')

    class Meta:
        model = OrganizationBank
        fields = (
            'name',
            'bankId',
            'number',
            'branch',
        )
