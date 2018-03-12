from __future__ import unicode_literals

from django.db import models
from organization.models import Organization
from bank.models import Bank


class OrganizationBank(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    number = models.CharField(max_length=32)
    branch = models.CharField(max_length=255)
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name='organization_bank', default='')
    bank = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name='organization_bank_bank', default='')

    class Meta:
        managed = True
        db_table = 'Organization_Bank'
