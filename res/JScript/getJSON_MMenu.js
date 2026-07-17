$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://cyruschuikc.infinityfree.io/application/JQreader/getMainMenu.php',
    dataType: 'json',
    success: function(menu){
      const hyperlink = menu.tab;
      const page = hyperlink.map(h => h.text);
      const pageUri = hyperlink.map(h => h.link + h.query);

      // for debug
      console.log(page);  console.log(pageUri);
      //---
    }
  });
})
