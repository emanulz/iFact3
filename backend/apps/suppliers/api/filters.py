# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Supplier


class SupplierFilter(django_filters.FilterSet):

    class Meta:
        model = Supplier
        fields = ('id', 'code', 'name', 'id_type', 'id_num', 'address', 'phone_number', 'cellphone_number', 'email',
                  'agent_name', 'agent_last_name', 'agent_phone_number', 'agent_email', 'created', 'updated')
