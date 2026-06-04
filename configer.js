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
      document.querySelector("meta[name='description]"). setAtribute("content", vText[1]. textContent);
      document.querySelector("meta[name='author']"). setAtribute("content", xmlDoc.getElementsByTagName("author")[0]. textContent);
    document.querySelector("meta[name='copyright']"). setAtribute("content", xmlDoc.getElementsByTagName("copyright")[0]. textContent);
    }
  })
} 

readXML("Resources/xml/strings.xml");