from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf.urls.static import static
from apps.profiles.views import profile_get
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

from apps.administration.views import adminPage

urlpatterns = [
    path('globaladmin/', admin.site.urls),
    url(r'^profile/', profile_get),
    url(r'^admin/', adminPage, name='admin'),
    url(r'^$', login_required(TemplateView.as_view(template_name='home.html'))),
    url(r'^login/$', auth_views.LoginView.as_view()),
    url(r'^logout/$', auth_views.LogoutView.as_view()),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/', include('api.urls')),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
