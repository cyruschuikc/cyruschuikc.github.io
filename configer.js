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
  })
} 

readXML("");