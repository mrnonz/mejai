# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-24 15:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0005_organization_info'),
    ]

    operations = [
        migrations.AddField(
            model_name='organization',
            name='password',
            field=models.CharField(default='', max_length=128),
        ),
        migrations.AddField(
            model_name='organization',
            name='username',
            field=models.CharField(default='', max_length=150),
        ),
    ]
