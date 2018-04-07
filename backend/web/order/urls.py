from django.conf.urls import url
from order import views

urlpatterns = [
    url(r'^order/(?P<pk>[0-9]+)/$', views.order_detail),
    url(r'^order/(?P<pk>[0-9]+)/status/$', views.order_status),
    url(r'^order/(?P<pk>[0-9]+)/slip/$', views.order_slip),
    url(r'^order/(?P<pk>[0-9]+)/slip/$', views.order_slip),
    url(r'^order/create/$', views.order_create),
]
