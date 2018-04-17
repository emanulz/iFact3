# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Credit_Movement


class Credit_MovementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'movement_number', 'client_id', 'bill_id', 'movement_type', 'amount', 'description', 'created',
                  'updated')
