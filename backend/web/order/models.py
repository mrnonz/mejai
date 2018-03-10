from __future__ import unicode_literals

from django.db import models


class Order(models.Model):
    time = models.DateTimeField()
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    product_id = models.IntegerField(db_column='Product_id')
    buyer_id = models.IntegerField(db_column='Buyer_id')

    class Meta:
        managed = True
        db_table = 'Order'
