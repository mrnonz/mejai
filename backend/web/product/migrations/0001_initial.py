# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2018-02-02 07:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('detail', models.TextField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('quantity', models.IntegerField()),
                ('auction', models.IntegerField()),
                ('type', models.IntegerField()),
                ('user_id', models.IntegerField(db_column='User_id')),
                ('viewer', models.IntegerField()),
                ('hit', models.IntegerField()),
                ('thumbnail', models.CharField(max_length=1023)),
                ('created_time', models.DateTimeField()),
                ('organization_id', models.IntegerField(db_column='Organization_id')),
                ('category_id', models.IntegerField(db_column='Category_id')),
            ],
            options={
                'db_table': 'Product',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ProductAttribute',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=255)),
                ('size', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('quantity', models.IntegerField()),
                ('product_id', models.IntegerField(db_column='Product_id')),
            ],
            options={
                'db_table': 'Product_Attribute',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'Product_Category',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=1023)),
                ('product_id', models.IntegerField(db_column='Product_id')),
            ],
            options={
                'db_table': 'Product_Image',
                'managed': False,
            },
        ),
    ]
