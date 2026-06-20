// web icon configs
const icn = document.querySelector("link[rel='icon']");
if(icn) icn.setAttribute("href", "Resources/fav/imgFav_standard.png");

// web fav configs
const fav = document.querySelector("img[id='site-fav']");
if(fav) fav.setAttribute("src", "Resources/fav/imgFav_standard.png");

// web logo configs
const logo = document.querySelector("img[id='site-logo']");
if(logo) logo.setAttribute("src", "Resources/fav/imgFav_standard(revise).png");

const strings = [];
const sections = [];

// function to read xml file(s)
function readXML(url){
  fetch(url)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      // check if parameter parsed "Resources/xml/strings.xml"
      if(url === "Resources/xml/strings.xml"){
        const sargs = xmlDoc.getElementsByTagName("string");
        const contributors = xmlDoc.getElementsByTagName("author");

        for(let i=0; i<sargs.length; i++) strings.push(sargs[i].textContent.trim());

        if(strings.length > 0){
          document.title = strings[0];
          const webName = document.getElementById("web_name");
          if(webName) webName.innerHTML = document.title;

          const webDesc = document.querySelector("meta[name='description']");
          if(webDesc && strings[1]) webDesc.setAttribute("content", strings[1]);

          const abst = document.getElementById("abst");
          if(abst) abst.innerHTML = "The.Blog";

          const absc = document.getElementById("absc");
          if(absc && strings[2]) absc.innerHTML = strings[2];

          const welstate = document.getElementById("welstate");
          if(welstate && strings[3] && strings[4]) {
            welstate.innerHTML = `${strings[3]}<br><br>${strings[4]}<br><br>`;
          }
        }

        if(contributors.length > 0){
          const authorMeta = document.querySelector("meta[name='author']");
          if(authorMeta) authorMeta.setAttribute("content", contributors[0].textContent.trim());
        }
      }

      // check if parameter parsed "Resources/xml/visitguide.xml"
      if(url === "Resources/xml/visitguide.xml"){
        const aargs = xmlDoc.getElementsByTagName("url");
        const atxts = xmlDoc.getElementsByTagName("txt");
        const acs = xmlDoc.getElementsByTagName("desc");

        for (let i=0; i<aargs.length; i++){
          const sectArg = {
            hyperlink: aargs[i].textContent.trim(),
            hypertext: atxts[i].textContent.trim(),
            desc: acs[i].textContent.trim()
          };
          sections.push(sectArg);
          console.log(sections[i]);
        }
        console.log(sections);

        let menuContext = "<tr>";
        for(let i=0; i<sections.length; i++){
          menuContext += `<td><a href="${sections[i].hyperlink}" title="${sections[i].desc}">${sections[i].hypertext}</a></td>`;
        }
        menuContext += "</tr>";

        const menu = document.getElementById("menu");
        if(menu) menu.innerHTML = menuContext;
      }
    })
    .catch(error => console.log("Error reading XML:", error));
}

// check figures loaded & alternated
window.onload = () => {
  console.log("Website onload...");
  console.log(icn);   // link element (no onload)
  if(fav) fav.onload = () => console.log("Fav loaded:", fav);
  if(logo) logo.onload = () => console.log("Logo loaded:", logo);
  console.log("Website onloaded!!!");
  console.log(`Welcome to ${document.title} !!!`);
};

readXML("Resources/xml/strings.xml");   // read strings xml layout src
readXML("Resources/xml/visitguide.xml"); // read menu xml layout src