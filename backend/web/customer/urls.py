from django.conf.urls import url
from customer import views

urlpatterns = [
    url(r'^customer/$', views.customer_list),
    url(r'^customer/login/$', views.customer_login),
    url(r'^customer/create/$', views.customer_create),
    url(r'^customer/(?P<pk>[0-9]+)/pic_profile/$',
        views.customer_pic_profile),
    url(r'^customer/(?P<pk>[0-9]+)/$', views.customer_detail),
    url(r'^customer/(?P<pk>[0-9]+)/orders/$', views.customer_orders),
    url(r'^customer/(?P<pk>[0-9]+)/cart/$', views.customer_cart),
    url(r'^customer/(?P<pk>[0-9]+)/cart/auction/$',
        views.customer_cart_auction),
    url(r'^customer/(?P<pk>[0-9]+)/cart/buy/$',
        views.customer_cart_buy),
    url(r'^customer/(?P<pk>[0-9]+)/address/$',
        views.customer_address),
    url(r'^customer/(?P<pk>[0-9]+)/sell_order/$',
        views.customer_sell_order),
    url(r'^time/$',
        views.time),
]
