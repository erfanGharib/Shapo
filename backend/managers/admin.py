from django.contrib import admin
from .models import *


admin.site.register(ProductCategory)
admin.site.register(Products)
admin.site.register(Article)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Email)

