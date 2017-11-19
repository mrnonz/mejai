from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CreateView, DetailsView, UserCreate

urlpatterns = {
    url(r'^api/$', CreateView.as_view(), name="create"),
    url(r'^api/(?P<pk>[0-9]+)/$',
        DetailsView.as_view(),
        name="details"),
    url(r'api/users$', UserCreate.as_view(), name='account-create'),
}

urlpatterns = format_suffix_patterns(urlpatterns)
