# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers, viewsets
from .models import Client
from .filters import ClientFilter

# API


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ('id', 'name', 'last_name', 'code', 'id_type', 'id_num', 'has_credit', 'credit_limit', 'credit_days')


class ClientViewSet(viewsets.ModelViewSet):

    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    lookup_field = 'id'
    filter_class = ClientFilter
