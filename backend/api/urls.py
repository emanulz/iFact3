# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from apps.profiles.views import checkUserPassword

from rest_framework import routers
from apps.clients.api import ClientViewSet
from dynamic_preferences.users.viewsets import UserPreferencesViewSet


router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'userprefs', UserPreferencesViewSet, base_name='userprefs')


urlpatterns = [

    url(r'^', include(router.urls)),
    url(r'^checkpassword/', checkUserPassword)
    ]
