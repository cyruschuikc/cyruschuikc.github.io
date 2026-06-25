// configer.js - revised by Cyrus helper
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Run configuration after DOM is ready
  initSiteConfig().catch(err => console.error('Initialization failed:', err));
});

async function initSiteConfig() {
  // Update icons and images only after DOM is ready
  updateIcons();

  // Load XML resources in parallel
  await Promise.all([
    readXMLAndApply('Resources/xml/strings.xml'),
    readXMLAndApply('Resources/xml/visitguide.xml')
  ]);

  // Log final state
  console.log(`Website initialized: ${document.title}`);
}

/* Update favicon and image placeholders */
function updateIcons() {
  const icn = document.querySelector("link[rel='icon']");
  if (icn) icn.href = 'Resources/fav/imgFav_standard.png';

  const fav = document.getElementById('site-fav');
  if (fav) fav.src = 'Resources/fav/imgFav_standard.png';

  const logo = document.getElementById('site-logo');
  if (logo) logo.src = 'Resources/fav/imgFav_standard(revise).png';

  // Optional: attach load/error handlers for debugging
  if (fav) fav.addEventListener('load', () => console.log('Fav loaded', fav.src));
  if (logo) logo.addEventListener('load', () => console.log('Logo loaded', logo.src));
}

/* Read an XML file and apply changes depending on its path */
async function readXMLAndApply(url) {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`Network response was not ok for ${url}: ${res.status}`);

    const xmlText = await res.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    // Detect parse errors
    if (xmlDoc.querySelector('parsererror')) {
      const errText = xmlDoc.querySelector('parsererror').textContent || 'Unknown XML parse error';
      throw new Error(`XML parse error in ${url}: ${errText}`);
    }

    if (url.endsWith('strings.xml')) {
      applyStringsXml(xmlDoc);
    } else if (url.endsWith('visitguide.xml')) {
      applyVisitGuideXml(xmlDoc);
    } else {
      console.warn('Unhandled XML file:', url);
    }
  } catch (err) {
    console.error(`Error reading XML ${url}:`, err);
  }
}

/* Apply strings.xml content to the page */
function applyStringsXml(xmlDoc) {
  const stringNodes = Array.from(xmlDoc.getElementsByTagName('string'));
  const authorNodes = Array.from(xmlDoc.getElementsByTagName('author'));

  if (stringNodes.length === 0) {
    console.warn('No <string> nodes found in strings.xml');
  }

  // Map strings by index but guard against missing entries
  const s = indexableText(stringNodes);

  if (s[0]) {
    document.title = s[0];
    const webName = document.getElementById('web_name');
    if (webName) webName.textContent = document.title;
  }

  if (s[1]) {
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute('content', s[1]);
  }

  const abst = document.getElementById('abst');
  if (abst) abst.textContent = 'The.Blog';

  const absc = document.getElementById('absc');
  if (absc && s[2]) absc.textContent = s[2];

  const welstate = document.getElementById('welstate');
  if (welstate && (s[3] || s[4])) {
    // Use textContent and explicit line breaks via nodes to avoid innerHTML
    welstate.textContent = ''; // clear
    if (s[3]) {
      welstate.appendChild(document.createTextNode(s[3]));
      if (s[4]) {
        welstate.appendChild(document.createElement('br'));
        welstate.appendChild(document.createElement('br'));
        welstate.appendChild(document.createTextNode(s[4]));
      }
    }
  }

  if (authorNodes.length > 0) {
    const authorMeta = document.querySelector("meta[name='author']");
    if (authorMeta) authorMeta.setAttribute('content', authorNodes[0].textContent.trim());
  }
}

/* Apply visitguide.xml content to the page */
function applyVisitGuideXml(xmlDoc) {
  const urlNodes = Array.from(xmlDoc.getElementsByTagName('url'));
  const txtNodes = Array.from(xmlDoc.getElementsByTagName('txt'));
  const descNodes = Array.from(xmlDoc.getElementsByTagName('desc'));

  const count = Math.min(urlNodes.length, txtNodes.length, descNodes.length);
  if (count === 0) {
    console.warn('No complete menu entries found in visitguide.xml');
    return;
  }

  const items = [];
  for (let i = 0; i < count; i++) {
    const href = urlNodes[i].textContent.trim();
    const text = txtNodes[i].textContent.trim();
    const desc = descNodes[i].textContent.trim();
    if (!href || !text) continue;
    items.push({ href, text, desc });
  }

  // Prefer semantic nav if present
  const nav = document.getElementById('main-nav') || document.querySelector('nav#main-nav');
  if (nav) {
    populateNav(nav, items);
    return;
  }

  // Fallback to table with id="menu"
  const menuTable = document.getElementById('menu');
  if (menuTable && menuTable.tagName.toLowerCase() === 'table') {
    populateTableMenu(menuTable, items);
    return;
  }

  // If neither exists, try to find any element with id menu and populate as inline links
  const genericMenu = document.getElementById('menu');
  if (genericMenu) {
    genericMenu.textContent = '';
    items.forEach(it => {
      const a = document.createElement('a');
      a.href = it.href;
      a.title = it.desc || '';
      a.textContent = it.text;
      genericMenu.appendChild(a);
      genericMenu.appendChild(document.createTextNode(' '));
    });
  } else {
    console.warn('No menu container found to populate visit guide');
  }
}

/* Build a semantic nav list */
function populateNav(navElement, items) {
  // Clear existing content
  navElement.textContent = '';
  const ul = document.createElement('ul');
  items.forEach(it => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = it.href;
    a.textContent = it.text;
    if (it.desc) a.setAttribute('title', it.desc);
    li.appendChild(a);
    ul.appendChild(li);
  });
  navElement.appendChild(ul);
}

/* Build a single-row table menu */
function populateTableMenu(tableElement, items) {
  // Clear table body
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

/* Helper to convert NodeList to indexable trimmed text array */
function indexableText(nodeList) {
  const arr = [];
  nodeList.forEach(n => arr.push(n.textContent.trim()));
  return arr;
}