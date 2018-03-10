from __future__ import unicode_literals

from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=255)
    detail = models.TextField(blank=True, null=True)
    time = models.DateTimeField()
    fund = models.DecimalField(max_digits=10, decimal_places=2)
    thumbnail = models.CharField(max_length=1023)

    class Meta:
        managed = True
        db_table = 'Organization'
