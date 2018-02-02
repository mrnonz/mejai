from rest_framework import generics
from .models import Product


class CreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
