from __future__ import unicode_literals

from django.db import models


class OrderOrganization(models.Model):
    id = models.IntegerField(primary_key=True)
    slip = models.CharField(max_length=255)
    time = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    order_id = models.IntegerField(db_column='Order_id')  # Field name made lowercase.
    organization_id = models.IntegerField(db_column='Organization_id')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Order_Organization'
