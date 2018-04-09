# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Profile
from django.contrib.auth.models import User, Permission


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('id', 'user', 'avatar', 'birth_date', 'id_num', 'pin')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'groups', 'user_permissions', 'is_staff',
                  'is_active', 'is_superuser', 'last_login', 'date_joined')


class PermissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Permission
        fields = ('id', 'name', 'content_type', 'codename')
