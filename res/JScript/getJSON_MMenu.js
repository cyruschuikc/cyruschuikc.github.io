$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: '/application/JQreader/getMainMenu.php',
    dataType: 'json',
    success: function(menu){
      pageTitle = menu.page;
      hyperlink = menu.tab;
      homepage = hyperlink[0];
      otherPages = []; otherPageUri = [];
      for (i=1, i<hyperlink.length+1; i++){
        //……
      }
    }
  });
})