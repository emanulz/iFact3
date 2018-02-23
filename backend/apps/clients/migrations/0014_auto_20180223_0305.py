# Generated by Django 2.0.1 on 2018-02-23 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0013_auto_20180223_0304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='created',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creación'),
        ),
        migrations.AlterField(
            model_name='client',
            name='updated',
            field=models.DateTimeField(auto_now=True, verbose_name='Fecha de modificación'),
        ),
    ]