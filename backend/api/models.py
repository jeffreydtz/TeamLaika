from django.db import models


# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.FloatField(default=0)


class Product(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    producttype = models.CharField(max_length=15)
