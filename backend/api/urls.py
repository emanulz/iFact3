# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from apps.profiles.views import checkUserPassword
from apps.profiles.views import checkUserPermission, checkUserPermissions

from rest_framework import routers
from apps.clients.api.views import ClientViewSet
from apps.products.api.views import ProductViewSet, ProductDepartmentViewSet, ProductSubDepartmentViewSet
from apps.suppliers.api.views import SupplierViewSet
from apps.profiles.api.views import ProfileViewSet
from apps.profiles.api.views import UserViewSet
from apps.logs.api.views import LogViewSet
from dynamic_preferences.users.viewsets import UserPreferencesViewSet


router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'logs', LogViewSet)
router.register(r'products', ProductViewSet)
router.register(r'productdepartments', ProductDepartmentViewSet)
router.register(r'productsubdepartments', ProductSubDepartmentViewSet)
router.register(r'suppliers', SupplierViewSet)
router.register(r'userprofiles', ProfileViewSet)
router.register(r'users', UserViewSet)
router.register(r'userprefs', UserPreferencesViewSet, base_name='userprefs')


urlpatterns = [

    url(r'^', include(router.urls)),
    url(r'^checkpassword/', checkUserPassword),
    url(r'^checkpermission/', checkUserPermission),
    url(r'^checkpermissions/', checkUserPermissions)
    ]
