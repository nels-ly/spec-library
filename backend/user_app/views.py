from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer 
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import make_password, check_password

from .serializers import *

# Create your views here.

@api_view(['POST', 'GET'])
def login(request):
    
    try:
        
        email = 'ly@gmail.com'
        password = '1234'
       
        user = Spectrum_user.objects.get(email=email)
        
        serializer = Spectrum_user_serializer(user, many=False)
        
        if  not check_password(password, user.password):
            return HttpResponse("incorrect details")
        
        return Response(serializer.data)
        
    except Exception as e:
        raise e
        


@api_view(['POST', 'GET'])
def sign_up(request):
    
    try:
        data = {'first_name': 'nelson', 
                'last_name': 'ly',
                'email': 'ly@gmail.com',
                'password': '1234',
                'gender':'M',
                'username': 'chuuniham'
                }
        
        data['password'] = make_password(data['password'])
        
        if not Spectrum_user.objects.get(email=data['email']):
            serializer = Spectrum_user_serializer(data = data)
            if serializer.is_valid():
                serializer.save()
        else:
            return Response('user already exists')
        
        return Response("it worked")
    
    except Exception as e:
        raise e