# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-02-12 11:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OrderOrganization',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('slip', models.CharField(max_length=255)),
                ('time', models.DateTimeField()),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('order_id', models.IntegerField(db_column='Order_id')),
                ('organization_id', models.IntegerField(db_column='Organization_id')),
            ],
            options={
                'db_table': 'Order_Organization',
                'managed': False,
            },
        ),
    ]
