# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from organization.models import Organization
from bank.models import Bank


class OrganizationPromptpay(models.Model):
    name = models.CharField(max_length=255)
    number = models.CharField(max_length=32)
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name='organization_promptpay', default='')

    class Meta:
        managed = True
        db_table = 'Organization_Promptpay'
