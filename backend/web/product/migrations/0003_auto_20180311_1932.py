# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-11 19:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0003_organization_thumbnail'),
        ('product', '0002_auto_20180311_1918'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='organization_id',
        ),
        migrations.AddField(
            model_name='product',
            name='organization',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='organization', to='organization.Organization'),
        ),
    ]