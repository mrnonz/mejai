from rest_framework import serializers
from .models import Bank


class BankSerializer(serializers.ModelSerializer):
    bankId = serializers.IntegerField(source='id')

    class Meta:
        model = Bank
        fields = (
            'bankId',
            'name_en',
            'name_th',
            'symbol',
            'logo',
        )
