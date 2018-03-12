from __future__ import unicode_literals

from django.db import models
from order.models import Order
from organization.models import Organization


class OrderOrganization(models.Model):
    id = models.IntegerField(primary_key=True)
    slip = models.CharField(max_length=255)
    time = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='order_organization_order', default='')
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name='order_organization_organization', default='')

    class Meta:
        managed = True
        db_table = 'Order_Organization'
