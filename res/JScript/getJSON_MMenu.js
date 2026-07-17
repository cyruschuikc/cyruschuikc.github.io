$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: '/application/getMainMenu.php',
    dataType: 'json',
    success: function(menu){
      pageTitle = menu.page;
      hyperlink = menu.link;
    }
  });
})