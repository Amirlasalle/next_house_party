from django_nextjs.render import render_nextjs_page_sync


def index(request,  *args, **kwargs):
    return render_nextjs_page_sync(request)
