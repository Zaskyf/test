from rest_framework import serializers
from .models import *



class CreateUserSerializer(serializers.ModelSerializer):
    repeat_password = serializers.CharField(max_length=100, write_only=True, )

    class Meta:
        model = User
        fields = ('id',  'first_name', 'last_name', 'email', 'password', 'repeat_password' )
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        password, repeat_password = attrs.get('password', None), attrs.pop('repeat_password', None)

        if password is None or repeat_password is None:
            raise serializers.ValidationError("Вы забыли заполнить пароль")
        if password != repeat_password:
            raise serializers.ValidationError("Пароль не совпадает")

        return attrs

    def create(self, validate_data):
        return User.objects.create_user(**validate_data, username=validate_data.get('email'))


class NestedCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image')


class CategorySerializer(serializers.ModelSerializer):
    nested_categories = NestedCategorySerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'image', 'main_category', 'nested_categories')

class CategoryDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name', 'image', )


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image')

class GoodCardSerializer(serializers.ModelSerializer):
    get_first_img = ImageSerializer(read_only=True)
    class Meta:
        model = Good
        fields = ('id', 'name','get_first_img', 'start_price', 'discount', 'price', )

class GoodSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Good
        fields = ('id', 'name','images', 'start_price', 'discount', 'price', 'description')

class GoodCartSerializer(serializers.ModelSerializer):
    get_first_img = ImageSerializer(read_only=True)

    class Meta:
        model = Good
        fields = ('id', 'name', 'get_first_img', 'price',)


class CartSerializer(serializers.ModelSerializer):
    good = GoodCartSerializer(read_only=True)
    class Meta:
        model = Cart
        fields = ('id', 'good', 'quantity', 'price')


class CreateCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id', 'good', 'quantity',)

    def create(self, validated_data):
        return Cart.objects.create(**validated_data, user=self.context['request'].user)


class UpdateDeleteCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id', 'quantity',)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'user', 'rating', 'good', 'text', 'created')
