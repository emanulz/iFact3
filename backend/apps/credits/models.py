# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


class Credit_Movement(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    movement_number = models.PositiveIntegerField(default=1, verbose_name='Número de movimiento', editable=False)
    client_id = models.CharField(max_length=255, verbose_name='ID Objeto Cliente', default='')
    bill_id = models.CharField(max_length=255, verbose_name='ID Objetov Factura', default='')
    movement_type = models.CharField(max_length=4, choices=MOVEMENT_CHOICES, default=credit,
                                     verbose_name='Tipo de Movimiento')
    amount = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Monto',
                                 blank=True, default=0)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return self.movement_number

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['movement_number']


@receiver(pre_save, sender=Credit_Movement)
def my_callback(sender, instance, *args, **kwargs):
    top = Credit_Movement.objects.select_for_update(nowait=True).order_by('-movement_number').first()
    if top:
        instance.movement_number = top.movement_number + 1


content_type = ContentType.objects.get_for_model(Credit_Movement)
try:
    permission = Permission.objects.create(
        codename='list_credit_movement',
        name='Can list Credit Movement',
        content_type=content_type,
        )
except IntegrityError:
    pass
