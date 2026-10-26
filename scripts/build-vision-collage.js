const sharp = require('sharp');

async function buildVisionCollage() {
  const canvasWidth = 960;
  const canvasHeight = 760;

  const blobSvg = Buffer.from(`
    <svg width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
      <!-- Organic Warm Blob matching OurMission shape -->
      <path d="M 120 180 C 100 80, 240 40, 480 50 C 720 60, 860 120, 880 300 C 900 500, 820 660, 600 680 C 380 700, 140 640, 100 480 C 70 360, 140 280, 120 180 Z" fill="#f5e9dc" opacity="0.95"/>
      <!-- Top Right Accent Doodle Rays -->
      <line x1="860" y1="70" x2="890" y2="40" stroke="#f56a38" stroke-width="6" stroke-linecap="round"/>
      <line x1="890" y1="95" x2="925" y2="80" stroke="#f56a38" stroke-width="6" stroke-linecap="round"/>
      <line x1="880" y1="130" x2="915" y2="135" stroke="#f56a38" stroke-width="6" stroke-linecap="round"/>
      <!-- Bottom Left Accent Doodle Rays -->
      <line x1="75" y1="640" x2="45" y2="665" stroke="#f56a38" stroke-width="6" stroke-linecap="round"/>
      <line x1="95" y1="675" x2="70" y2="710" stroke="#f56a38" stroke-width="6" stroke-linecap="round"/>
    </svg>
  `);

  const getRoundedMask = (w, h, r) => Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="white"/>
    </svg>
  `);

  // Photo 1: Tall photo (Team & client) - 440 x 580, rounded 36px
  const p1Width = 440, p1Height = 580, p1Radius = 38;
  const p1Mask = getRoundedMask(p1Width, p1Height, p1Radius);
  const p1 = await sharp('d:/company-web/public/about/vision-photo-1.jpg')
    .resize(p1Width, p1Height, { fit: 'cover' })
    .composite([{ input: p1Mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Photo 2: Creative sketches - 330 x 275, rounded 30px
  const p2Width = 330, p2Height = 275, p2Radius = 30;
  const p2Mask = getRoundedMask(p2Width, p2Height, p2Radius);
  const p2 = await sharp('d:/company-web/public/about/vision-photo-2.jpg')
    .resize(p2Width, p2Height, { fit: 'cover' })
    .composite([{ input: p2Mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Photo 3: Analytics laptop - 330 x 275, rounded 30px
  const p3Width = 330, p3Height = 275, p3Radius = 30;
  const p3Mask = getRoundedMask(p3Width, p3Height, p3Radius);
  const p3 = await sharp('d:/company-web/public/about/vision-photo-3.jpg')
    .resize(p3Width, p3Height, { fit: 'cover' })
    .composite([{ input: p3Mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: blobSvg, top: 0, left: 0 },
    { input: p2, top: 90, left: 110 },
    { input: p3, top: 395, left: 110 },
    { input: p1, top: 90, left: 470 }
  ])
  .png()
  .toFile('d:/company-web/public/about/our-vision-collage-clean.png');

  console.log('Vision collage created successfully!');
}

buildVisionCollage();
