from rest_framework import serializers
from .models import *

class Spectrum_user_serializer(serializers.ModelSerializer):
    class Meta:
        model = Spectrum_user
        fields = '__all__'