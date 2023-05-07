from managers.models import *
from users.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """
        Serialize User Model
    """
    class Meta:
        model = User
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    """
        Serialize Order Model
    """
    get_total = serializers.ReadOnlyField()

    class Meta:
        model = Order
        exclude = ['customer']


class OrderItemSerializer(serializers.ModelSerializer):
    """
        Serialize Order Items Model
    """
    get_cost = serializers.ReadOnlyField()

    class Meta:
        model = OrderItem
        fields = '__all__'


class ProductCategorySerializer(serializers.ModelSerializer):
    """
        Serialize Product Categories Model
    """
    class Meta:
        model = ProductCategory
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    """
        Serialize Product Model
    """
    category = ProductCategorySerializer(read_only=True, many=True)
    jdateCreated = serializers.ReadOnlyField()
    jdateUpdated = serializers.ReadOnlyField()
    discounted = serializers.ReadOnlyField()

    class Meta:
        model = Products
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    """
        Serialize Article Model
    """
    jdateCreated = serializers.ReadOnlyField()
    jdateUpdated = serializers.ReadOnlyField()

    class Meta:
        model = Article
        fields = '__all__'


