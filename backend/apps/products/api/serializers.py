# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Product, ProductDepartment, ProductSubDepartment


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'unit', 'fractioned', 'department', 'subdepartment', 'base_code',
                  'barcode', 'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code',
                  'inventory_enabled', 'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost',
                  'utility', 'utility2', 'utility3', 'price', 'price2', 'price3', 'ask_price', 'use_taxes', 'taxes',
                  'use_taxes2', 'taxes2', 'pred_discount', 'is_active', 'consignment', 'generic', 'image',
                  'observations', 'created', 'updated', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'sell_price2', 'sell_price3')


class ProductDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductDepartment
        fields = ('id', 'name', 'code', 'observations', 'created', 'updated')


class ProductSubDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSubDepartment
        fields = ('id', 'department', 'name', 'code', 'observations', 'created', 'updated')
