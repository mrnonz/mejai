# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-02-05 14:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField()),
                ('quantity', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('product_id', models.IntegerField(db_column='Product_id')),
                ('buyer_id', models.IntegerField(db_column='Buyer_id')),
            ],
            options={
                'db_table': 'Order',
                'managed': False,
            },
        ),
    ]
