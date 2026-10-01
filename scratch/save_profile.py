import re

with open(r'C:\Users\user\.gemini\antigravity\brain\03a6b69f-22f5-4e16-b711-abe4fa463a46\.system_generated\steps\20\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

chunks = re.findall(r'"s":"([^"]+)"', content)
full_text = "".join(chunks)

# Clean up unicode escapes
clean_text = full_text.encode('utf-8').decode('unicode_escape', errors='ignore')

with open('scratch/maya_profile.txt', 'w', encoding='utf-8') as f:
    f.write(clean_text)

print("Saved cleanly to scratch/maya_profile.txt. Total length:", len(clean_text))
