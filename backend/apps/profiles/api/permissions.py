from rest_framework import permissions


class HasProperPermission(permissions.DjangoModelPermissions):

    perms_map = {
        'GET': ['auth.list_user'],
        'OPTIONS': [],
        'HEAD': [],
        'POST': ['auth.add_user'],
        'PUT': ['auth.change_user'],
        'PATCH': ['auth.change_user'],
        'DELETE': ['auth.delete_user'],
        }
