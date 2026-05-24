/**
Title:  test.js
Author:  cyruschuikc
Source:  https://github.com/cyruschuikc/cyruschuikc.github.io/edit/main/Scripts/JS/test
License:  CC BY-NC 4.0 — https://creativecommons.org/licenses/by-nc/4.0/
**/

const imgFavs = [
  [document.getElementById("fimg1"), document.getElementById("fimg2")],
  [document.getElementById("fimg1").getAttribute('alt'), document.getElementById("fimg2").getAttribute('alt')],
  [document.getElementById("fimg1").getAttribute('src'), document.getElementById("fimg2").getAttribute('src')]
];
const alts = [imgFavs[1][0].toString(), imgFavs[1][1].toString()];
const srcs = [imgFavs[2][0].toString(), imgFavs[2][1].toString()];
const msgs = [
  [
    "'" + alts[0] + "' loaded successful!!!",
    "'" + alts[1] + "' loaded sucessful!!!"
  ],
  [
    "Err.#404(NOT FOUND): '"+alts[0]+"' cannot found / have not exisits!!!\nsrc: "+srcs[0],
   "Err.#404(NOT FOUND): '"+alts[1]+"' cannot found / have not exisits!!!\nsrc: "+srcs[1]
  ]
  ];
imgFavs[0][0].onload = () => {console.log(msgs[0][0])};
imgFavs[0][0].onerror = () => {console.log(msgs[1][0])};
imgFavs[0][1].onload = () => {console.log(msgs[0][1])};
imgFavs[0][1].onerror = () => {console.log(msgs[1][1])};

