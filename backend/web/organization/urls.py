from django.conf.urls import url
from organization import views

urlpatterns = [
    url(r'^organization/$', views.organization_list),
    url(r'^organization/login/$', views.organization_login),
    url(r'^organization/(?P<pk>[0-9]+)/$', views.organization_detail),
    url(r'^organization/(?P<pk>[0-9]+)/bank/$', views.organization_bank),
    url(r'^organization/(?P<pk>[0-9]+)/bank/account/$',
        views.organization_bank_account),
    url(r'^organization/(?P<pk>[0-9]+)/bank/promptpay/$',
        views.organization_promptpay),
    url(r'^organization/(?P<pk>[0-9]+)/sell_order/$',
        views.organization_sell_order),
]
