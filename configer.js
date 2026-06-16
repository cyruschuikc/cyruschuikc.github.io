// web icon configs
const icn = document.querySelector("link[rel='icon']");
icn.setAttribute("href", "Resources/fav/imgFav_standard.png");

// web fav configs
const fav = document.querySelector("img[id='site-fav']");
fav.setAttribute("src", "Resources/fav/imgFav_standard.png");

// web logo configs
const logo = document.querySelector("img[id='site-logo']");
logo.setAttribute("src", "Resources/fav/imgFav_standard(revise).png");

const strings = new Array();
const sections = new Array();

// function to read xml file(s)
function readXML(url){
  fetch(url)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      // check if prarmeter parsed "Resources/xml/strings.xml"
      if(url === "Resources/xml/strings.xml"){
        const sargs = xmlDoc.getElementsByTagName("string");
        const contributors = xmlDoc.getElementsByTagName("author");

        for(let i=0; i<sargs.length; i++) strings.push(sargs[i].textContent.trim());

        if(strings.length > 0){
          document.title = strings[0];
          document.getElementById("web_name").innerHTML = document.title;

          const webDesc = document.querySelector("meta[name='description']");
          if(webDesc && strings[1]) webDesc.setAttribute("content", strings[1]);

          document.getElementById("abst").innerHTML = "The.Blog";
          document.getElementById("absc").innerHTML = strings[2];
          document.getElementById("welstate").innerHTML = `${strings[3]}<br><br>${strings[4]}<br><br>`;
        }

        if(contributors.length > 0){
          const authorMeta = document.querySelector("meta[name='author']");
          if(authorMeta) authorMeta.setAttribute("content", contributors[0].textContent.trim());
        }
      }

      // check if parameter parsed "Resources/xml/visiteguide.xml"
      if(url === "Resources/xml/visiteguide.xml")
      {
        const aargs = document.getElementsByTagName("url");
        const atxts = document.getElementByTagName("txt");
        const acs = document.getElementByTagName("desc");
        for (let i=0; i<aargs.length; i++)
        {
          const sectArg = {hyperlink: aargs[i], hypertext: atxts[i], desc: acs[i]};
          sections.push(sectArg.textContent.trim());
          console.log(sections[i]);
        }
        console.log(sections);
        const menuContext = "";
        for(let i=0; i<sections.length; i++)
        {
          menuContext += `<td><a href="${sections[i].hyperlink}" title="${sections[i].desc}">${sections[i].hypertext}</a></td>`;
          console.log(menuContext);
        }
        // write menu context to the menu body
      }
    })
    .catch(error => console.log("Error reading XML:", error));
}

// check figures loaded & alternated
window.onload = () => {
  console.log("Website onload...");
  console.log(icn);   // link element (no onload)
  fav.onload = () => console.log("Fav loaded:", fav);
  logo.onload = () => console.log("Logo loaded:", logo);
  console.log("Website onloaded!!!");
  console.log(`Welcome to ${document.title} !!!`);
};

readXML("Resources/xml/strings.xml");  // read strings.xml
