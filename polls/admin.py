from django.contrib import admin
#sasuke
#admin
# Register your models here.
from .models import Blog, Mentor, Mentee
admin.site.register(Blog)
admin.site.register(Mentor)
admin.site.register(Mentee)