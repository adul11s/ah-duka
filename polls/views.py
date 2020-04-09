from django.shortcuts import render
from django.http import HttpResponse
from .models import Blog, Mentor, Mentee
from .form import BlogForm
# Create your views here.
def index(request):
    return render(request, 'index.html')
def blog(request):
    blog = Blog.objects.all()

    return render(request, 'blog.html', {
        'blogs' : blog
    })
def mentor(request):
    mentor = Mentor.objects.all()
    return render(request, 'mentor.html',{
        'mentors' : mentor
    })
def mentee(request):
    mentee = Mentee.objects.all()
    return render(request, 'mentee.html',{
        'mentees' : mentee
    })
def author(request):
    return render(request, 'author.html')

def form(request):
    if request.POST:
        blog = BlogForm(request.POST)
        if blog.is_valid():
            blog.save()

    form = BlogForm()
    return render(request,'submit.html',{
        'form' : form
    })


