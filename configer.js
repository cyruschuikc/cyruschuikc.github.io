/**
Title: configer.js
Author: cyruschuikc
Source: https://github.com/cyruschuikc/main/configer.js
License: *CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

function readXML(url) {
  // Initialize the readXML function 
  fetch(url)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      if (url === "Resources/xml/strings.xml") {
        const strn = xmlDoc.getElementsByTagName("string");
        const atrn = xmlDoc.getElementsByTagName("author");
        const cprn = xmlDoc.getElementsByTagName("copyright");
        const imgn = xmlDoc.getElementsByTagName("image");
        const imgan = xmlDoc.getElementsByTagName("image_alt");
        const imgocn = xmlDoc.getElementsByTagName("image_onclick");

        const strs = [];
        const imgs = [];
        const imgas = [];
        const imgocs = [];

        for (let i = 0; i < strn.length; i++) {
          strs.push(strn[i].textContent.trim());
        }
        for (let i = 0; i < imgn.length; i++) {
          imgs.push(imgn[i].textContent.trim());
        }
        for (let i = 0; i < imgan.length; i++) {
          imgas.push(imgan[i].textContent.trim());
        }
        for (let i = 0; i < imgocn.length; i++) {
          imgocs.push(imgocn[i].textContent.trim());
        }

        const author = atrn.length > 0 ? atrn[0].textContent.trim() : "";
        const cprTXT = cprn.length > 0 ? cprn[0].textContent.trim() : "";

        // set web title and name
        if (strs.length > 0) {
          document.title = strs[0];
          const webName = document.getElementById("web_name");
          if (webName) {
            webName.innerHTML = strs[0];
          }
        }

        // set meta description
        const mDesc = document.querySelector("meta[name='description']");
        if (mDesc && strs.length > 1) {
          mDesc.setAttribute("content", strs[1]);
        }

        // set meta author
        const mAuthor = document.querySelector("meta[name='author']");
        if (mAuthor) {
          mAuthor.setAttribute("content", author);
        }

        // set meta copyright
        const mCPR = document.querySelector("meta[name='copyright']");
        if (mCPR) {
          mCPR.setAttribute("content", cprTXT);
        }

        // set favicon
        let fav = document.querySelector("link[rel='icon']");
        if (!fav) {
          fav = document.createElement("link");
          fav.rel = "icon";
          document.head.appendChild(fav);
        }
        if (imgs.length > 0) {
          fav.setAttribute("type", "image/png");
          fav.setAttribute("href", imgs[0]);
        }

        // set logo img
        const fav_ = document.querySelector("img[id='site-logo']");
        if (fav_ && imgs.length > 0) {
          fav_.setAttribute("id", "favimg");
          fav_.setAttribute("name", "favlogo");
          fav_.setAttribute("src", imgs[0]);
          if (imgas.length > 0) fav_.setAttribute("alt", imgas[0]);
          if (imgocs.length > 0) fav_.setAttribute("onclick", imgocs[0]);
        }
        document.body.appendChild(fav_);
      }
    })
    // catch error
    .catch(error => {
      console.error("Error reading XML strings:", error); // error response
    });
}

readXML("Resources/xml/strings.xml");