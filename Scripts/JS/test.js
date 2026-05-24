/**
Title:  test.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/test
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/
function readXML() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
xmlhttp.readyState == 4 && xmlhttp.status == 200 ? displayXMLcontents(xmlhttp) : alert("ERROR!!!");
};
xmlhttp.open("GET", "books.xml", true);
xmlhttp.send();
}
function displayXMLcontents(xml){
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML; // parse response as text/xml stream && returns a Document tree
  txt = "";
  x = xmlDoc.getElementByTagName("h1");
  for (i = 0; i < x.length; i++){
    txt += x[i].childNodes[0].nodeValue + "<br>"
  }
  txt += "<hr>"
  alert(txt);
}

function $(fimg1){return document.getElementById("fimg1")};
function $$(fimg2){return document.getElementById("fimg2")};
function $1(fimg1){return document.getElementById("fimg1").getAttribute('alt')};
function $$1(fimg2){return document.getElementById("fimg2").getAttribute('alt')};
function $2(fimg1){return document.getElementById("fimg1").getAttribute('src')};
function $$2(fimg2){return document.getElementById("fimg2").getAttribute('src')};
$().onload = () => {console.log("'" + $1() + "' loaded successful!!!");};
$().onerror = () => {console.log("Err.#404(NOT FOUND):" + $1() + "' loaded unsuccessful!!!\n" + $1() + " cannot found or have not exitis!!!\nsrc:"+$2());};
$$().onload = () => {console.log("'" + $$1() + "' loaded successful!!!");};
$$().onerror = () => {console.log("Err.#404(NOT FOUND):" + $$1() + "' loaded unsuccessful!!!\n" + $$1() + " cannot found or have not exitis!!!\nsrc:"+$$2());};
