// ===================== DATA =====================
// x / y are offsets in px from the centre card. Edit links to point at
// real project pages when you have them.
const PROJECTS = [
  { name: 'Maggo',                cat: 'Editorial / Social',  img: 'maggo.png',        bg: '#f4e23a', x:   10, y: -290, link: '#' },
  { name: 'Enifolia',             cat: 'UX & UI Design',      img: 'enifolia.jpg',     bg: '#dcefcf', x:  360, y: -150, link: '#' },
  { name: 'The Clash × Basquiat', cat: 'Album / Illustration',img: 'clash.png',        bg: '#bcd99a', x:  430, y:   70, link: '#' },
  { name: 'Scomodo',              cat: 'Advertising',         img: 'scomodo.png',      bg: '#efece6', x:  300, y:  260, link: '#' },
  { name: 'Bozza',                cat: 'Editorial',           img: 'bozza.jpg',        bg: '#f3d4e0', x:   20, y:  320, link: '#' },
  { name: 'Annual Report',        cat: 'Infographic',         img: 'annual.jpg',       bg: '#f3e04a', x: -320, y:  250, link: '#' },
  { name: 'Naturamatic',          cat: 'Editorial',           img: 'naturamatic.jpg',  bg: '#cccccc', x: -440, y:   30, link: '#' },
  { name: 'Guardians Vol.2',      cat: 'Motion Graphics',     img: 'guardians.png',    bg: '#141414', x: -340, y: -170, link: '#' },
];

const world = document.getElementById('world');
const svg = document.getElementById('links');
const center = world.querySelector('.node--center');

// ===================== BUILD NODES =====================
PROJECTS.forEach((p, i) => {
  const a = document.createElement('a');
  a.className = 'node node--project';
  a.href = p.link;
  a.style.left = p.x + 'px';
  a.style.top = p.y + 'px';
  a.dataset.x = p.x;
  a.dataset.y = p.y;
  a.innerHTML = `
    <span class="title">${p.name}</span>
    <div class="card" style="background:${p.bg}">
      <span class="idx">${i + 1}</span>
      <img src="assets/img/${p.img}" alt="${p.name}" loading="lazy" />
      <span class="open">Open project →</span>
    </div>
    <span class="cat">${p.cat}</span>`;
  world.appendChild(a);
});

// ===================== DRAW DASHED LINKS =====================
function drawLinks() {
  if (window.innerWidth <= 760) { svg.innerHTML = ''; return; }
  svg.innerHTML = '';
  // svg origin is offset by -2000,-2000 (see CSS); world origin = (0,0)
  const OX = 2000, OY = 2000;
  PROJECTS.forEach((p) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', OX);
    line.setAttribute('y1', OY);
    line.setAttribute('x2', OX + p.x);
    line.setAttribute('y2', OY + p.y);
    svg.appendChild(line);
  });
}
drawLinks();
window.addEventListener('resize', drawLinks);

// ===================== DRAG TO PAN =====================
const stage = document.querySelector('.stage');
let panX = 0, panY = 0, startX = 0, startY = 0, dragging = false, moved = false;

function apply() { world.style.transform = `translate(${panX}px, ${panY}px)`; }

function down(e) {
  if (window.innerWidth <= 760) return;
  dragging = true; moved = false;
  stage.classList.add('dragging');
  const pt = e.touches ? e.touches[0] : e;
  startX = pt.clientX - panX;
  startY = pt.clientY - panY;
}
function move(e) {
  if (!dragging) return;
  const pt = e.touches ? e.touches[0] : e;
  const nx = pt.clientX - startX;
  const ny = pt.clientY - startY;
  if (Math.abs(nx - panX) + Math.abs(ny - panY) > 3) moved = true;
  // clamp so the constellation can't be dragged completely off-screen
  const max = 600;
  panX = Math.max(-max, Math.min(max, nx));
  panY = Math.max(-max, Math.min(max, ny));
  apply();
}
function up() { dragging = false; stage.classList.remove('dragging'); }

stage.addEventListener('mousedown', down);
window.addEventListener('mousemove', move);
window.addEventListener('mouseup', up);
stage.addEventListener('touchstart', down, { passive: true });
window.addEventListener('touchmove', move, { passive: true });
window.addEventListener('touchend', up);

// prevent a click firing after a drag
world.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (moved) { e.preventDefault(); return; }
  if (link && link.getAttribute('href') === '#') e.preventDefault();
}, true);

// ===================== MOBILE NAV =====================
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') nav.classList.remove('open');
});
