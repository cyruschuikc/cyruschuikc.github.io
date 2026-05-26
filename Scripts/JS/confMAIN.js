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

var menuTXT = '{"*root": [' + 
  '{"tagTXT": "*", "name": "root page", "URL": "https://cyruschuikc.github.io/", "domain": "cyruschuikc.github.io", "protocol": "HTTPS"},' + 
  '{"tagTXT": "Home", "name": "home page", "URL": "https://cyruschuikc.github.io/index.html", "domain": "cyruschuikc.github.io/index.html", "protocol": "HTTPS"}' + 
  '], "other": ['+
  '{"tagTXT": "?", "name": "coming soon...", "URL": "https://github.com/cyruschuikc/", "domain": "github.com/cyruschuikc", "protocol": "HTTPS"}]}';
var menuscript = JSON.parse(menuTXT);
var menutable = "<table border='1'><tr><th><a href='" + menuscript["*root"][0].URL + "'>" + menuscript["*root"][0].tagTXT + "</a></th><th><a href='" + menuscript["*root"][1].URL + "'>" + menuscript["*root"][1].tagTXT + "</a></th><th> " + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + " (" + menuscript["other"][0].name + ") " + "</th>" +"</tr></table>";
document.getElementById("menu").innerHTML = menutable;

var contribution = '{"founder": [{"name": "cyruschuikc", "AssignAt": "25th, May, 2026"}]}';
var obj3 = JSON.parse(contribution);
