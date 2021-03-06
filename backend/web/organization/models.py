from __future__ import unicode_literals

from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=255)
    detail = models.TextField(blank=True, null=True)
    time = models.DateTimeField()
    fund = models.DecimalField(max_digits=10, decimal_places=2)
    thumbnail = models.CharField(max_length=1023, default='')
    category = models.IntegerField(default=0)
    info = models.TextField(default='')
    email = models.CharField(max_length=254, default='')
    password = models.CharField(max_length=128, default='')

    class Meta:
        managed = True
        db_table = 'Organization'
