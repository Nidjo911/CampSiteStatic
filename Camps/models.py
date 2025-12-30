from django.db import models

class Camps(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    people_max_capacity = models.IntegerField()
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.name