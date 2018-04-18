# -*- coding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.core import serializers
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User, Permission
from django.shortcuts import get_object_or_404
import json


@login_required
def profile_get(request):

    user = request.user
    profile = request.user.profile

    data = serializers.serialize('json', [user, profile])

    if request.method == 'GET':
        return HttpResponse(data, content_type='application/json')


@login_required
def checkUserPassword(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if request.method == 'POST':

        user = User.objects.get(username=request.user)
        password1 = body['pw']
        password2 = user.password
        is_valid = check_password(password1, password2)
        return HttpResponse(is_valid, content_type='application/json')


@login_required
def checkUserPermission(request):

    user_id = request.user.id
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if request.method == 'POST':

        user = get_object_or_404(User, pk=user_id)
        permission = body['permission']
        has_permission = user.has_perm(permission)
        return HttpResponse(has_permission, content_type='application/json')


# Recieves an object/dict in POST data named permissions and check all of them
@login_required
def checkUserPermissions(request):

    user_id = request.user.id
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if request.method == 'POST':

        user = get_object_or_404(User, pk=user_id)
        permissions = body['permissions']
        returnPermissions = {}

        for key, value in permissions.items():
            has_permission = user.has_perm(value)
            returnPermissions[key] = has_permission

        return HttpResponse(json.dumps(returnPermissions), content_type='application/json')


@login_required
def checkSingleUserPermissions(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    user_id = body['userId']

    if request.method == 'POST':

        user = get_object_or_404(User, pk=user_id)
        permissions = body['permissions']
        returnPermissions = {}

        for key, value in permissions.items():
            has_permission = user.has_perm(value)
            returnPermissions[key] = has_permission

        return HttpResponse(json.dumps(returnPermissions), content_type='application/json')


# Recieves an object/dict in POST data named permissions and check all of them
@login_required
def assingUserPermission(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    user_request_id = request.user.id
    user_request = get_object_or_404(User, pk=user_request_id)
    has_permission = user_request.has_perm('change_user')

    if request.method == 'POST' and has_permission:

        user_id = body['userId']
        user = get_object_or_404(User, pk=user_id)
        print(user)

        permission_name = body['permission']
        add = body['add']

        # IF IS ADD PERMISSION
        if add:
            try:
                permission = Permission.objects.get(codename=permission_name)
                user.user_permissions.add(permission)

                response = HttpResponse({'status': 'success', 'message': 'Permiso Asignado Correctamente'},
                                        content_type='application/json')
                response.status_code = 200
                return response

            except Exception as e:
                response = HttpResponse(json.dumps({'status': 'error', 'message': e}),
                                        content_type='application/json')
                response.status_code = 500
                return response
        # IF IS REMOVE PERMISSION
        else:
            try:
                permission = Permission.objects.get(codename=permission_name)
                print(permission)
                user.user_permissions.remove(permission)

                response = HttpResponse({'status': 'success', 'message': 'Permiso Eliminado Correctamente'},
                                        content_type='application/json')
                response.status_code = 200
                return response

            except Exception as e:
                response = HttpResponse(json.dumps({'status': 'error', 'message': e}),
                                        content_type='application/json')
                response.status_code = 500
                return response
