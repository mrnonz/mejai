from __future__ import unicode_literals

from django.db import models
from organization.models import Organization


class Product(models.Model):
    name = models.CharField(max_length=255)
    detail = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    auction = models.IntegerField()
    type = models.IntegerField()
    user_id = models.IntegerField(db_column='User_id')
    viewer = models.IntegerField()
    hit = models.IntegerField()
    thumbnail = models.CharField(max_length=1023)
    created_time = models.DateTimeField()
    category_id = models.IntegerField(db_column='Category_id')
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name='product_organization', default='')

    class Meta:
        managed = True
        db_table = 'Product'


class ProductAttribute(models.Model):
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    product_id = models.IntegerField(db_column='Product_id')

    class Meta:
        managed = True
        db_table = 'Product_Attribute'


class ProductCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'Product_Category'


class ProductImage(models.Model):
    url = models.CharField(max_length=1023)
    product_id = models.IntegerField(db_column='Product_id')

    class Meta:
        managed = True
        db_table = 'Product_Image'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_migrations'
