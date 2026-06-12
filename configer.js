// web icon configs
const icn = document.querySelector("link[rel='icon']");
icn.setAttribute("href", "Resources/fav/imgFav_standard.png");

// web fav configs
const fav = document.querySelector("img[id='site-fav']");
fav.setAttribute("src", "Resources/fav/imgFav_standard.png");

// web logo configs
const logo = document.querySelector("img[id='site-logo']");
logo.setAttribute("src", "Resources/fav/imgFav_standard(revise).png");

const strings = [];

// function to read xml file(s)
function readXML(url){
  fetch(url)
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");

      if(url === "Resources/xml/strings.xml"){
        const sargs = xmlDoc.getElementsByTagName("string");
        const contributors = xmlDoc.getElementsByTagName("author");

        for(let i=0; i<sargs.length; i++){
          strings.push(sargs[i].textContent.trim());
          console.log(strings[i]);  // log coordination
        }

        if(strings.length > 0){
          document.title = strings[0];
          document.getElementById("web_name").innerHTML = document.title;

          const webDesc = document.querySelector("meta[name='description']");
          if(webDesc && strings[1]) webDesc.setAttribute("content", strings[1]);

          document.getElementById("abst").innerHTML = "The.Blog";
          document.getElementById("absc").innerHTML = strings[2];
        }

        if(contributors.length > 0){
          const authorMeta = document.querySelector("meta[name='author']");
          if(authorMeta) authorMeta.setAttribute("content", contributors[0].textContent.trim());
        }
      }
    })
    .catch(error => console.error("Error reading XML:", error));
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
readXML("Resources/xml/strings.xml");
