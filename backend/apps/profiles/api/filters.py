# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Profile
from django.contrib.auth.models import User


class ProfileFilter(django_filters.FilterSet):

    class Meta:
        model = Profile
        fields = ('id', 'user', 'birth_date', 'id_num')


class UserFilter(django_filters.FilterSet):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'groups', 'user_permissions', 'is_staff',
                  'is_active', 'is_superuser', 'last_login', 'date_joined')
