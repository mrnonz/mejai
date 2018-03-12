from __future__ import unicode_literals

from django.db import models
from product.models import Product


class Order(models.Model):
    time = models.DateTimeField()
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    buyer_id = models.IntegerField(db_column='Buyer_id')
    status = models.BooleanField(default=False)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='order_product', default='')

    class Meta:
        managed = True
        db_table = 'Order'
