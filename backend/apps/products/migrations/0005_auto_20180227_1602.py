# Generated by Django 2.0.1 on 2018-02-27 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20180227_1447'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='observations',
            field=models.TextField(blank=True, null=True, verbose_name='Observaciones'),
        ),
        migrations.AddField(
            model_name='productdepartment',
            name='observations',
            field=models.TextField(blank=True, null=True, verbose_name='Observaciones'),
        ),
        migrations.AddField(
            model_name='productsubdepartment',
            name='observations',
            field=models.TextField(blank=True, null=True, verbose_name='Observaciones'),
        ),
    ]
