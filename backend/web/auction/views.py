from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


@csrf_exempt
def auction_checkcart(request):
    if request.method == 'GET':

        return HttpResponse(status=200)
