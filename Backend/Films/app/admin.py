from django.contrib import admin
from .models import TypeFilm, Film, Reservation

# Register your models here.
admin.site.register(TypeFilm)
admin.site.register(Film)
admin.site.register(Reservation)
