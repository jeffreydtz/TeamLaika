from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"

    def create(self, validated_data):
        recipe = super(RecipeSerializer, self).create(validated_data)
        return recipe


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(min_length=5)

    class Meta:
        model = get_user_model()
        fields = ["username", "password", "first_name", "last_name"]

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username", "firstname", "last_name"]