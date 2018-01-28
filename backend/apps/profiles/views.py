# -*- coding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.core import serializers
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
import json


@login_required
def profile_get(request):

    user = request.user
    profile = request.user.profile

    data = serializers.serialize('json', [user, profile])

    if request.method == 'GET':
        return HttpResponse(data, content_type='application/json')


# TODO CHECK PASSWODS AND COMPARE
@login_required
def checkUserPassword(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if request.method == 'POST':

        user = User.objects.get(username=request.user)
        password1 = body['pw']
        password2 = user.password
        print(password1)
        print(password2)
        is_valid = check_password(password1, password2)
        print(is_valid)
        return HttpResponse(is_valid, content_type='application/json')
