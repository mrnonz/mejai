from __future__ import unicode_literals

from django.db import models


class Auction(models.Model):
    product_id = models.IntegerField(db_column='Product_id')  # Field name made lowercase.
    exp_time = models.DateTimeField()
    lastest_price = models.DecimalField(max_digits=10, decimal_places=2)
    price_step = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = True
        db_table = 'Auction'
