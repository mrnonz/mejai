# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from product.models import Product


class ProductImage(models.Model):
    url = models.CharField(max_length=1023)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='product_image_product', default='')

    class Meta:
        managed = True
        db_table = 'Product_Image'
