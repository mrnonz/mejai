# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-12 13:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_product_organization'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ProductCategory',
        ),
        migrations.DeleteModel(
            name='ProductImage',
        ),
    ]