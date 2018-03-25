from django.conf.urls import url
from order import views

urlpatterns = [
    url(r'^order/(?P<pk>[0-9]+)/$', views.order_detail),
]
