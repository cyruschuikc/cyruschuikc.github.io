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
      for (i=1, i<hyperlink.length+1; i++){
        otherPages[] = hyperlink[i];
        console.log(otherPages[i-1]);
      } console.log(otherPages);

      page = []; pageUri = [];
      for(i=0; i<hyperlink.length; i++){
        if(i==0){
          page[] = homepage.text;
          pageUri[] = homepage.link + homepage.query;
        } else{
          page[] = otherPages[i].text;
          pageUri[] = otherPages[i].link + otherPages[i].query;
        }
      }
    }
  });
})