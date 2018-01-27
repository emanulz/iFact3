# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from .models import Client


class ClientFilter(django_filters.FilterSet):

    class Meta:
        model = Client
        fields = ('id', 'name', 'last_name', 'code', 'id_type', 'id_num', 'has_credit', 'credit_limit', 'credit_days')
