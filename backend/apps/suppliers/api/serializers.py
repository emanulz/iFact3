# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Supplier


class SupplierSerializer(serializers.ModelSerializer):

    class Meta:
        model = Supplier
        fields = ('id', 'code', 'name', 'id_type', 'id_num', 'address', 'phone_number', 'cellphone_number', 'email',
                  'agent_name', 'agent_last_name', 'agent_phone_number', 'agent_email', 'bank_accounts',
                  'sinpe_accounts', 'observations', 'created', 'updated')
