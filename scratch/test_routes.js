const routes = [
  '/',
  '/contact',
  '/our-team',
  '/specialties',
  '/methods',
  '/faqs',
  '/therapists-newbury-park',
  '/trauma-counseling-newbury-park',
  '/adoption-therapy-ventura-county-ca',
  '/anxiety-depression',
  '/brainspotting',
  '/children-and-teens',
  '/couples-therapy',
  '/counseling-special-needs-parents-newbury-park',
  '/dissociative-identity-disorder-therapist-newbury-park',
  '/emdr-therapy-newbury-park',
  '/parts-work-therapy',
  '/somatic-therapy',
  '/autumn-bodily',
  '/candace-bletscher',
  '/chad-flores',
  '/heather-williams-baumgart',
  '/jennifer-anderson',
  '/rosa-gomez',
  '/samantha-johnson'
];

async function checkRoutes() {
  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetch(`http://localhost:3000${r}`);
      if (res.status === 200) {
        passed++;
      } else {
        console.error(`Route ${r} returned status ${res.status}`);
      }
    } catch (err) {
      console.error(`Route ${r} failed to fetch:`, err.message);
    }
  }
  console.log(`Routes verified: ${passed}/${routes.length} HTTP 200 OK`);
}

checkRoutes();
