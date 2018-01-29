# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Product, ProductDepartment, ProductSubDepartment
# from general.models.companies import Company


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):

    list_display = ('base_code', 'code', 'description', 'unit', 'model', 'part_number')

    search_fields = ('base_code', 'code', 'description', 'unit', 'model', 'part_number')


@admin.register(ProductDepartment)
class ProductDepartmentAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'code',)
    search_fields = ('id', 'name', 'code',)


@admin.register(ProductSubDepartment)
class ProductSubDepartmentAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'department', 'code', )
    search_fields = ('id', 'name', 'department', 'code', )
