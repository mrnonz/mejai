# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from cart.models import Cart
from product.models import Product
from product_attribute.models import ProductAttribute


class CartProduct(models.Model):
    id = models.IntegerField(primary_key=True)
    time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name='cart_product_cart', default='')
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='cart_product_product', default='')
    attribute = models.ForeignKey(
        ProductAttribute, on_delete=models.CASCADE, related_name='cart_product_product_attribute', default='')

    class Meta:
        managed = True
        db_table = 'Cart_Product'
