from __future__ import unicode_literals

from django.db import models
from product.models import Product
from customer.models import Customer
from product_attribute.models import ProductAttribute


class Order(models.Model):
    time = models.DateTimeField()
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.IntegerField(default=0)
    attributename = models.CharField(max_length=255, default='')
    attributevalue = models.CharField(max_length=255, default='')
    address = models.CharField(max_length=1023, blank=True, null=True)
    slip = models.CharField(max_length=1023, default='')
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='order_product', default='')
    product_attribute = models.IntegerField(default=0)
    buyer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name='order_customer', default=''
    )

    class Meta:
        managed = True
        db_table = 'Order'
