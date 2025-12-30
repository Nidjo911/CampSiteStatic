from django.urls import path
from . import views

urlpatterns = [
    path("new/", views.CreateCamp.as_view(), name="camps-create"),
    path("", views.ListCamp.as_view(), name="camps-list"),
]
