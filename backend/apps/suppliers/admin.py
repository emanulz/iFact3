# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Supplier


@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):

    list_display = ('code', 'name', 'phone_number', 'cellphone_number', 'email')

    search_fields = ('code', 'name', 'phone_number', 'cellphone_number', 'email')
