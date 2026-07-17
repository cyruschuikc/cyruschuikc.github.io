$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: '/application/JQreader/getMainMenu.php',
    dataType: 'json',
    success: function(menu){
      pageTitle = menu.page;
      hyperlink = menu.tab;
      homepage = hyperlink[0].link + hyperlink[0].query;
      otherPages = []; otherPageUri = [];
    }
  });
})