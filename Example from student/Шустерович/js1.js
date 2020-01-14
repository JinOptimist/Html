$(document).ready(function(){
	$('.close').click(function(){
		$('.popup-block-show-hide').hide(500);
	});
	
	$('.logo').click(function(){
		$('.popup-block-show-hide').show(1000);
	});
	
	$(".spoiler-block .title").click(function (){
		$(this).closest('.spoiler-block').find('.big-text').toggle(100);;
	});
	
	$('.image').click(function (){
		$(this).toggleClass('full-view');
	});
	
});