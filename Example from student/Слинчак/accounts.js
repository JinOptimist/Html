$(document).ready(function (){
	$('.Profile1 img').click(function(){
			$(this).remove();
	});
	
	$('.close').click(function(){
		$(".popup-block").hide();
	});
	
		$(".table").on('click', '.text-write .title', function (){
			$(this).closest('.text-write').find('.big-text').toggle(100);;
		});
	
	
	$(".line2").on('click', '.plus', function(){
		var cardDiv = $(this).closest('.centre');
		var newSize = getBlockFonsSize(cardDiv) + 2;
		cardDiv.css('font-size', newSize);
	});	
	
	function getBlockFonsSize(someBlock){
		//"16px"
		var curentFontSizeText = someBlock.css('font-size');
		//16
		var curentFontSizeNumber = curentFontSizeText.substr(0, curentFontSizeText.length - 2) - 0;
		return curentFontSizeNumber;
	}
	
	$(".line2").on('click', '.minus', function(){
		var cardDiv = $(this).closest('.centre');
		var newSize = getBlockFonsSize(cardDiv) - 2;
		cardDiv.css('font-size', newSize);
	});	
	
	$(".line2").on('click', '.remove', function (){
		$(this).closest('.centre').remove();
	});
	
});
	$(".line2").on('click', '.add-tag', function(){
		var userCard = $(this).closest('.centre');
		addTag(centre);
	});
	
	$(".line2").on('click', '.my-cool-button .remove2', tagRemove);
	
	$(".line2").on('keypress', '.new-tag', function (e) {
		//Enter
		if (e.which == 13) {
			var userCard = $(this).closest('.centre');
			addTag(centre);
			return false;
		}
	});

	$(".line2").on('click', '.add-user-card', function (){
		var userCard = $('.centre.template').clone();
		userCard.removeClass('template');
		$('.line2').append(userCard);
	});
	function tagRemove(){
		$(this).closest('.tag').remove();
	}
	
	
	
	