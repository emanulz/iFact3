# Generated by Django 2.0.1 on 2018-03-26 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0017_auto_20180222_2343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='client_type',
            field=models.CharField(choices=[('GENERAL', 'Cliente General'), ('DISTRIB', 'Distribuidor'), ('WHOLESA', 'Mayorista')], default='GENERAL', max_length=7, verbose_name='Tipo de Cliente'),
        ),
    ]
