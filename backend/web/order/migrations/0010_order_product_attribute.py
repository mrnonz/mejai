# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-11 17:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0009_order_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product_attribute',
            field=models.IntegerField(default=0),
        ),
    ]
