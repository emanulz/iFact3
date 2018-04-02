# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


class Administration(models.Model):
    pass


content_type = ContentType.objects.get_for_model(Administration)
try:
    permission = Permission.objects.create(
        codename='access_administration',
        name='Can access Administration',
        content_type=content_type,
        )
except IntegrityError:
    pass
