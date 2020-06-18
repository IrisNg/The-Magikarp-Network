from django.db import models

# Create your models here.
class Schedule(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length = 120)
    todos = models.CharField(max_length = 6000, blank= True)

    def __str__(self):
        return self.title
    
