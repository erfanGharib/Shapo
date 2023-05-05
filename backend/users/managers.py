from django.contrib.auth.models import BaseUserManager
from .models import *


class UserManager(BaseUserManager):
    def create_user(self, phoneNumber, firstName, lastName, email, password):
        if not phoneNumber:
            raise ValueError('پر کردن این فیلد الزامی است')

        if not firstName:
            raise ValueError('پر کردن این فیلد الزامی است')

        if not lastName:
            raise ValueError('پر کردن این فیلد الزامی است')

        if not email:
            raise ValueError('پر کردن این فیلد الزامی است')

        user = self.model(phoneNumber=phoneNumber, firstName=firstName, lastName=lastName, email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, phoneNumber, firstName, lastName, email, password):
        user = self.create_user(phoneNumber, firstName, lastName, email, password)
        user.is_admin = True
        user.save()
        return user
