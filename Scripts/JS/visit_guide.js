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

var menutags = new Array(menuobj["*$*"].length + menuobj["~"].length);
var hrefs = new Array(menutags.length -1);
var msgs = new Array(menuobj["~"].length);

var c1 = 0; //counter1 ...
var c2 = 0; //counter2 ...
var c3 = 0; //counter3 ...
var c4 = 0; //counter4 ...

for (i=c1; i<menutags.length; c1++){
  if(c1>=2){
    menutags[i] = menuobj["~"].lbltxt[c2];
    c2++;
  }
  else
    menutags[i] = menuobj["*$*"].atxt[i];
}
c1 -= c2;

for (i=c3; i<hrefs.length; c3++)
  hrefs[i] = menuobj["*$*"].asrc[i];

for (i=c4; i<msgs.length; c4++)
  msgs[i] = menuobj["~"].content[i];
