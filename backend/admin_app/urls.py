from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('/add-course/',views.add_course, name="add_course")
]