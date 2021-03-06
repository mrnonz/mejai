# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-12 12:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cart_product', '0005_auto_20180311_1927'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartproduct',
            name='cart',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='cart_product_cart', to='cart.Cart'),
        ),
        migrations.AlterField(
            model_name='cartproduct',
            name='product',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='cart_product_product', to='product.Product'),
        ),
    ]
