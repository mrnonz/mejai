# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-06 16:22
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product_attribute', '0002_productattribute_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productattribute',
            old_name='size',
            new_name='value',
        ),
        migrations.RemoveField(
            model_name='productattribute',
            name='color',
        ),
        migrations.RemoveField(
            model_name='productattribute',
            name='price',
        ),
    ]
