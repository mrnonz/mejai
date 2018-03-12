# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class ProductCategory(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'Product_Category'
