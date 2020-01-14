$(document).ready(function(){
	
	$('.popcorn').hide(1500);
	
	$('.close').click(function(){
		$('.popcorn').hide(500);
	});
	
	$('.site-header2').click(function(){
		$('.popcorn').show(2000);
	});
	

	
	$('.image').click(function (){
		$(this).toggleClass('full-view');
	});
	
	$('td').click(function (){
		$(this).toggleClass('red');
	});

	$(".spoiler-block .title").click(function (){
		$(this).closest('.spoiler-block').find('.big-text').toggle(100);;
	});

});