# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Sale
from .filters import SaleFilter
from .serializers import SaleSerializer
from .permissions import HasProperPermission


class SaleViewSet(viewsets.ModelViewSet):

    serializer_class = SaleSerializer
    queryset = Sale.objects.all()
    lookup_field = 'id'
    filter_class = SaleFilter

    def get_permissions(self):
        return [HasProperPermission(), ]
