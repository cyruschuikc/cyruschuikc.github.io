// web icon configs
const icn = document.querySelector("link[rel='icon']");
icn.setAttribute("href", "Resources/fav/imgFav_standard.png");

// web logo configs
const fav = document.querySelector("img[id='site-fav']");
fav.setAttribute("src", "Resources/fav/imgFav_standard(revis).png");

// function to read xml file(s)
function readXML(url){
  fetch(url).then(response => response.text()).then(xmlString => 
    {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      // read string resources
    if(url=="Resources/xml/strings.xml")
    {
      const sargs = xmlDoc.getElementByTagName("string");
      const contributors = xmlDoc.getElementByTagName("author");
      console.log(sargs);  // forcing log cordination
      const strings = new Array();
      console.log(strings);  // forcing log cordination
      for(let i=0; i<strings.length; i++)
      {
        strings.push(sargs[s].textContent.toString());
        console.log(strings[s]);  // forcing log cordination
        console.log(strings);  // forcing log cordination 
      } 
      console.log(strings); // forcing log cordination
      if(strings.length > 0)
      {
        if(document.title) document.title = strings[0];
        const webDesc = document.querySelector("meta[name='description']");
        if(webDesc) webDesc.setAttribute("content", strings[1]);
        document.getElementById("abst").innerHTML = "The.Blog";
        document.getElementById("absc").innerHTML = strings[2];
      }
      if(contributors.length > 0)
      {
        const author = document.querySelector("meta[name='author']");
        author.setAttribute("content", contributors[0].textContent.toString());
      }
    }
  })
}

// check figures loaded & alternated
window.onload = () => 
  {
    console.log("Website onload..."); // forcing log cordination 
    icn.onload = () => 
      {
        console.log(icn); // forcing log cordination 
      };
    fav.onload = () => 
      {
        console.log(fav); // forcing log cordination 
      };
    };
