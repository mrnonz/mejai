from __future__ import unicode_literals

from django.db import models
from auction.models import Auction


class AuctionCustomer(models.Model):
    id = models.IntegerField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time = models.DateTimeField()
    customer_id = models.IntegerField(db_column='Customer_id')  # Field name made lowercase.
    auction = models.ForeignKey(
        Auction, on_delete=models.CASCADE, related_name='auction', default='')

    class Meta:
        managed = True
        db_table = 'Auction_Customer'
