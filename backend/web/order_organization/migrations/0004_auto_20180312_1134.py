# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-12 11:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0003_organization_thumbnail'),
        ('order_organization', '0003_auto_20180312_1133'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderorganization',
            name='organization_id',
        ),
        migrations.AddField(
            model_name='orderorganization',
            name='organization',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='order_organization_organization', to='organization.Organization'),
        ),
    ]