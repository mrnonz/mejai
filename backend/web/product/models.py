from __future__ import unicode_literals

from django.db import models
from organization.models import Organization
from product_category.models import ProductCategory
from customer.models import Customer


class Product(models.Model):
    name = models.CharField(max_length=255)
    detail = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=0)
    auction = models.IntegerField(default=0)
    type = models.IntegerField(default=0)
    owner = models.ForeignKey(
        Customer, on_delete=models.CASCADE, related_name='product_customer', default='')
    viewer = models.IntegerField(default=0)
    hit = models.IntegerField(default=0)
    thumbnail = models.CharField(max_length=1023)
    created_time = models.DateTimeField()
    category = models.ForeignKey(
        ProductCategory, on_delete=models.CASCADE, related_name='product_category', default='', null=True)
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name='product_organization', default='')

    class Meta:
        managed = True
        db_table = 'Product'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_migrations'
