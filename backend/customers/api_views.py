from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics
from managers.serializers import *
from users.models import User
from .serializers import *


class UserDetailAPI(generics.ListAPIView):
    """
        Show User Detail for User with ID
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id).first()

    lookup_field = 'id'


class UserDetailEmailAPI(generics.ListAPIView):
    """
        Show User Detail for User with ID
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id).first()

    lookup_field = 'email'


class UserUpdateAPI(generics.RetrieveUpdateAPIView):
    """
        Update User for User with ID
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id).first()

    lookup_field = 'id'


class UserUpdateEmailAPI(generics.RetrieveUpdateAPIView):
    """
        Update User for User with email
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id).first()

    lookup_field = 'email'


class UserCreateAPI(generics.CreateAPIView):
    """
        Create User and Order for User
    """
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        user = UserSerializer(data=self.request.data)
        if user.is_valid():
            user.save()
            user.instance.is_active = True
            user.instance.is_active = True
            user.save()
            Order.objects.create(customer_id=user.instance.id, paid=False, created=user.instance.last_login, updated=user.instance.last_login)
            return Response({'message': 'ساخته شد'})

        else:
            return Response(user.errors)


class OrderViewAPI(generics.RetrieveAPIView):
    """
        View Order with ID
    """
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(customer_id=self.request.user.id).all()

    lookup_field = 'id'


class OrderCreateUserAPI(generics.CreateAPIView):
    """
        Create Order
    """
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def create(self, request, *args, **kwargs):
        data = OrderSerializer(data=self.request.data)
        if data.is_valid():
            data.save()
            data.instance.customer = self.request.user
            data.save()
            return Response({'message': 'با موفقیت ساخته شد'})
        else:
            return Response(data.errors)


class OrderItemAddAPI(generics.CreateAPIView):
    # permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrderItemSerializer

    def create(self, request, *args, **kwargs):
        data = OrderItemSerializer(data=self.request.data)
        if data.is_valid():
            data.save()
            data.instance.order.id = Order.objects.filter(customer_id=self.request.user.id).first().id
            data.instance.product.id = self.request.query_params.get('product_id')
            data.instance.quantity = self.request.query_params.get('quantity')
            data.save()
            return Response({'message': 'اضافه شد.'})
        else:
            return Response({data.errors})


class OrderItemListAPI(generics.ListAPIView):
    """
        List of User Order Item with User ID
    """
    serializer_class = OrderItemSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return OrderItem.objects.filter(order__customer_id=self.request.user.id)


class OrderItemViewAPI(generics.RetrieveAPIView):
    """
        View Order Item with ID
    """
    serializer_class = OrderItemSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return OrderItem.objects.filter(order__customer_id=self.request.user.id)

    lookup_field = 'id'


class ProductCategoryListAPI(generics.ListAPIView):
    """
        List of Product Categories
    """
    serializer_class = ProductCategorySerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return ProductCategory.objects.all()


class ProductCategoryViewAPI(generics.RetrieveAPIView):
    """
        Show Product Categories with ID
    """
    serializer_class = ProductCategorySerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return ProductCategory.objects.all()

    lookup_field = 'id'


class ProductCategoryViewTitleAPI(generics.RetrieveAPIView):
    """
        Show Product Categories with title
    """
    serializer_class = ProductCategorySerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return ProductCategory.objects.all()

    lookup_field = 'title'


class ProductViewAPI(generics.RetrieveAPIView):
    """
        Show available Products with ID
    """
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Products.objects.filter(status='available')

    lookup_field = 'id'


class ProductViewTitleAPI(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Products.objects.filter(status='available')

    lookup_field = 'title'


class ProductFilterAPI(generics.ListAPIView):
    """
        List of available Products ( filter by Category )
    """
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Products.objects.filter(status='available', category__title=self.request.query_params.get('category'))


class ProductListAPI(generics.ListAPIView):
    """
        List of available Products
    """
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Products.objects.filter(status='available')


class ArticleViewAPI(generics.RetrieveAPIView):
    """
        Show Article with ID
    """
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Article.objects.filter(status='published')

    lookup_field = 'id'


class ArticleViewTitleAPI(generics.RetrieveAPIView):
    """
        Show Articles with Title
    """
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Article.objects.filter(status='published')

    lookup_field = 'title'


class ArticleListAPI(generics.ListAPIView):
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticated, ]

    def get_queryset(self):
        return Article.objects.filter(status='published')
