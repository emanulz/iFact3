# -*- coding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from apps.credits.models import Credit_Movement
import json


@login_required
def getClientDebt(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if request.method == 'POST':
        client_id = body['client_id']
        movements = Credit_Movement.objects.filter(client_id=client_id)
        debt = 0
        for movement in movements:
            if movement.movement_type == 'CRED':
                debt += movement.amount
            if movement.movement_type == 'DEBI':
                debt -= movement.amount
        
        return HttpResponse(json.dumps({'debt': str(debt)}), content_type='application/json')
