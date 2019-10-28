$(document).ready(function (){
	$('.tag .remove').click(onRemoveClick);
	
	$('.add-tag').click(function(){
		var newTagName = $('.new-tag').val();
		var span = $('<span>');
		span.addClass('tag');
		span.text(newTagName);
		
		var removeButton = $('<a>');
		removeButton.text('X');
		removeButton.addClass('remove');
		removeButton.attr('href', '#');
		span.append(removeButton);
		
		removeButton.click(onRemoveClick);
		
		$('.tag-block').append(span);
	});
	
	
	function onRemoveClick(){
		$(this).parent().remove();
	}
});