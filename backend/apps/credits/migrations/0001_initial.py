# Generated by Django 2.0.1 on 2018-04-17 14:37

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Credit_Movement',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('movement_number', models.PositiveIntegerField(default=1, editable=False, verbose_name='Número de movimiento')),
                ('client_id', models.CharField(default='', editable=False, max_length=255, verbose_name='ID Objeto Cliente')),
                ('bill_id', models.CharField(default='', editable=False, max_length=255, verbose_name='ID Factura')),
                ('movement_type', models.CharField(choices=[('CRED', 'Crédito'), ('DEB', 'Débito')], default='CRED', max_length=3, verbose_name='Tipo de Movimiento')),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=11, verbose_name='Monto')),
                ('description', models.CharField(blank=True, max_length=255, verbose_name='Descripción del movimiento')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
            options={
                'verbose_name': 'Movimiento de Crédito',
                'verbose_name_plural': 'Movimientos de Crédito',
                'ordering': ['movement_number'],
            },
        ),
    ]