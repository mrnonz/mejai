# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-11 18:08
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0012_order_attribute'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='attributename',
        ),
        migrations.RemoveField(
            model_name='order',
            name='attributevalue',
        ),
    ]
