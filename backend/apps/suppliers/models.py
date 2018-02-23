# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid


class Supplier(models.Model):

    person = 'per'
    juridic = 'jur'
    passport = 'pas'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')

    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')

    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='Dirección')
    phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono')
    cellphone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Celular')
    email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email')

    agent_name = models.CharField(max_length=255, verbose_name='Nombre del Agente')
    agent_last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Apellidos del Agente')
    agent_phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono del agente')
    agent_email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email del Agente')

    bank_accounts = models.TextField(null=True, blank=True, verbose_name='Cuentas Bancarias')
    sinpe_accounts = models.TextField(null=True, blank=True, verbose_name='Cuentas SINPE')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')

    def __unicode__(self):
        return '%s %s' % (self.name, self.last_name)

    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
        ordering = ['code']
