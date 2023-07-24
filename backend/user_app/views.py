from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.status import HTTP_404_NOT_FOUND,HTTP_401_UNAUTHORIZED, HTTP_200_OK, HTTP_409_CONFLICT
from rest_framework.authentication import SessionAuthentication
from rest_framework import permissions



from .serializers import *

# Create your views here.

@api_view(['POST'])
@authentication_classes([SessionAuthentication])
@permission_classes([permissions.AllowAny])
def login(request):
    
    try:
        data = request.data

        user = Spectrum_user.objects.get(email=data['email'])
        
        serializer = Spectrum_profile_serializer(user, many=False)
        
        if  not check_password(data['password'], user.password):
            return Response("Incorrect details",status=HTTP_401_UNAUTHORIZED )
        
        
        if 'user' not in request.session:
            request.session['user'] = serializer.data
        
        response_data = serializer.data
        response = Response(response_data, content_type='application/json', status=HTTP_200_OK)
        return response
        
    except Spectrum_user.DoesNotExist:
        return Response(data = {'message': "User does not exist"}, status= HTTP_404_NOT_FOUND)
        


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def sign_up(request):
    
    try:
        data = request.data
        
        data['password'] = make_password(data['password'])
        
        
        if not Spectrum_user.objects.filter(email=data['email'], username=data['username']).exists():
            serializer = Spectrum_user_serializer(data = data)
            if serializer.is_valid():
                serializer.save()
        else:
            return Response('User already exists', status = HTTP_409_CONFLICT)
        
        return Response("Account created")
    
    except Exception as e:
        raise e
    

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def logout(request):
    
    try: 
  
        request.session.flush()
        
        return Response({"message": "Logged out successfully"})
        
    
    except Exception as e:
        raise e