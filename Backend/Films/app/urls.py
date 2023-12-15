from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.viewset import TypeFilmViewSet, FilmViewSet, ReservationViewSet

# Création d'un routeur
router = DefaultRouter()
router.register(r'types', TypeFilmViewSet)
router.register(r'films', FilmViewSet)
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)), 
]