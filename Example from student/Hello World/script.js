/* popap*/
$(document).ready(function() {
  $(".close").click(function() {
    $(".popup-block").hide(5000);
  });

  $(".sponsor").click(function() {
    $(".popup-block").show(2000);
  });

  $("#foto .dogs").click(function() {
    $(this).toggleClass('full-image');
  });
});


/*oткрывающаяся строчка в карточке*/
$(document).ready(function(){
	$(".content").on('click', '.spoiler-block .title', function (){
		$(this).closest('.spoiler-block').find('.big-text').toggle(100);;
	});
});



/*увеличение картинки с енотом*/
$(document).ready(function(){
	
	$('.image').click(function (){
		$(this).toggleClass('full-view');
	});
	
	$('td').click(function (){
		$(this).toggleClass('red');
	});
	
});


/*Кто молодец- я молодец*/
$(function(){
  $('.minimized').click(function() {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function() {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
/*загорается глаз*/

