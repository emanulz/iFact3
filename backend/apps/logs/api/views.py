# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Log
from .filters import LogFilter
from .serializers import LogSerializer
from .permissions import HasProperPermission


class LogViewSet(viewsets.ModelViewSet):

    serializer_class = LogSerializer
    queryset = Log.objects.all()
    lookup_field = 'id'
    filter_class = LogFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
