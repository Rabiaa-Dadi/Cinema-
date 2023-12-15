from rest_framework import viewsets
from .models import TypeFilm, Film, Reservation
from .serializers import TypeFilmSerializer, FilmSerializer, ReservationSerializer

class TypeFilmViewSet(viewsets.ModelViewSet):
    queryset = TypeFilm.objects.all()
    serializer_class = TypeFilmSerializer

class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
