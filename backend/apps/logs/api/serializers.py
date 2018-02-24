# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Log


class LogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Log
        fields = ('id', 'code', 'model', 'prev_object', 'new_object', 'description', 'user', 'created')
