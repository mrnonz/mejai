# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from product.models import Product


class ProductAttribute(models.Model):
    name = models.CharField(max_length=255, default='')
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='product_attribute_product', default='')

    class Meta:
        managed = True
        db_table = 'Product_Attribute'
