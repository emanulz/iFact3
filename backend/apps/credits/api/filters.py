# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Credit_Movement


class Credit_MovementFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'movement_number', 'client_id', 'bill_id', 'movement_type', 'amount', 'description', 'created',
                  'updated')
