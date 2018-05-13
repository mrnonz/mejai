from django.conf.urls import url
from bank import views

urlpatterns = [
    url(r'^bank/$', views.bank_list),
]
