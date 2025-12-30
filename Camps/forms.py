from django import forms

from .models import Camps


class CampsForm(forms.ModelForm):
    class Meta:
        model = Camps
        fields = ["name", "people_max_capacity", "description", "active"]
