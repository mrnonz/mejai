# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-02-05 14:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuctionCustomer',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('time', models.DateTimeField()),
                ('auction_id', models.IntegerField(db_column='Auction_id')),
                ('customer_id', models.IntegerField(db_column='Customer_id')),
            ],
            options={
                'db_table': 'Auction_Customer',
                'managed': False,
            },
        ),
    ]