# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Client


class ClientFilter(django_filters.FilterSet):

    class Meta:
        model = Client
        fields = ('id', 'code', 'name', 'last_name', 'id_type', 'id_num', 'address', 'phone_number', 'cellphone_number',
                  'email', 'pred_discount', 'max_discount', 'max_line_discount', 'pays_taxes', 'has_credit',
                  'credit_limit', 'credit_days', 'client_type', 'created', 'updated')
