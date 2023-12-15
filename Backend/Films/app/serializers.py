from rest_framework import serializers
from .models import TypeFilm, Film, Reservation


class TypeFilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeFilm
        fields = '__all__'

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
