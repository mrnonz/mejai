# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-11 19:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20180311_1918'),
        ('cart_product', '0003_auto_20180311_1911'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartproduct',
            name='product_id',
        ),
        migrations.AddField(
            model_name='cartproduct',
            name='product',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='products', to='product.Product'),
        ),
    ]
