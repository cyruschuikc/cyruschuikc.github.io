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
      const strs = new Array();
      for(let i=0; i<strn.length; i++){
        strs.push(strn[i].textContent. trim());
      }
      document.title = strs[0];
      document.getElementById("web_name").innerHTML = strs[0];
      document.setAttribute("meta[name='description]", strs[1]);
    };

  })
  // catch error
  .catch(error => {
    console.error("Error reading XML strings:", error); // error response
  });
}
