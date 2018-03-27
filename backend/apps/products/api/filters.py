# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Product, ProductDepartment, ProductSubDepartment


class ProductFilter(django_filters.FilterSet):

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'unit', 'department', 'subdepartment', 'base_code', 'barcode',
                  'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code', 'inventory_enabled',
                  'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost', 'utility', 'utility2',
                  'utility3', 'price', 'price2', 'price3', 'ask_price', 'use_taxes', 'taxes', 'use_taxes2', 'taxes2',
                  'pred_discount', 'is_active', 'consignment', 'generic', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'sell_price2', 'sell_price3')


class ProductDepartmentFilter(django_filters.FilterSet):

    class Meta:
        model = ProductDepartment
        fields = ('id', 'name', 'code', 'created', 'updated')


class ProductSubDepartmentFilter(django_filters.FilterSet):

    class Meta:
        model = ProductSubDepartment
        fields = ('id', 'name', 'code', 'department', 'created', 'updated')
