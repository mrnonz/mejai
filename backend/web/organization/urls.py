from django.conf.urls import url
from organization import views

urlpatterns = [
    url(r'^organization/$', views.organization_list),
]
