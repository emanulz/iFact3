# Generated by Django 2.0.1 on 2018-01-29 21:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0005_auto_20180129_2100'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='adress',
            new_name='address',
        ),
    ]
