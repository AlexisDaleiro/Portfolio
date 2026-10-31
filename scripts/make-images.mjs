// Genera los assets de imagen del portfolio.
//  - public/images/alexis-profile.png: si falta, crea un placeholder (reemplazalo por la foto real).
//  - alexis-profile-480/960.webp: derivados de alexis-profile.png (se regeneran cada vez).
//  - projects/*.webp: mockups abstractos de cada proyecto.
//  - og-image.png: tarjeta para redes sociales.
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/images';
mkdirSync(`${OUT}/projects`, { recursive: true });

const C = { bg: '#0A0C10', surface: '#131720', hover: '#1C2230', line: '#212836', text: '#F1F5F9', muted: '#94A3B8', em: '#10E599', am: '#F59E0B' };
const svg = (w, h, body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`);

// ---------- perfil ----------
const profilePng = `${OUT}/alexis-profile.png`;
if (!existsSync(profilePng)) {
  const grid = Array.from({ length: 12 }, (_, i) => `<path d="M${i * 90} 0V1125M0 ${i * 90}H900" stroke="${C.line}" stroke-width="1"/>`).join('');
  const board = [0, 1, 2, 3, 4, 5, 6, 7].flatMap((r) => [0, 1, 2, 3, 4, 5, 6, 7].filter((c) => (r + c) % 2).map((c) => `<rect x="${c * 112.5}" y="${r * 140.6}" width="112.5" height="140.6" fill="#ffffff" opacity="0.025"/>`)).join('');
  await sharp(svg(900, 1125, `<rect width="900" height="1125" fill="${C.surface}"/>${board}${grid}
    <circle cx="450" cy="470" r="330" fill="${C.em}" opacity="0.07"/>
    <path d="M215 760 390 330 565 760M285 610H495" fill="none" stroke="${C.text}" stroke-width="46" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M610 330V760M610 330H660C800 330 800 760 660 760H610" fill="none" stroke="${C.em}" stroke-width="46" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="450" cy="900" r="14" fill="${C.am}"/>`)).png().toFile(profilePng);
  console.log('placeholder creado:', profilePng, '(reemplazar por la foto real)');
}
// La foto fuente es 640x640: 512x640 (4:5) es el máximo sin escalar hacia arriba.
for (const w of [320, 512]) {
  await sharp(profilePng).resize(w, Math.round(w * 1.25), { fit: 'cover', position: 'top' }).webp({ quality: 82 }).toFile(`${OUT}/alexis-profile-${w}.webp`);
}

// ---------- mockups de proyecto ----------
const W = 1000, H = 625;
const win = (accent, content) => svg(W, H, `
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect x="40" y="36" width="920" height="553" rx="16" fill="${C.surface}" stroke="${C.line}" stroke-width="2"/>
  <path d="M40 90H960" stroke="${C.line}" stroke-width="2"/>
  <circle cx="72" cy="63" r="6" fill="${C.line}"/><circle cx="94" cy="63" r="6" fill="${C.line}"/><circle cx="116" cy="63" r="6" fill="${accent}"/>
  <rect x="300" y="49" width="400" height="28" rx="14" fill="${C.bg}"/>
  <g>${content}</g>`);
const bar = (x, y, w, h = 12, fill = C.line, rx = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const card = (x, y, w, h, accent) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.hover}" stroke="${C.line}" stroke-width="1.5"/>${accent ? bar(x + 16, y + h - 26, w * 0.4, 8, accent) : ''}`;

const mocks = {
  'cfmoto-2': (a = '#F97316') => win(a, `
    <rect x="70" y="115" width="560" height="270" rx="14" fill="${C.hover}"/>
    <circle cx="210" cy="320" r="52" fill="none" stroke="${a}" stroke-width="10"/><circle cx="470" cy="320" r="52" fill="none" stroke="${a}" stroke-width="10"/>
    <path d="M210 320 300 230H400L470 320M300 230 340 320H470M400 230 420 195H455" fill="none" stroke="${C.text}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    ${bar(660, 130, 250, 22, C.text)}${bar(660, 168, 190, 22, C.muted)}${bar(660, 220, 240, 10)}${bar(660, 242, 210, 10)}${bar(660, 264, 225, 10)}
    <rect x="660" y="310" width="150" height="46" rx="12" fill="${a}"/>
    ${[0, 1, 2, 3].map((i) => card(70 + i * 225, 420, 205, 140, a)).join('')}`),
  manlab: (a = '#38BDF8') => win(a, `
    <rect x="60" y="105" width="170" height="470" fill="${C.bg}" opacity="0.5"/>
    ${[0, 1, 2, 3, 4].map((i) => bar(80, 135 + i * 46, 130, 14, i === 1 ? a : C.line)).join('')}
    ${bar(260, 125, 420, 40, C.bg, 12)}<circle cx="284" cy="145" r="9" fill="none" stroke="${C.muted}" stroke-width="3"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="260" y="${195 + i * 62}" width="680" height="50" rx="10" fill="${C.hover}"/>${bar(280, 215 + i * 62, 170, 12, C.muted)}${bar(520, 215 + i * 62, 120, 12)}<rect x="800" y="${210 + i * 62}" width="110" height="22" rx="11" fill="${i % 3 === 2 ? C.am : C.em}" opacity="0.85"/>`).join('')}`),
  automationfindr: (a = C.em) => win(a, `
    ${bar(160, 120, 680, 52, C.bg, 26)}<circle cx="196" cy="146" r="11" fill="none" stroke="${a}" stroke-width="4"/>${bar(226, 140, 220, 12, C.muted)}
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${160 + i * 92}" y="196" width="80" height="30" rx="15" fill="${i === 0 ? a : C.hover}"/>`).join('')}
    ${[0, 1, 2, 3, 4, 5].map((i) => card(70 + (i % 3) * 300, 255 + Math.floor(i / 3) * 165, 280, 145, i % 2 ? null : a)).join('')}
    ${[0, 1, 2, 3, 4, 5].map((i) => bar(90 + (i % 3) * 300, 275 + Math.floor(i / 3) * 165, 120, 14, C.text) + bar(90 + (i % 3) * 300, 305 + Math.floor(i / 3) * 165, 200, 10, C.muted)).join('')}`),
  'frontend-districo': (a = C.am) => win(a, `
    <rect x="60" y="105" width="190" height="470" fill="${C.bg}" opacity="0.5"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="80" y="${130 + i * 40}" width="16" height="16" rx="4" fill="${i < 2 ? a : C.line}"/>${bar(108, 133 + i * 40, 110, 10, C.muted)}`).join('')}
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="275" y="${120 + i * 70}" width="430" height="58" rx="10" fill="${C.hover}"/><rect x="288" y="${130 + i * 70}" width="38" height="38" rx="8" fill="${C.line}"/>${bar(340, 138 + i * 70, 150, 12, C.text)}${bar(340, 160 + i * 70, 100, 9, C.muted)}<rect x="590" y="${136 + i * 70}" width="96" height="26" rx="8" fill="${C.bg}"/>`).join('')}
    <rect x="730" y="120" width="205" height="300" rx="14" fill="${C.hover}" stroke="${a}" stroke-width="2"/>${bar(750, 145, 100, 14, C.text)}${bar(750, 185, 165, 10)}${bar(750, 210, 150, 10)}${bar(750, 235, 160, 10)}
    <rect x="750" y="350" width="165" height="44" rx="12" fill="${a}"/>`),
  garrafifa: (a = '#22D3EE') => win(a, `
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="70" y="${120 + i * 63}" width="470" height="52" rx="10" fill="${C.hover}"/><rect x="82" y="${132 + i * 63}" width="28" height="28" rx="14" fill="${i < 3 ? a : C.line}"/>${bar(128, 140 + i * 63, 150, 12, C.text)}${bar(420, 140 + i * 63, 40, 12, C.muted)}${bar(478, 140 + i * 63, 40, 12, i < 3 ? a : C.muted)}`).join('')}
    <path d="M640 160H700V210H760M640 260H700V210M640 360H700V410H760M640 460H700V410M760 210H820V310H870M760 410H820V310" fill="none" stroke="${C.line}" stroke-width="4"/>
    ${[160, 260, 360, 460].map((y) => `<rect x="580" y="${y - 20}" width="60" height="40" rx="8" fill="${C.hover}"/>`).join('')}
    <rect x="870" y="285" width="64" height="50" rx="10" fill="${a}"/>`),
};
// Fallback: solo si falta la captura real (public/images/projects/<slug>.webp).
for (const [slug, make] of Object.entries(mocks)) {
  const file = `${OUT}/projects/${slug}.webp`;
  if (!existsSync(file)) await sharp(make()).webp({ quality: 80 }).toFile(file);
}

// ---------- OG image ----------
const FONT = 'Segoe UI, Arial, Helvetica, sans-serif';
await sharp(svg(1200, 630, `
  <rect width="1200" height="630" fill="${C.bg}"/>
  ${Array.from({ length: 22 }, (_, i) => `<path d="M${i * 56} 0V630" stroke="${C.line}" stroke-width="1" opacity="0.6"/>`).join('')}
  ${Array.from({ length: 12 }, (_, i) => `<path d="M0 ${i * 56}H1200" stroke="${C.line}" stroke-width="1" opacity="0.6"/>`).join('')}
  <circle cx="1000" cy="260" r="260" fill="${C.em}" opacity="0.08"/>
  <text x="80" y="300" font-family="${FONT}" font-size="108" font-weight="700" fill="${C.text}">Alexis Daleiro<tspan fill="${C.em}">.</tspan></text>
  <text x="84" y="378" font-family="${FONT}" font-size="40" fill="${C.muted}">Full-Stack Web Developer | Montevideo, Uruguay</text>
  <text x="84" y="450" font-family="${FONT}" font-size="30" fill="${C.em}">Fast. Secure. Built to convert.</text>`)).png().toFile('public/og-image.png');
console.log('imagenes generadas');
