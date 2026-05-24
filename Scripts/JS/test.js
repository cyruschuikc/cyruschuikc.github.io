/**
Title:  test.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/test
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

const favlogo = document.getElementById("fimg1");
favlogo.onload = () => {
  console.log("favlogo loaded successful!");
}
favlogo.onerror = () => {
  cosole.log("favlogo onload error!");
}
