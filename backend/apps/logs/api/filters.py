# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Log


class LogFilter(django_filters.FilterSet):

    class Meta:
        model = Log
        fields = ('id', 'code', 'model', 'created')
