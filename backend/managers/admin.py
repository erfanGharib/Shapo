from django.contrib import admin
from .models import *


class ProductAdmin(admin.ModelAdmin):
    list_filter = ['status', 'updated']
    list_display = ['title', 'price', 'status', 'number', 'jdateUpdated']
    search_fields = ('title',)


class ArticleAdmin(admin.ModelAdmin):
    list_filter = ['auther', 'status', 'updated']
    list_display = ['title', 'status', 'auther', 'jdateUpdated']
    search_fields = ('title',)


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    raw_id_fields = ('product',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['customer', 'paid', 'jdateUpdated']
    list_filter = ['paid']
    ordering = ('paid',)
    inlines = (OrderItemInline, )


admin.site.register(ProductCategory)
admin.site.register(Products, ProductAdmin)
admin.site.register(Article, ArticleAdmin)
