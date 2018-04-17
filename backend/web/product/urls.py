from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^product/$', views.product_list),
    url(r'^product/buy/$', views.product_buy),
    url(r'^product/auction/$', views.product_auction),
    url(r'^product/auction/create/$', views.product_auction_create),
    url(r'^product/(?P<pk>[0-9]+)/$', views.product_detail),
    url(r'^product/create_attribute/$', views.product_create_attribute),
    url(r'^product/create/$', views.product_create),
    url(r'^product/(?P<pk>[0-9]+)/image/$', views.product_image),
]
