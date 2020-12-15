$(document).ready(function(){
	$('#works, #works-category, #class, #class-category, .works-list, .class-list').hover(function(){
      $('.blur-div').show();
  },function(){
  	$('.blur-div').hide();
  });
});
