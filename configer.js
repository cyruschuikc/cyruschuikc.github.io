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

      // strings.xml
      if (url.includes("strings.xml")) {
        const strn = xmlDoc.getElementsByTagName("string");
        const atrn = xmlDoc.getElementsByTagName("author");
        const cprn = xmlDoc.getElementsByTagName("copyright");

        const strs = Array.from(strn).map(el => el.textContent.trim());
        const author = atrn.length > 0 ? atrn[0].textContent.trim() : "";
        const cprTXT = cprn.length > 0 ? cprn[0].textContent.trim() : "";

        if (strs.length > 0) {
          document.title = strs[0];
          const webName = document.getElementById("web_name");
          if (webName) webName.innerHTML = strs[0];
        }

        const mDesc = document.querySelector("meta[name='description']");
        if (mDesc && strs.length > 1) mDesc.setAttribute("content", strs[1]);

        const mAuthor = document.querySelector("meta[name='author']");
        if (mAuthor) mAuthor.setAttribute("content", author);

        const mCPR = document.querySelector("meta[name='copyright']");
        if (mCPR) mCPR.setAttribute("content", cprTXT);
      }

      // visitguide.xml
      if (url.includes("visitguide.xml")) {
        const linkn = xmlDoc.getElementsByTagName("url");
        const aTXTn = xmlDoc.getElementsByTagName("txt");
        const atn = xmlDoc.getElementsByTagName("desc");

        const menuObj = [];
        for (let i = 0; i < linkn.length; i++) {
          menuObj.push({
            src: linkn[i].textContent.trim(),
            text: aTXTn[i].textContent.trim(),
            title: atn[i].textContent.trim()
          });
        }

        let menuBody = "<tr>";
        for (let i = 0; i < menuObj.length; i++) {
          menuBody += `<td><h3><a href="${menuObj[i].src}" title="${menuObj[i].title}">${menuObj[i].text}</a></h3></td>`;
        }
        menuBody += "</tr>";
        document.getElementById("menu").innerHTML = menuBody;
      }

      if(url.includes("abstract. xml")){
        const tvs = xmlDoc.getElementsByTagName("content");
        const tvP = new Array();
        for(let i=0; i<tvs.length; i++){
          tvP.push(tvs[i].textContent.trim());
          console.log(tvP);
        }
        console.log(tvP);
        document.getElementById("absc").innerHTML = `${tvP[0]}<br><br>${tvP[1]}`;
      }
    })
    .catch(error => console.error("Error reading XML:", error));
}

// favicon
const fav = document.querySelector("link[rel='icon']");
fav.setAttribute("href","Resources/fav/imgFav_standard.png");

const favImg = document.getElementById("site-fav");
favImg.setAttribute("src","Resources/fav/imgFav_standard.png");
favImg.setAttribute("alt", document.title + "|*");
favImg.setAttribute("title", document.title + "|*");
favImg.addEventListener("click", () => window.location.reload());

// logo
const logo = document.getElementById("site-logo");
logo.setAttribute("src","Resources/fav/imgFav_standard(revise).png");
logo.setAttribute("alt", document.title + "|Home");
logo.setAttribute("title", document.title + "|Home");
logo.addEventListener("click", () => {
  window.location.href = "https://cyruschuikc.github.io/index.html";
});

// abstract title config
document.getElementById("abst").innerHTML = "The•Blog";

// load XML configs
readXML("Resources/xml/strings.xml");
readXML("Resources/xml/visitguide.xml");
readXML("Resources/xml/abstract.xml");