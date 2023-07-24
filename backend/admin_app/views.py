from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.status import HTTP_404_NOT_FOUND,HTTP_401_UNAUTHORIZED, HTTP_200_OK, HTTP_409_CONFLICT
from rest_framework.authentication import SessionAuthentication
from rest_framework import permissions

# Create your views here.
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
@authentication_classes([SessionAuthentication])
def add_course(request):
    
    pass