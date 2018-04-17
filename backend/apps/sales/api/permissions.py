from rest_framework import permissions


class HasProperPermission(permissions.DjangoModelPermissions):

    perms_map = {
        'GET': ['%(app_label)s.list_sale'],
        'OPTIONS': [],
        'HEAD': [],
        'POST': ['%(app_label)s.add_%(model_name)s'],
        'PUT': ['%(app_label)s.change_%(model_name)s'],
        'PATCH': ['%(app_label)s.change_%(model_name)s'],
        'DELETE': ['%(app_label)s.delete_%(model_name)s'],
        }
