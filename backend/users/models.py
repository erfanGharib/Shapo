from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from .managers import UserManager


class User(AbstractBaseUser):
    firstName = models.CharField(max_length=255, verbose_name='نام')
    lastName = models.CharField(max_length=255, blank=False, null=False, verbose_name='نام خانوادگی')
    email = models.EmailField(max_length=255, blank=False, null=False, unique=True, verbose_name='ایمیل')
    phoneNumber = models.CharField(max_length=11, blank=False, null=False, unique=True, verbose_name='موبایل')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'کاربر'
        verbose_name_plural = 'کاربران'

    objects = UserManager()

    USERNAME_FIELD = 'phoneNumber'
    REQUIRED_FIELDS = ['firstName', 'lastName', 'email']

    def __str__(self):
        return self.email

    def has_perm(self, perm,obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin