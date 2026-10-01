import urllib.request
import re

html = urllib.request.urlopen('http://localhost:3000').read().decode('utf-8')
vp = re.search(r'<meta name="viewport"[^>]*>', html)
print('Viewport tag in HTML:', vp.group(0) if vp else 'NONE')

# check head tags
head = re.search(r'<head>(.*?)</head>', html, re.DOTALL)
if head:
    print('Head contents:', head.group(1)[:500])
