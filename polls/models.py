from django.db import models

# Create your models here.
class Blog(models.Model):
    title =  models.CharField(max_length=200)
    paragraf =  models.TextField()
    image = models.CharField(max_length=200)
    tanggal = models.DateField()
    comment = models.IntegerField(default=0)

class Mentor(models.Model):
    nama = models.CharField(max_length=50)
    exp = models.CharField(max_length=100)
    quote = models.CharField(max_length=200)
    image = models.CharField(max_length=200)

class Mentee(models.Model):
    nama = models.CharField(max_length=50)
    quote = models.CharField(max_length=200)
    image = models.CharField(max_length=200)


