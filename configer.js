// configer.js - integrated, production-ready
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initSiteConfig().catch(err => console.error('Initialization failed:', err));
});

async function initSiteConfig() {
  updateIcons();

  // Load XML resources in parallel with timeouts
  await Promise.all([
    readXMLAndApply('Resources/xml/strings.xml'),
    readXMLAndApply('Resources/xml/visitguide.xml'),
    readXMLAndApply('Resources/xml/abstract.xml').catch(() => {}) // optional
  ]);

  console.log(`Website initialized: ${document.title}`);
}

/* ---------------------------
   Icon and image updates
   --------------------------- */
function updateIcons() {
  const icn = document.querySelector("link[rel='icon']");
  if (icn) icn.href = 'Resources/fav/imgFav_standard.png';

  const fav = document.getElementById('site-fav');
  if (fav) fav.src = 'Resources/fav/imgFav_standard.png';

  const logo = document.getElementById('site-logo');
  if (logo) logo.src = 'Resources/fav/imgFav_standard(revise).png';

  if (fav) fav.addEventListener('load', () => console.debug('Fav loaded', fav.src));
  if (logo) logo.addEventListener('load', () => console.debug('Logo loaded', logo.src));
}

/* ---------------------------
   Fetch helper with timeout
   --------------------------- */
async function fetchWithTimeout(url, timeout = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal, cache: 'no-cache' });
    clearTimeout(id);
    if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
    return await res.text();
  } finally {
    clearTimeout(id);
  }
}

/* ---------------------------
   Generic XML loader and dispatcher
   --------------------------- */
async function readXMLAndApply(url) {
  try {
    const xmlText = await fetchWithTimeout(url, 8000);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    if (xmlDoc.querySelector('parsererror')) {
      const errText = xmlDoc.querySelector('parsererror').textContent || 'Unknown XML parse error';
      throw new Error(`XML parse error in ${url}: ${errText}`);
    }

    if (url.endsWith('strings.xml')) {
      applyStringsXml(xmlDoc);
    } else if (url.endsWith('visitguide.xml')) {
      applyVisitGuideXml(xmlDoc);
    } else if (url.endsWith('abstract.xml')) {
      applyAbstractXml(xmlDoc);
    } else {
      console.warn('Unhandled XML file:', url);
    }
  } catch (err) {
    console.error(`Error reading XML ${url}:`, err);
  }
}

/* ---------------------------
   Strings handling (keyed map)
   --------------------------- */
function buildStringsMap(xmlDoc, preferredLang = navigator.language || 'en') {
  const map = {};
  xmlDoc.querySelectorAll('string').forEach(node => {
    const key = node.getAttribute('name');
    const lang = (node.getAttribute('lang') || 'en').toLowerCase();
    if (!key) return;
    if (!map[key]) map[key] = { value: node.textContent.trim(), lang };
    else {
      // prefer exact language match
      if (lang === preferredLang.toLowerCase()) map[key] = { value: node.textContent.trim(), lang };
    }
  });
  // flatten to simple key -> value
  const flat = {};
  Object.keys(map).forEach(k => flat[k] = map[k].value);
  return flat;
}

function applyStringsXml(xmlDoc) {
  const preferredLang = (navigator.language || 'en').split('-')[0];
  const s = buildStringsMap(xmlDoc, preferredLang);

  if (s.title) {
    document.title = s.title;
    const webName = document.getElementById('web_name');
    if (webName) webName.textContent = s.title;
  }

  if (s.description) {
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute('content', s.description);
  }

  const abst = document.getElementById('abst');
  if (abst) abst.textContent = s.abstract_title || 'The.Blog';

  const absc = document.getElementById('absc');
  if (absc && (s.abstract || s.AbstractContextView1)) {
    absc.textContent = s.abstract || s.AbstractContextView1;
  }

  const welstate = document.getElementById('welstate');
  const wp1 = s.welcome_paragraph_1 || s.WelComeContextView1 || s.welcome_paragraph_1;
  const wp2 = s.welcome_paragraph_2 || s.WelcomeContextView2 || s.welcome_paragraph_2;
  if (welstate && (wp1 || wp2)) {
    welstate.textContent = '';
    if (wp1) {
      welstate.appendChild(document.createTextNode(wp1));
      if (wp2) {
        welstate.appendChild(document.createElement('br'));
        welstate.appendChild(document.createElement('br'));
        welstate.appendChild(document.createTextNode(wp2));
      }
    }
  }

  const authorNode = xmlDoc.querySelector('author');
  if (authorNode) {
    const authorMeta = document.querySelector("meta[name='author']");
    if (authorMeta) authorMeta.setAttribute('content', authorNode.textContent.trim());
  }
}

/* ---------------------------
   Visit guide (menu) handling
   --------------------------- */
function applyVisitGuideXml(xmlDoc) {
  // Prefer structured <entry> nodes if present
  const entryNodes = Array.from(xmlDoc.querySelectorAll('spinner > entry'));
  const items = [];

  if (entryNodes.length > 0) {
    entryNodes.forEach(e => {
      const href = e.querySelector('url')?.textContent?.trim() || '';
      const text = e.querySelector('txt')?.textContent?.trim() || '';
      const desc = e.querySelector('desc')?.textContent?.trim() || '';
      if (href && text) items.push({ href, text, desc });
    });
  } else {
    // Fallback: collect sequential url/txt/desc nodes
    const urlNodes = Array.from(xmlDoc.getElementsByTagName('url'));
    const txtNodes = Array.from(xmlDoc.getElementsByTagName('txt'));
    const descNodes = Array.from(xmlDoc.getElementsByTagName('desc'));
    const count = Math.min(urlNodes.length, txtNodes.length, descNodes.length);
    for (let i = 0; i < count; i++) {
      const href = urlNodes[i].textContent.trim();
      const text = txtNodes[i].textContent.trim();
      const desc = descNodes[i].textContent.trim();
      if (href && text) items.push({ href, text, desc });
    }
  }

  if (items.length === 0) {
    console.warn('No menu items found in visitguide.xml');
    return;
  }

  const nav = document.getElementById('main-nav') || document.querySelector('nav#main-nav');
  if (nav) {
    populateNav(nav, items);
    return;
  }

  const menuTable = document.getElementById('menu');
  if (menuTable && menuTable.tagName.toLowerCase() === 'table') {
    populateTableMenu(menuTable, items);
    return;
  }

  const genericMenu = document.getElementById('menu');
  if (genericMenu) {
    genericMenu.textContent = '';
    items.forEach((it, idx) => {
      const a = document.createElement('a');
      a.href = it.href;
      a.title = it.desc || '';
      a.textContent = it.text;
      genericMenu.appendChild(a);
      if (idx < items.length - 1) genericMenu.appendChild(document.createTextNode(' | '));
    });
    return;
  }

  console.warn('No menu container found to populate visit guide');
}

function populateNav(navElement, items) {
  navElement.textContent = '';
  const ul = document.createElement('ul');
  ul.setAttribute('role', 'menubar');
  items.forEach(it => {
    const li = document.createElement('li');
    li.setAttribute('role', 'none');
    const a = document.createElement('a');
    a.href = it.href;
    a.textContent = it.text;
    if (it.desc) a.setAttribute('title', it.desc);
    // mark current page if matches
    if (location.href === new URL(it.href, location.href).href) a.setAttribute('aria-current', 'page');
    li.appendChild(a);
    ul.appendChild(li);
  });
  navElement.appendChild(ul);
}

function populateTableMenu(tableElement, items) {
  tableElement.textContent = '';
  const tr = document.createElement('tr');
  items.forEach(it => {
    const td = document.createElement('td');
    const a = document.createElement('a');
    a.href = it.href;
    a.textContent = it.text;
    if (it.desc) a.setAttribute('title', it.desc);
    td.appendChild(a);
    tr.appendChild(td);
  });
  tableElement.appendChild(tr);
}

/* ---------------------------
   Abstract XML handling (optional)
   --------------------------- */
function applyAbstractXml(xmlDoc) {
  const entries = Array.from(xmlDoc.querySelectorAll('entry'));
  if (entries.length === 0) {
    // fallback to older structure
    const p1 = xmlDoc.querySelector('content');
    if (p1) {
      const el = document.getElementById('p1');
      if (el) el.textContent = p1.textContent.trim();
    }
    return;
  }

  entries.forEach(e => {
    const id = e.getAttribute('id') || e.getAttribute('name');
    const contentNode = e.querySelector('content');
    if (!id || !contentNode) return;
    const el = document.getElementById(id);
    if (el) el.textContent = contentNode.textContent.trim();
  });
}

/* ---------------------------
   Utility helpers
   --------------------------- */
function indexableText(nodeList) {
  const arr = [];
  nodeList.forEach(n => arr.push(n.textContent.trim()));
  return arr;
}