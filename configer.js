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

    if(url==="Resources/xml/strings.xml"){
      const strn = xmlDoc.getElementsByTagName("string");
      const atrn = xmlDoc.getElementsByTagName("author");
      const cprn = xmlDoc.getElementsByTagName("copyright");
      const imgn = xmlDoc.getElementsByTagName("image");
      const imgan = xmlDoc.getElementsByTagName("image_alt");
      const imgocn = xmlDoc.getElementsByTagName("image_onclick");
      const strs = new Array();
      const author = atrn[0].textContent.trim();
      const cprTXT = cprn[0].textContent.trim();
      const imgs = new Array();
      const imgas = new Array();
      const imgocs = new Array();
      for(let i=0; i<strn.length; i++){
        strs.push(strn[i].textContent. trim());
      }
      for(let i=0; i<imgn.length; i++){
        imgs.push(imgn[i].textContent. trim());
      }
      for(let i=0; i<imgan.length; i++){
        imgas.push(imgan[i].textContent.trim());
      }
      for(let i=0; i<imgocn.length; i++){
      imgocs.push(imgocn[i].textContent. trim());
}
      document.title = strs[0];
      document.getElementById("web_name").innerHTML = strs[0];
      const mDesc = document.querySelector("meta[name='description']");
      if(mDesc){
        mDesc.setAttribute("content",  strs[1]);
      };
      const mAuthor = document.querySelector("meta[name='author']");
      mAuthor.setAttribute("content", author);
      const mCPR = document.querySelector("meta[name='copyright]");
      mCPR.setAttribute("content", cprTXT);

      const fav = document.querySelector("link[rel='icon']");
      fav.setAttribute("type", "image/png");
      fav.setAttribute("href", imgs[0]);

      const fav_ = document.querySelector("img[id='site-logo']");
      fav_.setAttribute("id", "favimg");
      fav_.setAttribute("name", "favlogo");
      fav_.setAttribute("src", imgs[0]);
      fav_.setAttribute("alt", imgas[0]);
      fav_.setAttribute("onclick", imgocs[0]);

    }
  })
  // catch error
  .catch(error => {
    console.error("Error reading XML strings:", error); // error response
  });
}

readXML("Resources/xml/strings.xml");
