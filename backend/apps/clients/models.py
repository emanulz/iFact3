# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.validators import MaxValueValidator
from django.db import models


class Client(models.Model):

    person = 'per'
    juridic = 'jur'
    passport = 'pas'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Apellidos')

    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')

    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='Dirección')
    phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono')
    cellphone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Celular')
    email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email')

    pred_discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True,
                                        verbose_name='Descuento Predeterminado', validators=[MaxValueValidator(100)])
    max_discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True,
                                       verbose_name='Descuento Máximo', validators=[MaxValueValidator(100)])
    max_line_discount = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True,
                                            verbose_name='Descuento Máximo por línea',
                                            validators=[MaxValueValidator(100)])

    pays_taxes = models.BooleanField(default=True, verbose_name='Paga Impuestos?')

    has_credit = models.BooleanField(default=False, verbose_name='Tiene Crédito?')
    credit_limit = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Límite de Crédito', null=True,
                                       blank=True, default=0)
    credit_days = models.PositiveIntegerField(default=30, null=True, blank=True, verbose_name='Días de Crédito')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')

    def __unicode__(self):
        return '%s %s' % (self.name, self.last_name)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['code']
