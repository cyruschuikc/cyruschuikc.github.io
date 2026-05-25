/**
Title:  confMAIN.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/confMAIN
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

document.charset = "UTF-8";  //charter set
document.title = "#@CCKCs.NET Blog io HK"; //MyWebSite title
const favTitle = document.title;
window.onload = () => {console.log("Welcome to '" + document.title + "' !!!");}
window.onerror = () => {console.log("Err.#404(NOT FOUND): Fail to access " + document.location + "\nSrouces cannot found // the domain/URL is changed // page is not exist");}

var rights = '{"root": "cyruschuikc", "startat": "2026"+"-"+"May"+"-"+"25", "right": "supervisory", "endat": "-"+"-"+"-"}';
function $(right){
  "&copy;" + favTitle + rights.start + " ~ " + rights.endat + "<br>" +
  "All copyrights of the whole website is belongs to " + rights.root + ", " + rights.start + " ~ " + rights.endat;
}
$.innerHTML = $;
