# -*- coding: utf-8 -*-

from django.conf.urls import include, url


from rest_framework import routers
from apps.clients.api import ClientViewSet


router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)


urlpatterns = [

    url(r'^', include(router.urls)),
    ]
