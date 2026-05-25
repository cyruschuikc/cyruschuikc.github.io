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
  if(rights[i]=="\"")
    tmp += rights[i];
  else if(rights[i]=="{"||rights[i]=="}"||rights[i]==":"||rights[i]==","){
    args[count] = tmp;
    count++;
    tmp = rights[i];
    args[count] = tmp;
    count++;
    tmp = "";
  }
  else if(rights[i]==" "){
    args[count] = tmp;
    count++;
    tmp = "";
  }
  else
    tmp += rights[i];
};
var txtRight = "All copyrights is belongs to ";
for (i = 0; i < args.length; i++){
  if(args[i]!='"' && args[i]!="{" && args!="}" && args[i]!=" " && args[i]!="," && args[i]!=":")
    txtRight += args[i];
  if(i==args.length)
    txtRight += "\n";
}
document.getElementById("right").innerHTML = txtRight;
