# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Product
from .filters import ProductFilter
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
    filter_class = ProductFilter
