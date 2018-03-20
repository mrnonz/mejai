from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^product/$', views.product_list),
    url(r'^product/buy/$', views.product_buy),
    url(r'^product/auction/$', views.product_auction),
    url(r'^product/(?P<pk>[0-9]+)/$', views.product_detail),
]
