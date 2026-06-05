/**
Title: configer.js
Author: cyruschuikc
Source: https://github.com/cyruschuikc/main/configer.js
License: *CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

function readXML(url){
  fetch(url).then(res => res.text()).then(str => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(str, "application/xml");

    if(url === "Resources/xml/strings.xml"){
      const vText = xmlDoc.getElementsByTagName("string");
      if(vText.length > 0){
        document.title = vText[0].textContent;
      }
      const webName = document.getElementById("web_name");
      if(webName) webName.textContent = "#@CCKCs.NET Blog io HK";

      // favicon
      const favNode = xmlDoc.getElementsByTagName("image")[0];
      if(favNode){
        const fav = favNode.textContent.trim();
        let link = document.querySelector("link[rel~='icon']");
        if(!link){
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.href = fav;
      }

      // meta tags
      if(vText.length > 1){
        document.querySelector("meta[name='description']")
          ?.setAttribute("content", vText[1].textContent);
      }
      const authorNode = xmlDoc.getElementsByTagName("author")[0];
      if(authorNode){
        document.querySelector("meta[name='author']")
          ?.setAttribute("content", authorNode.textContent);
      }
      const copyrightNode = xmlDoc.getElementsByTagName("copyright")[0];
      if(copyrightNode){
        document.querySelector("meta[name='copyright']")
          ?.setAttribute("content", copyrightNode.textContent);
      }
    }

    // logo
const logoNode = xmlDoc.querySelector('image[name="logo"]');
const logoAltNode = xmlDoc.querySelector('image_alt[name="logo"]');

if (logoNode && logoAltNode) {
  let logoImg = document.querySelector("#site-logo");
  if (!logoImg) {
    logoImg = document.createElement("img");
    logoImg.id = "site-logo";
    logoImg.onclick = () => {window.location.reload();}
    document.body.prepend(logoImg);
  }

  logoImg.src = logoNode.textContent.trim();
  logoImg.alt = logoAltNode.textContent.trim();
}
  });
}

readXML("Resources/xml/strings.xml");