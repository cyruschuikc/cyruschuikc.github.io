document.title = "#@CCKCs.NET Blog io HK"; 
const favTitle = document.title;

document.getElementById("thTitle").textContent = favTitle;
document.getElementById("absTitle").textContent = "The•Blog";
document.getElementById("welstate-title").innerHTML = `Welcome to visit ${favTitle}<br>!!!`;
document.getElementById("welstate-content").innerHTML = 
  `'${favTitle}' is an individualised creative website blog...<br><br>Also the 'Past', 'Current', and the 'Unknowable Wishing Future' ... (--to be continue--)`;

window.onload = () => console.log(`Welcome to '${document.title}' !!!`);

const rights = {
  root: "cyruschuikc",
  startat: "2026-May-25",
  right: "supervisory",
  parameter: " ~ ",
  endat: "---"
};
document.getElementById("right").innerHTML =
  `&copy; All copyrights belongs to ${rights.root} | ${rights.startat}${rights.parameter}${rights.endat}<br>`;

// XML menu reader
function readMenuXML(url) {
  fetch(url)
    .then(res => res.text())
    .then(str => {
      const xmlDoc = new DOMParser().parseFromString(str, "application/xml");
      const atxt = xmlDoc.getElementsByTagName("tagtxt");
      const asrc = xmlDoc.getElementsByTagName("href");
      const aevent = xmlDoc.getElementsByTagName("onclick");

      let menuobj = [];
      for (let i = 0; i < atxt.length; i++) {
        const text = atxt[i].textContent;
        const link = asrc[i].textContent;
        menuobj.push(
          `<th><a href="${link}">${text}</a></th>`
        );
        if(i>2){
          const event = aevent[i-3].textContent;
          menuobj.push(
          `<th><button onclick="alert(${event})">${text}</button></th>`
        );
        }
      }
      document.getElementById("menu").innerHTML = `<table border="1"><tr>${menuobj.join("")}</tr></table>`;
    })
    .catch(err => {
      console.error("read XML failed:", err);
      document.getElementById("menu").textContent = "Menu loading failed.";
    });
}
readMenuXML("visitguide.xml");

// XML abstract reader
function readAbstractXML(url) {
  fetch(url)
    .then(res => res.text())
    .then(str => {
      const xmlDoc = new DOMParser().parseFromString(str, "application/xml");
      const tvID = xmlDoc.getElementsByTagName("id");
      const tvContent = xmlDoc.getElementsByTagName("content");

      let abstractobj = [];
      for (let i = 0; i < tvID.length; i++) {
        abstractobj.push(`<p id="${tvID[i].textContent}">${tvContent[i].textContent}</p>`);
      }
      document.getElementById("abstract").innerHTML = abstractobj.join("");
    })
    .catch(err => {
      console.error("read XML failed:", err);
      document.getElementById("abstract").textContent = "Abstract loading failed.";
    });
}
readAbstractXML("Resources/xml/abstract.xml");

const contribution = {
  founder: [{ name: "cyruschuikc", AssignAt: "25th, May, 2026" }]
};