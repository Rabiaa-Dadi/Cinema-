from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User



class TypeFilm(models.Model):
    nom = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nom
class Film(models.Model):
    titre = models.CharField(max_length=100)
    type_film = models.ForeignKey(TypeFilm, related_name='films', on_delete=models.CASCADE)
    description = models.TextField()
    picture = models.ImageField(upload_to='C:\Simple_projet\Backend\Films')
    sale = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return f"{self.titre} - {self.type_film.nom}"

class Reservation(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    date_reservation = models.DateTimeField(auto_now_add=True)