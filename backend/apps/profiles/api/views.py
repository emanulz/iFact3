# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Profile
from .filters import ProfileFilter
from .serializers import ProfileSerializer
from django.contrib.auth.models import User
from .filters import UserFilter
from .serializers import UserSerializer
from .permissions import HasProperPermission


class ProfileViewSet(viewsets.ModelViewSet):

    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    lookup_field = 'user'
    filter_class = ProfileFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'id'
    filter_class = UserFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]