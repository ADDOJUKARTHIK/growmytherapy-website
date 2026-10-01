import re

with open('scratch/homepage_dump.html', 'r', encoding='utf-16') as f:
    html = f.read()

# Find all class strings
class_matches = re.findall(r'class="([^"]+)"', html)
suspicious = set()
for cstr in class_matches:
    for token in cstr.split():
        if any(token.startswith(p) for p in ['w-[', 'min-w-[', '-mr-', '-right-', '-left-']):
            suspicious.add(token)

print("Suspicious tokens:")
for s in sorted(suspicious):
    print(s)
