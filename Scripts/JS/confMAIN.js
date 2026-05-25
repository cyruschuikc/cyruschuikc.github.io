/**
Title:  confMAIN.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/confMAIN
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

document.charset = "UTF-8";  //charter set
document.title = "#@CCKCs.NET Blog io HK"; //MyWebSite title
const favTitle = document.title;
window.onload = () => {console.log("Welcome to '" + document.title + "' !!!");};

var rights = '{"root": "cyruschuikc", "startat": "2026-May-25", "right": "supervisory", "parameter": " ~ ", "endat": "---"}';
var obj = JSON.parse(rights);
document.getElementById("right").innerHTML = 
  "&copy;" + "All copyrights belongs to " + obj.root + " | " + obj.startat + obj.parameter + obj.endat + "<br>";

var contribution = '{"founder": [{"name": "cyruschuikc", "AssignAt": "25th, May, 2026"}]}';
var obj2 = JSON.parse(contribution);
