from django.shortcuts import render,redirect


def home_view(request):
    return render(request, 'RE_web/home.html')
def login_view(request):
    return render(request, 'RE_web/login.html')
def sign_in_view(request):
    return render(request, 'RE_web/sign_in.html')
def about_view(request):
    return render(request, 'RE_web/about.html')
def sign_up_view(request):
    return render(request, 'RE_web/sign_up.html')
def contact_view(request):
    return render(request, 'RE_web/contact.html')