import json
import re

with open(r'C:\Users\user\.gemini\antigravity\brain\03a6b69f-22f5-4e16-b711-abe4fa463a46\.system_generated\steps\20\content.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Look for text blocks in DOCS_modelChunk
chunks = re.findall(r'"s":"([^"]+)"', content)
full_text = "".join(chunks)
if full_text:
    print("Found DOCS chunks:")
    print(full_text[:4000])
else:
    # Look for any text mentioning Dr. Maya
    print("Searching for raw strings...")
    for match in re.finditer(r'Maya', content):
        start = max(0, match.start() - 200)
        end = min(len(content), match.end() + 1000)
        print("--- SNIPPET ---")
        print(content[start:end])
        print("\n")
