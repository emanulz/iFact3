# Generated by Django 2.0.1 on 2018-03-01 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20180228_1804'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='fractioned',
            field=models.BooleanField(default=False, verbose_name='Se vende Fracionado?'),
        ),
    ]
