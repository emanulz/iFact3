# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Log
# from general.models.companies import Company


@admin.register(Log)
class ClientAdmin(admin.ModelAdmin):

    list_display = ('id', 'code', 'model', 'created')

    search_fields = ('id', 'code', 'model', 'created')
