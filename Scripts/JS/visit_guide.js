/**
Title:  visit_guide.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/visit_guide
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

var menuscript = 
  '{"*$*": [' +
    '{"atxt": " *(root)* ", "asrc": "https://cyruschuikc.github.io/"},' +
    '{"atxt": " Home ", "asrc": "https://cyruschuikc.github.io/index"}],' +
  '"~": [' +
  '{"lbltxt": "#####", "content": "The more new sections will be add in the future update!\nPlease stay tuned!"}]}';

var menuobj = JSON.parse(menuscript);

/**
var menutable = "<table border='1'><tr><th><a href='" + menuscript["*root"][0].URL + "'>" + menuscript["*root"][0].tagTXT + "</a></th><th><a href='" + menuscript["*root"][1].URL + "'>" + menuscript["*root"][1].tagTXT + "</a></th><th> " + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + " (" + menuscript["other"][0].name + ") " + "</th>" +"</tr></table>";
document.getElementById("menu").innerHTML = menutable;
**/