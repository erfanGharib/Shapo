from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import Group
from django.contrib import admin
from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    ordering = ('lastName', )
    search_fields = ('email', 'firstName', 'lastName')
    list_display = ['firstName', 'lastName', 'email', 'phoneNumber', 'is_admin', 'is_active']
    list_filter = ['last_login', 'is_admin', 'is_active']

    fieldsets = (
        ('Register', {'fields': ('firstName', 'lastName', 'phoneNumber', 'email', 'password')}),
        ('Permissions', {'fields': ('is_admin', 'is_active', 'last_login')})
    )

    add_fieldsets = (
        ('Register', {'fields': ('firstName', 'lastName', 'phoneNumber', 'email', 'password1', 'password2')}),
    )
    filter_horizontal = ()


admin.site.unregister(Group)
admin.site.register(User, UserAdmin)
