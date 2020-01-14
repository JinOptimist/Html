$(document).ready(function(){
	/**$$('img').click(function(){ копирует без функций juvascript**/
	$(".center-table.down").on('click', 'img', function (){
		$(this).remove();
	});
	
	
	/**$$('.key-two.red').click(function(){ копирует без функций juvascript**/
	$(".center-table.down").on('click', '.key-down.red-down', function (){
		$(this).parent().parent().css('font-size',30);
	});
	
	
	/**$$('.key-two.whait').click(function(){ копирует без функций juvascript**/
	$(".center-table.down").on('click', '.key-down.white-down', function (){
		$(this).parent().parent().css('font-size',16);
	});
	
	
	/**$$('.key-two.yellow').click(function(){ копирует без функций juvascript**/
	$(".center-table.down").on('click', '.key-down.yellow-down', function (){
		$(this).parent().parent().remove();
	});
	
	
	/**$$('.down-down').click(function(){ копирует без функций juvascript**/
	$(".center-table.down").on('click', '.down-down', function (){
		$(this).closest('.table-round').find('.up-up').toggle(3000);
	});
	
	
	$(".center-table.Ferrari").on('click', '.down-down', function (){
		$(this).closest('.Ferrari-table').find('.up-up').toggle(3000);
	});
	
	
	/**$('.user-new').click(function (){   копирует без функций juvascript**/
	$(".center-table.down").on('click', '.user-new', function (){	
		var userCard = $('.user-one-main.template').clone();
		userCard.removeClass('template');
		$('.center-table.down').append(userCard);
	});
	
	
	$('.add-word').click(function(){
		var userCard = $(this).closest('.user-one-main');
		addTag(userCard);
	});
	
	$('.word-box .remove').click(tagRemove);
	
	$('.text-line').keypress(function (e) {
		//Enter
		if (e.which == 13) {
			var userCard = $(this).closest('.user-one-main');
			addTag(userCard);
			return false;
		}
	});
		
	function addTag(userCard){
		var tagTemplate = $('.word-box.template').clone();
		var tagName = userCard.find('.text-line').val();
		userCard.find('.text-line').val('');
		tagTemplate.find('.word-box-name').text(tagName);
		userCard.find('.word').append(tagTemplate);
		tagTemplate.show(1000);
		tagTemplate.removeClass('template');
		tagTemplate.find('.remove').click(tagRemove);
	}
	
	function tagRemove(){
		$(this).closest('.word-box').remove();
	}
	
	$('.close').click(function(){
		$(this).closest(".popup").hide(2000);
	});	
		
	$('.future').click(function(){
		$(".popup").show(2000);
	});	
	
/*-------------для галереи------------*/
	$('.image').click(function(){
		$(this).toggleClass("full-view");
	});	
/*------------------------------------*/
});