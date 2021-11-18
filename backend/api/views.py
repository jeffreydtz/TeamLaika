from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Course
from api.serializers import Recipeserializer, RegisterSerializer, MeSerializer


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = Recipeserializer
    queryset = Course.objects.all()
    # permission_classes = [IsAuthenticated] esto es si quiero autenticar get, post, put
    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(CourseViewSet, self).get_permissions() #esto es para autenticr solo una



class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = MeSerializer(request.user)
    print(serializer.data)
    return Response(data=serializer.data, status=200)