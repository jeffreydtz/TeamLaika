from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Product
from api.models import Recipe
from api.serializers import RecipeSerializer, ProductSerializer, RegisterSerializer, MeSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    # permission_classes = [IsAuthenticated] esto es si quiero autenticar get, post, put
    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(RecipeViewSet, self).get_permissions()  # esto es para autenticr solo una


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        queryset = Product.objects.all()
        producttype = self.request.query_params.get('producttype')
        price = self.request.query_params.get('price')
        if producttype is not None and price is not None:
            queryset = queryset.filter(producttype=producttype).filter(price__gte=price)
        elif producttype is not None:
            queryset = queryset.filter(producttype=producttype)
        elif price is not None:
            queryset = queryset.filter(price__gte=price)
        return queryset

    # permission_classes = [IsAuthenticated] esto es si quiero autenticar get, post, put
    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(ProductViewSet, self).get_permissions()  # esto es para autenticr solo una


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = MeSerializer(request.user)
    print(serializer.data)
    return Response(data=serializer.data, status=200)
