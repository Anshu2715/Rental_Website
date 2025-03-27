from django.contrib import admin
from django.urls import path
from RE_web import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.home_view, name='home'),

    path('login/', views.login_view, name='login'),
    path('sign_in/', views.sign_in_view, name='sign_in'),
    path('about/', views.about_view, name='about'),
    # path('services/', views.services_view, name='services'),
    path('sign_up/', views.sign_up_view, name='sign_up'),  
    # path('list-room/', views.list_room_view, name='list_room'),
    path('contact/', views.contact_view, name='contact')
]

