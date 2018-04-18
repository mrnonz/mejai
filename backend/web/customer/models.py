from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser


class Customer(AbstractUser):
    line_id = models.CharField(max_length=255, blank=True, null=True)
    sex = models.CharField(max_length=1, blank=True, null=True)
    address = models.CharField(max_length=1023, blank=True, null=True)
    tel = models.CharField(max_length=15, blank=True, null=True)
    picture = models.CharField(max_length=1023)
    order_count = models.IntegerField(default=0)
    buy_count = models.IntegerField(default=0)
    sell_count = models.IntegerField(default=0)

    class Meta:
        managed = True
        db_table = 'Customer'
