$(document).ready(function(){
	$('.spoiler-block .title').click(function (){
		$(this).closest('.spoiler-block').find('.big-text').toggle(100);;
	});
	
	$('.font-size-add').click(function(){
		var cardDiv = $(this).closest('.user-card');
		var newSize = getBlockFonsSize(cardDiv) + 2;
		cardDiv.css('font-size', newSize);
	});
	
	$('.font-size-minus').click(function(){
		var cardDiv = $(this).closest('.user-card');
		var newSize = getBlockFonsSize(cardDiv) - 2;
		cardDiv.css('font-size', newSize);
	});
	
	$('.add-tag').click(function(){
		var userCard = $(this).closest('.user-card');
		addTag(userCard);
	});
	
	$('.tag .remove').click(tagRemove);
	
	$('.new-tag').keypress(function (e) {
		//Enter
		if (e.which == 13) {
			var userCard = $(this).closest('.user-card');
			addTag(userCard);
			return false;
		}
	});

	$('.add-user-card').click(function (){
		var userCard = $('.user-card.template').clone();
		userCard.removeClass('template');
		$('.content').append(userCard);
	});
	
	$('.remove-user-card').click(function (){
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










