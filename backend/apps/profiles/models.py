# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import os
from uuid import uuid4
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
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
    return os.path.join('avatars', filename)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pin = models.CharField(blank=True, null=True, verbose_name='PIN', default='0000', max_length=4)
    avatar = models.ImageField(upload_to=url, blank=True)
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return '%s' % self.user


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


content_type = ContentType.objects.get_for_model(Profile)
try:
    permission = Permission.objects.create(
        codename='list_profile',
        name='Can list Profile',
        content_type=content_type,
        )
except IntegrityError:
    pass


content_type = ContentType.objects.get_for_model(User)
try:
    permission = Permission.objects.create(
        codename='list_user',
        name='Can list User',
        content_type=content_type,
        )
except IntegrityError:
    pass
