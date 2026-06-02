/**
Title:  confMAIN.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/confMAIN
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

document.title = "#@CCKCs.NET Blog io HK"; //MyWebSite title
const favTitle = document.title;
document.getElementById("thTitle").innerHTML = favTitle;
const absTitle_ = document.title;
document.getElementById("absTitle").innerHTML = "The•Blog";
document.getElementById("welstate-title").innerHTML = "Welcome to visit " + favTitle + "<br>!!!";
document.getElementById("welstate-content").innerHTML = "'" + favTitle + "' is a individualise creativetie web site page act a blog to write down a life, future carer, intrest, etc. Of a person who dedicated to engaging in IT industry to be a vocational programmer, a software engineer and developer. <br><br> Also the 'Past', 'Cureent', and the 'Unkownable Wishing Future' ... (--to be continue--)";

window.onload = () => { console.log("Welcome to '" + document.title + "' !!!"); };

var rights = '{"root": "cyruschuikc", "startat": "2026-May-25", "right": "supervisory", "parameter": " ~ ", "endat": "---"}';
var obj = JSON.parse(rights);
document.getElementById("right").innerHTML =
  "&copy; All copyrights belongs to " + obj.root + " | " + obj.startat + obj.parameter + obj.endat + "<br>";

// function of read visitguide.xml
function readMenuXML(url) {
  fetch(url)
    .then(response => response.text())
    .then(str => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "application/xml");
      const atxt = xmlDoc.getElementsByTagName("tagtxt");
      const asrc = xmlDoc.getElementsByTagName("href");
      let menuobj = [];
      for (let i = 0; i < atxt.length; i++) {
        const text = atxt[i].textContent;
        const link = asrc[i].textContent;
        menuobj.push(`<th><a href="${link}">${text}</a></th>`);
      }
      const menutxt = `<tr>${menuobj.join("")}</tr>`;
      document.getElementById("menu").innerHTML = `<table border="1">${menutxt}</table>`;
    })
    .catch(err => console.error("read XML failed:", err));
}
readMenuXML("visitguide.xml");

// function to read abstract.xml
function readAbstractXML(url) {
  fetch(url)
    .then(response => response.text())
    .then(str => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "application/xml");
      const tvID = xmlDoc.getElementsByTagName("id");
      const tvContent = xmlDoc.getElementsByTagName("content");
      let abstractobj = [];
      for (let i = 0; i < tvID.length; i++) {
        const pTXTid = tvID[i].textContent;
        const pTXT = tvContent[i].textContent;
        abstractobj.push(`<p id="${pTXTid}">${pTXT}</p>`);
      }
      document.getElementById("abstract").innerHTML = abstractobj.join("");
    })
    .catch(err => console.error("read XML failed:", err));
}
readAbstractXML("Resources/xml/abstract.xml");

var contribution = '{"founder": [{"name": "cyruschuikc", "AssignAt": "25th, May, 2026"}]}';
var obj3 = JSON.parse(contribution);