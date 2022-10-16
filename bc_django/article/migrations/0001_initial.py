# Generated by Django 4.1.1 on 2022-10-14 19:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ArticleCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'article_category',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=45)),
                ('text', models.TextField()),
                ('published', models.DateTimeField()),
                ('article_category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='article.articlecategory')),
            ],
            options={
                'db_table': 'article',
                'managed': True,
            },
        ),
    ]
