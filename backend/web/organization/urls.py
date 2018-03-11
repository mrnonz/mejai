from django.conf.urls import url
from organization import views

urlpatterns = [
    url(r'^organization/$', views.organization_list),
    url(r'^organization/(?P<pk>[0-9]+)/$', views.organization_detail),
]
