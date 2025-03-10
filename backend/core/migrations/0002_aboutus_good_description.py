# Generated by Django 5.1.5 on 2025-01-20 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(blank=True, null=True, verbose_name='Контент')),
            ],
            options={
                'verbose_name': 'О компании',
                'verbose_name_plural': 'О компании',
            },
        ),
        migrations.AddField(
            model_name='good',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Описание'),
        ),
    ]
