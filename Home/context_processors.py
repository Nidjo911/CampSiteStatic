from datetime import datetime

def global_time(request):
    return {
        'time': datetime.now().strftime('%H:%M:%S'),
    }