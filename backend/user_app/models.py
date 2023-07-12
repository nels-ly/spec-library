from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.core.validators import FileExtensionValidator


# Create your models here.
class Role(models.Model):
    role = models.CharField(max_length=50)
    
    def __str__(self):
        return self.role

class PDF(models.Model):
    file = models.FileField(unique=True)
    name = models.CharField(max_length=50)
    date_created = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name


    
class Comment(models.Model):
    text = models.TextField(blank=False)
    date_sent = models.DateTimeField(auto_now_add=True)
    replies = models.ForeignKey('self', null=True, related_name='reply', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    
class Video(models.Model):
    name = models.CharField(max_length=50)
    date_created = models.DateField(auto_now_add=True)
    file = models.FileField(null=True, blank=True, validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    comments = models.ForeignKey(Comment, null=True, blank=True, related_name='comments', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.name
    
    
class Lesson(models.Model):
    name = models.CharField(max_length=255)
    date_created = models.DateField(auto_now_add=True)
    description = models.TextField(blank=True)
    video = models.OneToOneField(Video, on_delete=models.PROTECT, null=True, blank=True)
    pdfs = models.ForeignKey(PDF, null=True, blank=True, related_name="pdfs", on_delete=models.PROTECT)
    
    def __str__(self):
        return self.name
    

class Section(models.Model):
    name = models.CharField(max_length = 255)
    sub_sections = models.ManyToManyField('self', symmetrical=False)
    lessons = models.ForeignKey(Lesson, null=True, blank=True, on_delete=models.PROTECT, related_name="lessons")
    
    def __str__(self):
        return self.name
    
    
class Course(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField(blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    sections = models.ForeignKey(Section, on_delete=models.PROTECT, related_name='sections')
        
    def __str__(self):
        return self.name    
    
class Spectrum_user(AbstractBaseUser):
    first_name = models.CharField(max_length=40, blank=False)
    last_name = models.CharField(max_length=40, blank=False)
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, blank=False, unique=True)
    year = models.IntegerField(blank=True, null=True)
    password = models.CharField(max_length=255, blank=False)
    dob = models.DateField(blank=True, null = True)
    anonymous=models.BooleanField(default=False)
    gender = models.TextChoices("M", "F")
    role = models.OneToOneField(Role,on_delete=models.PROTECT, null=True)
    courses = models.ManyToManyField(Course, through='UserCourse', through_fields=("user", "course"))
    
    USERNAME_FIELD = 'username'
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'    

class UserCourse(models.Model):
    user = models.ForeignKey(Spectrum_user, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    
class CourseSection(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    Section = models.ForeignKey(Section, on_delete=models.CASCADE)


    