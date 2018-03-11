# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from cart.models import Cart


class CartProduct(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    product_id = models.IntegerField(db_column='Product_id')
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='items', default='')

    class Meta:
        managed = True
        db_table = 'Cart_Product'
