from __future__ import unicode_literals

from django.db import models


class OrganizationBank(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    number = models.CharField(max_length=32)
    branch = models.CharField(max_length=255)
    organization_id = models.IntegerField(db_column='Organization_id')  # Field name made lowercase.
    bank_id = models.IntegerField(db_column='Bank_id')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Organization_Bank'
