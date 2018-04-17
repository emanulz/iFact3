# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Credit_Movement
from .filters import Credit_MovementFilter
from .serializers import Credit_MovementSerializer
from .permissions import HasProperPermission


class Credit_MovementViewSet(viewsets.ModelViewSet):

    serializer_class = Credit_MovementSerializer
    queryset = Credit_Movement.objects.all()
    lookup_field = 'id'
    filter_class = Credit_MovementFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
