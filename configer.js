/**
Title: configer.js
Author: cyruschuikc
Source: https://github.com/cyruschuikc/main/configer.js
License: *CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

function readXML(url) {
  fetch(url)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      if (url === "Resources/xml/strings.xml") {
        const strn = xmlDoc.getElementsByTagName("string");
        const atrn = xmlDoc.getElementsByTagName("author");
        const cprn = xmlDoc.getElementsByTagName("copyright");

        const strs = Array.from(strn).map(el => el.textContent.trim());
        const imgs = Array.from(imgn).map(el => el.textContent.trim());
        const imgas = Array.from(imgan).map(el => el.textContent.trim());
        const imgocs = Array.from(imgocn).map(el => el.textContent.trim());

        const author = atrn.length > 0 ? atrn[0].textContent.trim() : "";
        const cprTXT = cprn.length > 0 ? cprn[0].textContent.trim() : "";

        // set web title and name
        if (strs.length > 0) {
          document.title = strs[0];
          const webName = document.getElementById("web_name");
          if (webName) webName.innerHTML = strs[0];
        }

        // set meta description
        const mDesc = document.querySelector("meta[name='description']");
        if (mDesc && strs.length > 1) {
          mDesc.setAttribute("content", strs[1]);
        }

        // set meta author
        const mAuthor = document.querySelector("meta[name='author']");
        if (mAuthor) mAuthor.setAttribute("content", author);

        // set meta copyright
        const mCPR = document.querySelector("meta[name='copyright']");
        if (mCPR) mCPR.setAttribute("content", cprTXT);
      }
    })
    .catch(error => {
      console.error("Error reading XML strings:", error);
    });
}

const fav = document.querySelector("link[rel='icon']");
fav.setAttribute("name", "favicon");
fav.setAttribute("href","Resources/fav/imgFav_standard.png");

const fav_ = document.querySelector("img[id='site-fav']");
fav_.setAttribute("name", "favlogo");
fav_.setAttribute("src","Resources/fav/imgFav_standard.png");
fav_.setAttribute("alt", document.title + "|*");
fav_.setAttribute("title", document.title + "|*");
document.getElementById("site-logo").
  addEventListener("click", () => 
  {
    window.location.reload();
  });

const logo = document.querySelector("img[id='site-logo']");
logo.setAttribute("name", "favlogo");
logo.setAttribute("src","Resources/fav/imgFav_standard.png");
logo.setAttribute("alt", document.title + "|Home");
fav_.setAttribute("title", document.title + "|Home");
document.getElementById("site-logo").
  addEventListener("click", () => 
  {
    window.location.href("https://cyruschuikc.github.io/index.html");
  });

readXML("Resources/xml/strings.xml");