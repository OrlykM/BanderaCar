from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.models import User
from .models import CustomUser

class UserRegisterForm(UserCreationForm):
    phone = forms.CharField(label='Phone number', widget=forms.TextInput(
        attrs={'class': 'form-control'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(
        attrs={'class': 'form-control'}))
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='Repeat password',
                                widget=forms.PasswordInput(
                                    attrs={'class': 'form-control'}))
    class Meta:
        model = CustomUser
        fields = ('phone', 'email', 'password1', 'password2')

class UserLoginForm(AuthenticationForm):
    #phone = forms.CharField(label='Phone number', widget=forms.TextInput(
        #attrs={'class': 'form-control'}))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))

    class Meta:
        model = CustomUser
        fields = ('phone','password')


class UserChangeNameForm(forms.ModelForm):
    phone = forms.CharField(label='Your new phone number', widget=forms.TextInput(
        attrs={'class': 'form-control'}))
    class Meta:
        model = CustomUser
        fields = ['phone']

class UserPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(label='Old password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    new_password1 = forms.CharField(label='New password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    new_password2 = forms.CharField(label='Confirm new password', widget=forms.PasswordInput(
        attrs={'class': 'form-control'}))
    class Meta:
        model = CustomUser
        fields = ['old_password', 'new_password1', 'new_password2']