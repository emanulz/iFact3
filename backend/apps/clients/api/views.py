# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Client
from .filters import ClientFilter
from .serializers import ClientSerializer


class ClientViewSet(viewsets.ModelViewSet):

    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    lookup_field = 'id'
    filter_class = ClientFilter
