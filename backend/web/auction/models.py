from __future__ import unicode_literals

from django.db import models
from product.models import Product
from customer.models import Customer


class Auction(models.Model):

    exp_time = models.DateTimeField()
    lastest_price = models.DecimalField(max_digits=10, decimal_places=2)
    price_step = models.DecimalField(max_digits=10, decimal_places=2)
    product = models.OneToOneField(
        Product,
        related_name='auction_product',
        on_delete=models.CASCADE,
        default=''
    )
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name='auction_customer', default='', null=True)
    valid = models.BooleanField(default=True)

    class Meta:
        managed = True
        db_table = 'Auction'
