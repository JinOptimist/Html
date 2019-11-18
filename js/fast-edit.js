$(document).ready(function(){
	init();
	
	$(".content").on('click', '.editable .view', function (){
		var editableBlock = $(this).closest('.editable');
		
		var oldValue = editableBlock.find('.view').text();
		editableBlock.find('.edit').find('.newValue').val(oldValue);
		
		editableBlock.find('.view').hide();
		editableBlock.find('.edit').show();
	});
	
	$(".content").on('click', '.editable .edit .icon.add', function (){
		var newValue = $(this).closest('.edit').find('.newValue').val();
		var editableBlock = $(this).closest('.editable');
		editableBlock.find('.view').text(newValue);
		editableBlock.find('.view').show();
		editableBlock.find('.edit').hide();
	});
	
	$(".content").on('click', '.editable .edit .icon.cancel', function (){
		var editableBlock = $(this).closest('.editable');
		editableBlock.find('.view').show();
		editableBlock.find('.edit').hide();
	});
	
	function init(){
		$('.editable .edit').hide();
	}
});










