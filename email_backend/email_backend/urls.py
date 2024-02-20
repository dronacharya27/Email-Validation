
from django.contrib import admin
from django.urls import path
from api.views import ValidateEmailView
urlpatterns = [
    path("admin/", admin.site.urls),
    path("validate-email/",ValidateEmailView.as_view(),name="validate-email")
]
