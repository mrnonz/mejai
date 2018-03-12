# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from customer.models import Customer


class Cart(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name='cart_customer', default='')

    class Meta:
        managed = True
        db_table = 'Cart'
