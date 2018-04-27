from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from bank.models import Bank
from bank.serializers import BankSerializer


@csrf_exempt
def bank_list(request):
    if request.method == 'GET':
        bank = Bank.objects.all()
        serializer = BankSerializer(bank, many=True)
        return JsonResponse(serializer.data, safe=False)
