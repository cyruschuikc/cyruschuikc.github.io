$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: '/application/JQreader/getMainMenu.php',
    dataType: 'json',
    success: function(menu){
      pageTitle = menu.page;
      hyperlink = menu.tab;

      homepage = hyperlink[0];
      console.log(homepage);

      otherPages = [];
      for (let i=1; i<hyperlink.length+1; i++) {
        otherPages[] = hyperlink[i];
        console.log(otherPages[i-1]);
      }
      console.log(otherPages);

      page = []; pageUri = [];
      for(i=0; i<hyperlink.length; i++){
        if(i==0){
          page[] = homepage.text;
          console.log(page[0]);
          pageUri[] = homepage.link + homepage.query;
          console.log(pageUri[0]);
        } 
        else{
          page[] = otherPages[i].text;
          console.log(page[i]);
          pageUri[] = otherPages[i].link + otherPages[i].query;
          console.log(pageUri[i]);
        }
      }
      console.log(page);  console.log(pageUri);
    }
  });
})
