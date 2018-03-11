# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-11 15:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('time', models.DateTimeField()),
                ('customer_id', models.IntegerField(db_column='Customer_id')),
            ],
            options={
                'db_table': 'Cart',
                'managed': True,
            },
        ),
    ]
