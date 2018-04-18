# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-11 19:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
        ('cart_product', '0002_auto_20180311_1842'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartproduct',
            name='cart_id',
        ),
        migrations.AddField(
            model_name='cartproduct',
            name='cart',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='items', to='cart.Cart'),
        ),
    ]
