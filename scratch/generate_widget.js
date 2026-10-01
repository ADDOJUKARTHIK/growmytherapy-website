const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\107b972b-87b2-42db-bc0f-d20ff58df108';

const officeImg = fs.readFileSync(path.join(outDir, 'our_office_desktop_full.png')).toString('base64');
const flowImg = fs.readFileSync(path.join(outDir, 'top_flow_desktop.jpg')).toString('base64');
const heroImg = fs.readFileSync(path.join(outDir, 'hero_desktop_preview.png')).toString('base64');
const oceanImg = fs.readFileSync(path.join(outDir, 'slowdown_desktop_preview.png')).toString('base64');
const aboutImg = fs.readFileSync(path.join(outDir, 'about_desktop_preview.png')).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
</head>
<body class="bg-transparent text-[var(--foreground)] antialiased p-3">
  <div class="bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-xl p-4 shadow-sm max-w-xl mx-auto">
    <div class="flex items-center justify-between pb-3 border-b border-[var(--border)] mb-3">
      <div>
        <h2 class="font-medium text-sm text-[var(--foreground)]">Part 3: Our Office Section Preview</h2>
        <p class="text-xs text-[var(--muted-foreground)]">Click tabs to inspect refined sections</p>
      </div>
      <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">Server Live: 3000</span>
    </div>

    <div class="flex gap-1.5 mb-3 overflow-x-auto text-xs pb-1">
      <button onclick="switchTab(0)" id="tab-0" class="px-2.5 py-1 rounded-md font-medium transition bg-slate-900 text-white">Our Office</button>
      <button onclick="switchTab(1)" id="tab-1" class="px-2.5 py-1 rounded-md font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">1. Hero Lifestyle</button>
      <button onclick="switchTab(2)" id="tab-2" class="px-2.5 py-1 rounded-md font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">2. Ocean Sunset</button>
      <button onclick="switchTab(3)" id="tab-3" class="px-2.5 py-1 rounded-md font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">3. Dr. Maya</button>
      <button onclick="switchTab(4)" id="tab-4" class="px-2.5 py-1 rounded-md font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200">Full Flow</button>
    </div>

    <div class="relative rounded-lg overflow-hidden border border-[var(--border)] bg-stone-50 aspect-[16/11]">
      <img id="preview-img" src="data:image/png;base64,${officeImg}" class="w-full h-full object-cover object-top transition duration-200" alt="Preview" />
    </div>

    <div class="mt-2.5 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
      <span id="caption-text">OUR OFFICE: 60/40 balanced diptych, equal height (520px), profile copy</span>
      <a href="http://localhost:3000/#the-space" target="_blank" class="text-indigo-600 hover:underline font-medium">Open Section &rarr;</a>
    </div>
  </div>

  <script>
    const images = [
      "data:image/png;base64,${officeImg}",
      "data:image/png;base64,${heroImg}",
      "data:image/png;base64,${oceanImg}",
      "data:image/png;base64,${aboutImg}",
      "data:image/jpeg;base64,${flowImg}"
    ];
    const captions = [
      "OUR OFFICE: 60/40 balanced diptych, equal height (520px), profile copy",
      "Hero Section: Woman on balcony looking up at sky (Lifestyle)",
      "A Space to Slow Down: Calm golden sun over blue ocean water",
      "Meet Dr. Maya Reynolds: Professional therapist portrait",
      "Continuous Desktop Flow: Top homepage sections"
    ];

    function switchTab(idx) {
      document.getElementById('preview-img').src = images[idx];
      document.getElementById('caption-text').innerText = captions[idx];
      for (let i = 0; i < 5; i++) {
        const btn = document.getElementById('tab-' + i);
        if (i === idx) {
          btn.className = "px-2.5 py-1 rounded-md font-medium transition bg-slate-900 text-white";
        } else {
          btn.className = "px-2.5 py-1 rounded-md font-medium transition bg-slate-100 text-slate-700 hover:bg-slate-200";
        }
      }
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'preview_widget.html'), html);
console.log('Updated preview_widget.html successfully!');
