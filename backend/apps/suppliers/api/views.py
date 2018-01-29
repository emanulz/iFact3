# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Supplier
from .filters import SupplierFilter
from .serializers import SupplierSerializer


class SupplierViewSet(viewsets.ModelViewSet):

    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()
    lookup_field = 'id'
    filter_class = SupplierFilter
