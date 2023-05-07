from extensions.DateJalali import django_jalali
from datetime import timezone
from django.db import models
from users.models import *


class ProductCategory(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False, verbose_name="عنوان")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'دسته بندی محصولات'
        verbose_name_plural = 'دسته بندی محصولات'


class Products(models.Model):
    STATUS = (
        ('available', 'موجود'),
        ('unavailable', 'ناموجود')
    )

    title = models.CharField(max_length=255, blank=False, null=False, verbose_name="عنوان")
    description = models.TextField(null=False, blank=False, verbose_name="درباره")
    thumbnail = models.ImageField(null=False, blank=False, upload_to='product/%y/%m/%d', verbose_name="تصویر")
    price = models.IntegerField(blank=False, null=False, verbose_name="قیمت")
    status = models.CharField(choices=STATUS, max_length=20, blank=False, null=False, verbose_name="وضعیت")
    specifications = models.TextField(null=False, blank=False, verbose_name='مشخصات فنی')
    discount = models.IntegerField(default=None, verbose_name='تخفیف')
    number = models.IntegerField(null=False, blank=False, verbose_name="تعداد")
    category = models.ManyToManyField(ProductCategory, verbose_name="دسته بندی")
    created = models.DateTimeField(auto_now_add=True, verbose_name="زمان ساخت")
    updated = models.DateTimeField(auto_now=True, verbose_name="آخرین تغییرات")

    def jdateCreated(self):
        return django_jalali(self.created)

    def jdateUpdated(self):
        return django_jalali(self.updated)

    def discounted(self):
        if self.discount > 0:
            discount = self.discount/100
            final_discount = self.price * discount
            return self.price - final_discount
        else:
            return self.price

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'محصول'
        verbose_name_plural = 'محصولات'


class Article(models.Model):
    STATUS = (
        ('published', 'منتشر شده'),
        ('draft', 'پیش نویس')
    )
    title = models.CharField(max_length=255, blank=False, null=False, verbose_name="عنوان")
    description = models.TextField(null=False, blank=False, verbose_name="درباره")
    thumbnail = models.ImageField(null=False, blank=False, upload_to='article/%y/%m/%d', verbose_name="تصویر")
    status = models.CharField(choices=STATUS, max_length=10, blank=False, null=False, verbose_name="وضعیت")
    created = models.DateTimeField(auto_now_add=True, verbose_name="زمان ساخت")
    updated = models.DateTimeField(auto_now=True, verbose_name="آخرین تغییرات")
    auther = models.ForeignKey(User, on_delete=models.CASCADE, default=User, verbose_name="نویسنده")

    def jdateCreated(self):
        return django_jalali(self.created)

    def jdateUpdated(self):
        return django_jalali(self.updated)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'مقاله'
        verbose_name_plural = 'مقالات'


class Email(models.Model):
    customer = models.ForeignKey(User, related_name='Send', on_delete=models.CASCADE, verbose_name='مشتری')
    subject = models.CharField(max_length=255, verbose_name='موضوع')
    message = models.TextField(verbose_name='پیام')

    def __str__(self):
        return self.subject


class Order(models.Model):
    customer = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, verbose_name='مشتری')
    paid = models.BooleanField(default=False, verbose_name='پرداخت شده')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'سفارش'
        verbose_name_plural = 'سفارشات'

    def jdateCreated(self):
        return django_jalali(self.created)

    def jdateUpdated(self):
        return django_jalali(self.updated)

    def get_total(self):
        return sum(item.get_cost()for item in self.item.all())

    def __str__(self):
        return f'{self.customer.firstName} {self.customer.lastName}'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='item')
    product = models.ForeignKey(Products, on_delete=models.CASCADE, verbose_name='محصول')
    price = models.IntegerField(verbose_name='قیمت')
    quantity = models.IntegerField(default=1, verbose_name='تعداد')

    class Meta:
        verbose_name = 'مورد سفارش'
        verbose_name_plural = 'موارد سفارشات'

    def __str__(self):
        return self.id

    def get_cost(self):
        return self.price * self.quantity
