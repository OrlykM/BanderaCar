# Generated by Django 4.1.1 on 2022-12-19 14:18

from django.db import migrations, models
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0010_alter_customuser_lic_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='lic_photo',
            field=models.ImageField(blank=True, null=True, upload_to=user.models.upload),
        ),
    ]
