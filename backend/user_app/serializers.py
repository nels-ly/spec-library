from rest_framework import serializers
from .models import *

class Spectrum_user_serializer(serializers.ModelSerializer):
    class Meta:
        model = Spectrum_user
        fields = '__all__'
    
        
        

class Spectrum_profile_serializer(serializers.ModelSerializer):
    class Meta:
        model = Spectrum_user
        fields = ('id', 'username', 'year', 'anonymous', 'role', 'courses', 'profile_pic')