from rest_framework import serializers
from .models import Bank


class BankSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bank
        fields = (
            'name_en',
            'name_th',
            'symbol',
            'logo',
        )
