from __future__ import unicode_literals

from django.db import models


class Bank(models.Model):
    name_en = models.CharField(max_length=255)
    name_th = models.CharField(max_length=255)
    symbol = models.CharField(max_length=10)
    logo = models.CharField(max_length=1023)

    class Meta:
        managed = False
        db_table = 'Bank'
