from django import forms
from .models import Blog


class BlogForm(forms.ModelForm):
    title =  forms.CharField(widget=forms.Textarea)
    paragraf =  forms.CharField(widget=forms.Textarea)
    image = forms.CharField(widget=forms.Textarea)
    tanggal = forms.DateField()
    comment = forms.IntegerField()

    class Meta:
        model = Blog
        fields = '__all__'