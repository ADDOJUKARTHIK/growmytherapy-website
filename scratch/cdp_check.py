import subprocess
import json
import urllib.request
import time

# Launch Edge with remote debugging
proc = subprocess.Popen([
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "--headless=new",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=430,900",
    "http://localhost:3000"
])

time.sleep(2)

try:
    # Get WebSocket debugger URL
    resp = urllib.request.urlopen("http://localhost:9222/json").read()
    tabs = json.loads(resp)
    print("Found tabs:", len(tabs))
    target = tabs[0]
    print("Title:", target.get("title"))
finally:
    proc.terminate()
