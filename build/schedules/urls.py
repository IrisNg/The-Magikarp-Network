from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# urlpatterns = [
#     path('', views.index, name='index'),
# ]


urlpatterns = [
    path('schedules/', views.ScheduleList.as_view()),
    # path('subscriptions/<int:pk>/', views.SubscriptionDetail.as_view()),
]