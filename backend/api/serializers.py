from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Recipe
from api.models import Product


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"

    def create(self, validated_data):
        recipe = super(RecipeSerializer, self).create(validated_data)
        return recipe

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        product = super(ProductSerializer, self).create(validated_data)
        return product


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username"]
