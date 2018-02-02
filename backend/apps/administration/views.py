from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import permission_required
from django.shortcuts import render


@login_required
@permission_required('administration.can_access', login_url='/login')
def adminPage(request):
    return render(request, "admin.html")