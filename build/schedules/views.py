# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def index(request):
#     return HttpResponse('<h1>hello jaja</h1>')


from .models import Schedule
from .serializers import ScheduleSerializer
from rest_framework import generics


class ScheduleList(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

# class SubscriptionDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Subscription.objects.all()
#     serializer_class = SubscriptionSerializer
