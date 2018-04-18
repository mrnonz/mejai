# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from product.models import Product


class ProductAttribute(models.Model):
    name = models.CharField(max_length=255, default='')
    value = models.CharField(max_length=255)
    quantity = models.IntegerField()
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='product_attribute_product', default='')

    class Meta:
        managed = True
        db_table = 'Product_Attribute'
