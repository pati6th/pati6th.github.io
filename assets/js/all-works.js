$(document).ready(function(){

var len = $('.search-result-list>li').length;

  $('.search-result-list').each(function() {
    var ul = $(this);
    
    var liArr = ul.children('li');
    
    liArr.sort(function(){
      var temp = parseInt(Math.random()*len);
      var temp1 = parseInt(Math.random()*len);
      return temp1-temp;
    }).appendTo(ul);
  });

});