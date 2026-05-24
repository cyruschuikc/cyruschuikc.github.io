/**
Title:  test.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/test
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=()=>{xhttp.readyState==4&&xhttp.status==200?xhttp.responseText:xhttp.responseText};
xhttp.open("GET", "Scripts/text/welstatementMAIN.txt", true);
xhttp.send();

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
