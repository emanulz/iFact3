# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import os
from uuid import uuid4
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


def url(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('products', filename)


class Product(models.Model):

    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    description = models.CharField(max_length=255, verbose_name='Descripción del producto', null=True)
    unit = models.CharField(max_length=4, null=True, verbose_name='Unidad')
    department = models.ForeignKey('ProductDepartment', on_delete=models.SET_NULL, null=True,
                                   verbose_name='Familia', default='')
    subdepartment = models.ForeignKey('ProductSubDepartment', on_delete=models.SET_NULL, null=True,
                                      verbose_name='Sub-Familia', default='')

    base_code = models.CharField(max_length=6, verbose_name='Código Base', default='000000', blank=True, null=True)
    barcode = models.CharField(max_length=255, verbose_name='Código de Barras', blank=True, null=True)
    internal_barcode = models.CharField(max_length=255, verbose_name='Código de Barras Interno', blank=True, null=True)
    supplier_code = models.CharField(max_length=255, verbose_name='Código del proveedor', null=True, blank=True)
    model = models.CharField(max_length=255, verbose_name='Modelos', null=True, blank=True)
    part_number = models.CharField(max_length=255, verbose_name='Número de parte', blank=True, null=True)
    brand_code = models.CharField(max_length=2, verbose_name='Código de Marca', null=True, blank=True)

    inventory_enabled = models.BooleanField(default=False, verbose_name='Sistema de Inventarios?', blank=True)
    inventory_minimum = models.FloatField(default=0, blank=True, verbose_name='Mínimo en inventario', null=True)
    inventory_maximum = models.FloatField(default=0, blank=True, verbose_name='Máximo en inventario', null=True)
    inventory_negative = models.BooleanField(default=False, verbose_name='Puede sobrefacturarse?', blank=True)

    cost = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='Costo ₡', blank=True,
                               null=True)
    utility = models.DecimalField(default=0, max_digits=5, decimal_places=2, verbose_name='Utilidad %', blank=True,
                                  null=True)
    utility2 = models.DecimalField(default=0, max_digits=5, decimal_places=2, verbose_name='Utilidad %', blank=True,
                                   null=True)
    utility3 = models.DecimalField(default=0, max_digits=5, decimal_places=2, verbose_name='Utilidad %', blank=True,
                                   null=True)
    price = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='Precio sin Impuestos ₡',
                                blank=True, null=True)
    price2 = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='Precio sin Impuestos ₡',
                                 blank=True, null=True)
    price3 = models.DecimalField(default=0, max_digits=10, decimal_places=2, verbose_name='Precio sin Impuestos ₡',
                                 blank=True, null=True)
    ask_price = models.BooleanField(default=False, verbose_name='Pide Precio al facturar?', blank=True)

    use_taxes = models.BooleanField(default=False, verbose_name='Usa impuesto?', blank=True)
    taxes = models.DecimalField(default=0, max_digits=4, decimal_places=2, verbose_name='Impuestos %', blank=True,
                                null=True)
    pred_discount = models.DecimalField(default=0, max_digits=4, decimal_places=2,
                                        verbose_name='Descuento Predeterminado %', blank=True, null=True)

    is_active = models.BooleanField(default=True, verbose_name='Activo?', blank=True)
    consignment = models.BooleanField(default=False, verbose_name='Es en consignación?', blank=True)
    generic = models.BooleanField(default=False, verbose_name='Es Genérico?', blank=True)
    image = models.ImageField(upload_to=url, blank=True, null=True)

    def __unicode__(self):
        return '%s-%s - %s ' % (self.base_code, self.code, self.description)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['code']


# CUSTOM PERMISSION
content_type = ContentType.objects.get_for_model(Product)
try:
    permission = Permission.objects.create(
        codename='can_list',
        name='Can list Producto',
        content_type=content_type,
        )
except IntegrityError:
    pass


class ProductDepartment(models.Model):

    name = models.CharField(max_length=255, verbose_name='Nombre de la Familia')
    code = models.CharField(max_length=2, verbose_name='Identificador de Familia')

    def __unicode__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Familia'
        verbose_name_plural = 'Productos - 1. Familias'
        ordering = ['code']


# CUSTOM PERMISSION
content_type = ContentType.objects.get_for_model(ProductDepartment)
try:
    permission = Permission.objects.create(
        codename='can_list',
        name='Can list Familia',
        content_type=content_type,
        )
except IntegrityError:
    pass


class ProductSubDepartment(models.Model):

    department = models.ForeignKey('ProductDepartment', on_delete=models.SET_NULL, null=True, verbose_name='Familia')
    name = models.CharField(max_length=255, verbose_name='Nombre de la Sub-Familia')
    code = models.CharField(max_length=2, verbose_name='Identificador de Sub-Familia')

    def __unicode__(self):
        return '%s - %s' % (self.department, self.name)

    class Meta:
        unique_together = ('department', 'code')
        verbose_name = 'Sub-Familia'
        verbose_name_plural = 'Productos - 2. Sub-Familias'
        ordering = ['code']


# CUSTOM PERMISSION
content_type = ContentType.objects.get_for_model(ProductSubDepartment)
try:
    permission = Permission.objects.create(
        codename='can_list',
        name='Can list Sub-Familia',
        content_type=content_type,
        )
except IntegrityError:
    pass