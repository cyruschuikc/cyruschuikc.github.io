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
var rights = '{"root": "cyruschuikc", "startat": "2026-May-25", "right": "supervisory", "endat": "---"}';
// var obj = JSON.parse(rights); !!!--ERROR CRASH CATCHED--!!!
var args = new Array();
var tmp = "";
var count = 0;
for (i = 0; i < rights.length; i++){
  if(rights[i]!=" "){
    if(rights[i]!="\""){
      args[count] = tmp;
      tmp = "";
      count++;
    }
    else{
      if(rights[i]=="\"")  
        tmp += rights[i];
      else {
        tmp += rights[i];
      }
    }
  }
  else{
    args[count] = tmp;
    tmp = "";
    count++;
  }
}
