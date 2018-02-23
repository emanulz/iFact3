# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


class Log(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=255, null=True, blank=True, verbose_name='Código')
    model = models.CharField(max_length=255, null=True, blank=True, verbose_name='Modelo Afectado')
    prev_object = models.TextField(null=True, blank=True, verbose_name='Objeto Anterior')
    new_object = models.TextField(null=True, blank=True, verbose_name='Objeto Nuevo')
    description = models.CharField(max_length=255, null=True, blank=True, verbose_name='Descripción')
    date = models.DateField(null=True, blank=True, verbose_name='Fecha')
    user = models.TextField(null=True, blank=True, verbose_name='Usuario')

    def __unicode__(self):
        return '%s - %s' % (self.id, self.code)

    class Meta:
        verbose_name = 'Log'
        verbose_name_plural = 'Logs'
        ordering = ['id']


content_type = ContentType.objects.get_for_model(Log)
try:
    permission = Permission.objects.create(
        codename='can_list',
        name='Can list Log',
        content_type=content_type,
        )
except IntegrityError:
    pass
