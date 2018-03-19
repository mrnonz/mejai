from django.conf.urls import url
from customer import views

urlpatterns = [
    url(r'^customer/$', views.customer_list),
    url(r'^customer/(?P<pk>[0-9]+)/$', views.customer_detail),
    url(r'^customer/(?P<pk>[0-9]+)/orders/$', views.customer_orders),
    url(r'^customer/(?P<pk>[0-9]+)/cart/$', views.customer_cart),
    url(r'^customer/(?P<pk>[0-9]+)/cart/auction/$',
        views.customer_cart_auction),
]
