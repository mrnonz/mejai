from django.conf.urls import url
from auction import views

urlpatterns = [
    url(r'^auction/checkcart/$', views.auction_checkcart),
]
