# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Product, ProductDepartment, ProductSubDepartment
from .filters import ProductFilter, ProductDepartmentFilter, ProductSubDepartmentFilter
from .serializers import ProductSerializer, ProductDepartmentSerializer, ProductSubDepartmentSerializer
from .permissions import HasProperPermission, HasProperDepartmentPermission, HasProperSubDepartmentPermission


class ProductViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
    filter_class = ProductFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class ProductDepartmentViewSet(viewsets.ModelViewSet):

    serializer_class = ProductDepartmentSerializer
    queryset = ProductDepartment.objects.all()
    lookup_field = 'id'
    filter_class = ProductDepartmentFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperDepartmentPermission(), ]


class ProductSubDepartmentViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSubDepartmentSerializer
    queryset = ProductSubDepartment.objects.all()
    lookup_field = 'id'
    filter_class = ProductSubDepartmentFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperSubDepartmentPermission(), ]
