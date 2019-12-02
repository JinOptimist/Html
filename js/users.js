$(document).ready(function(){
	$(".close").click(function(){
		$(".popup-block").hide(400);
	});
	
	$(".logo").click(function(){
		$(".popup-block").show(300);
	});
	
	$(".content").on('click', '.spoiler-block .title', function (){
		$(this).closest('.spoiler-block').find('.big-text').toggle(100);;
	});

	$(".content").on('click', '.font-size-add', function(){
		var cardDiv = $(this).closest('.user-card');
		var newSize = getBlockFonsSize(cardDiv) + 2;
		cardDiv.css('font-size', newSize);
	});	
	
	$(".content").on('click', '.font-size-minus', function(){
		var cardDiv = $(this).closest('.user-card');
		var newSize = getBlockFonsSize(cardDiv) - 2;
		cardDiv.css('font-size', newSize);
	});
	
	$(".content").on('click', '.add-tag', function(){
		var userCard = $(this).closest('.user-card');
		addTag(userCard);
	});
	
	$(".content").on('click', '.tag .remove', tagRemove);
	
	$(".content").on('keypress', '.new-tag', function (e) {
		//Enter
		if (e.which == 13) {
			var userCard = $(this).closest('.user-card');
			addTag(userCard);
			return false;
		}
	});

	$(".content").on('click', '.add-user-card', function (){
		var userCard = $('.user-card.template').clone();
		userCard.removeClass('template');
		$('.user-cards').append(userCard);
	});
	
	$(".content").on('click', '.remove-user-card', function (){
		$(this).closest('.user-card').remove();
	});
	
	function addTag(userCard){
		var tagTemplate = $('.tag.template').clone();
		var tagName = userCard.find('.new-tag').val();
		userCard.find('.new-tag').val('');
		tagTemplate.find('.tag-name').text(tagName);
		userCard.find('.tag-block').append(tagTemplate);
		tagTemplate.show(1000);
		tagTemplate.removeClass('template');
		tagTemplate.find('.remove').click(tagRemove);
	}
	
	function tagRemove(){
		$(this).closest('.tag').remove();
	}
	
	function getBlockFonsSize(someBlock){
		//"16px"
		var curentFontSizeText = someBlock.css('font-size');
		//16
		var curentFontSizeNumber = curentFontSizeText.substr(0, curentFontSizeText.length - 2) - 0;
		return curentFontSizeNumber;
	}
});










