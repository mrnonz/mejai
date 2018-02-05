from __future__ import unicode_literals

from django.db import models


class AuctionCustomer(models.Model):
    id = models.IntegerField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time = models.DateTimeField()
    auction_id = models.IntegerField(db_column='Auction_id')  # Field name made lowercase.
    customer_id = models.IntegerField(db_column='Customer_id')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Auction_Customer'
