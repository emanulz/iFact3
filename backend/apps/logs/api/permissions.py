from rest_framework import permissions


class HasProperPermission(permissions.DjangoModelPermissions):

    perms_map = {
        'GET': ['%(app_label)s.list_log'],
        'OPTIONS': [],
        'HEAD': [],
        'POST': [],
        'PUT': ['%(app_label)s.change_%(model_name)s'],
        'PATCH': ['%(app_label)s.change_%(model_name)s'],
        'DELETE': ['%(app_label)s.delete_%(model_name)s'],
        }
