/**
Title: configer.js
Author: cyruschuikc
Source: https://github.com/cyruschuikc/main/configer.js
License: *CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

function readXMLBrowser(url) {
    fetch(url)
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser(); // Initialize the DOMParser
            const xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Parse the string into an XML DOM Document
        })
        .catch(error => console.error("Error reading XML:", error)); //catch error
}
