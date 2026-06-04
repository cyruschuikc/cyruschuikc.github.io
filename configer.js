/**
Title: configer.js
Author: cyruschuikc
Source: https://github.com/cyruschuikc/main/configer.js
License: *CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

function readXML(url){
  fetch(url).then(res => res.text()).then(str => 
  {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(str, "application/xml");
    if(url=="Resources/xml/strings.xml"){
      const vText =  xmlDoc.getElementsByTagName("string");
      const title = vText[0].textContent;
      document.title = title;
      document.getElementById("web_name").innerHTML  = title;
      const fav = xmlDoc.getElementsByTagName("image")[0].textContent;
      let link = document.querySelector("link[rel~='icon']");
      if(!link){
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      } link.href = fav;
      document.querySelector("meta[name='description']").setAttribute("content", vText[1].textContent);
      document.querySelector("meta[name='author']").setAttribute("content", xmlDoc.getElementsByTagName("author")[0].textContent);
    document.querySelector("meta[name='copyright']").setAttribute("content", xmlDoc.getElementsByTagName("copyright")[0].textContent);
    }
    const logoUrl = xmlDoc.querySelector('image[name="logo"]').textContent.trim();
    const logoAlt = xmlDoc.querySelector('image_alt[name="logo"]').textContent.trim();
    let logoImg = document.querySelector("#site-logo");
        if (!logoImg) {
          logoImg = document.createElement("img");
          logoImg.id = "site-logo";
          document.body.prepend(logoImg);
        }
        logoImg.src = logoUrl;
        logoImg.alt = logoAlt;
      }
  })
} 

readXML("Resources/xml/strings.xml");