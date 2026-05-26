/**
var menuTXT = '{"*root": [' + 
  '{"tagTXT": "*", "name": "root page", "URL": "https://cyruschuikc.github.io/", "domain": "cyruschuikc.github.io", "protocol": "HTTPS"},' + 
  '{"tagTXT": "Home", "name": "home page", "URL": "https://cyruschuikc.github.io/index.html", "domain": "cyruschuikc.github.io/index.html", "protocol": "HTTPS"}' + 
  '], "other": ['+
  '{"tagTXT": "?", "name": "coming soon...", "URL": "https://github.com/cyruschuikc/", "domain": "github.com/cyruschuikc", "protocol": "HTTPS"}]}';
var menuscript = JSON.parse(menuTXT);
var menutable = "<table border='1'><tr><th><a href='" + menuscript["*root"][0].URL + "'>" + menuscript["*root"][0].tagTXT + "</a></th><th><a href='" + menuscript["*root"][1].URL + "'>" + menuscript["*root"][1].tagTXT + "</a></th><th> " + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + menuscript["other"][0].tagTXT + " (" + menuscript["other"][0].name + ") " + "</th>" +"</tr></table>";
document.getElementById("menu").innerHTML = menutable;
**/