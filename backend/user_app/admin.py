from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.
admin.site.register(Role)
admin.site.register(Spectrum_user) 
admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(PDF)
admin.site.register(Video)
admin.site.register(Section)
admin.site.register(Comment)
admin.site.register(UserCourse)
admin.site.register(CourseSection)

