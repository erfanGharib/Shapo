from django.urls import path
from . import api_views


urlpatterns = [
    # users
    path('user/update/<int:id>/', api_views.UserUpdateAPI.as_view(), name='CustomerUserUpdate'),
    path('user/update/<str:email>/', api_views.UserUpdateEmailAPI.as_view(), name='CustomerUserUpdateEmail'),
    path('user/create/', api_views.UserCreateAPI.as_view(), name='CustomerUserCreate'),
    path('user/<int:id>/', api_views.UserDetailAPI.as_view(), name='CustomerUserView'),
    path('user/<str:email>/', api_views.UserDetailEmailAPI.as_view(), name='CustomerUserViewEmail'),
    # orders
    path('order/create/', api_views.OrderCreateUserAPI.as_view(), name='CustomerOrderCreate'),
    path('order/<int:id>/', api_views.OrderViewAPI.as_view(), name='CustomerOrderViewID'),
    # order items
    path('orderitem/add/', api_views.OrderItemAddAPI.as_view(), name='OrderItemAdd'),
    path('orderitem/list/', api_views.OrderItemListAPI.as_view(), name='OrderItemList'),
    path('orderitem/<int:id>/', api_views.OrderItemViewAPI.as_view(), name='CustomerOrderItemViewID'),
    # product categories
    path('category/product/list', api_views.ProductCategoryListAPI.as_view(), name='ProductCategoryList'),
    path('category/product/<int:id>/', api_views.ProductCategoryViewAPI.as_view(), name='ProductCategoryList'),
    path('category/product/<str:title>/', api_views.ProductCategoryViewTitleAPI.as_view(), name='ProductCategoryList'),
    # products
    path('product/list/', api_views.ProductListAPI.as_view(), name='ProductList'),
    path('product/filter/', api_views.ProductFilterAPI.as_view(), name='ProductFilter'),
    path('product/<int:id>/', api_views.ProductViewAPI.as_view(), name='ProductViewID'),
    path('product/<str:title>/', api_views.ProductViewTitleAPI.as_view(), name='ProductViewTitle'),
    # articles
    path('article/list/', api_views.ArticleListAPI.as_view(), name='ArticleList'),
    path('article/<int:id>/', api_views.ArticleViewAPI.as_view(), name='ArticleViewID'),
    path('article/<str:title>/', api_views.ArticleViewTitleAPI.as_view(), name='ArticleViewTitle'),
]