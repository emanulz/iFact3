# Generated by Django 2.0.1 on 2018-01-26 18:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='debt',
        ),
    ]
