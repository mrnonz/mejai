# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-12 12:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0003_auto_20180311_1932'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=1023)),
                ('product', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='product_image_product', to='product.Product')),
            ],
            options={
                'db_table': 'Product_Image',
                'managed': True,
            },
        ),
    ]
