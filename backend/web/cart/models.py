# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Cart(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    customer_id = models.IntegerField(db_column='Customer_id')

    class Meta:
        managed = True
        db_table = 'Cart'
