from django.shortcuts import render
from django.views.generic import CreateView, ListView
from .models import Camps
from data import DUMMY_CAMPS
from .forms import CampsForm


class CreateCamp(CreateView):
    template_name = 'camps/CampForm.html'
    form_class = CampsForm
    success_url = '/camps/list/'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class ListCamp(ListView):
    template_name = 'camps/camps_list.html'
    context_object_name = 'camps'

    def get_queryset(self):
        return DUMMY_CAMPS
