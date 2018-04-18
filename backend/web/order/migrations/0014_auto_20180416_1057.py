# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-16 03:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0013_auto_20180412_0108'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='attribute',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='order_product_attribute', to='product_attribute.ProductAttribute'),
        ),
    ]
