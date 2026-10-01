async function main() {
  const res = await fetch('http://localhost:3000');
  const html = await res.text();
  const startIdx = html.indexOf('id="about"');
  if (startIdx === -1) {
    console.error('id="about" not found');
    return;
  }
  const sectionHtml = html.slice(startIdx, startIdx + 3500);
  console.log('--- Hope Section Snippet ---');
  console.log(sectionHtml.slice(0, 2000));

  const checks = [
    { name: 'Cormorant Garamond heading', pass: sectionHtml.includes('Cormorant Garamond') },
    { name: 'Manrope eyebrow & body', pass: sectionHtml.includes('Manrope') },
    { name: '58px font size', pass: sectionHtml.includes('58px') },
    { name: '1.08 line-height', pass: sectionHtml.includes('1.08') },
    { name: '-0.025em letter-spacing', pass: sectionHtml.includes('-0.025em') },
    { name: '#454341 heading color', pass: sectionHtml.includes('#454341') },
    { name: '58px heading mb', pass: sectionHtml.includes('58px') },
    { name: '12px eyebrow font size', pass: sectionHtml.includes('12px') },
    { name: '0.14em tracking', pass: sectionHtml.includes('0.14em') },
    { name: '1.7 label leading', pass: sectionHtml.includes('1.7') },
    { name: '#4A555B label color', pass: sectionHtml.includes('#4A555B') },
    { name: '26px label mb', pass: sectionHtml.includes('26px') },
    { name: '16px body font size', pass: sectionHtml.includes('16px') },
    { name: '1.65 body leading', pass: sectionHtml.includes('1.65') },
    { name: '#55595A body color', pass: sectionHtml.includes('#55595A') },
    { name: '520px image height', pass: sectionHtml.includes('520px') },
  ];

  const imgStart = sectionHtml.indexOf('class="overflow-hidden"');
  if (imgStart !== -1) {
    console.log('\n--- Image HTML Snippet ---');
    console.log(sectionHtml.slice(imgStart, imgStart + 600));
  }

  console.log('\n--- Verification Checks ---');
  checks.forEach(c => console.log(`${c.pass ? '✓' : '✗'} ${c.name}`));
}

main().catch(console.error);
