$(document).ready(function () {

    $('.cards').on('click', '.button_galka', function () {
        $(this).closest('.formcards').find('.formcardName').css('font-size', '18px').css('color', 'red');

    });

    $('.cards').on('click', '.button_arrow', function () {
        $(this).closest('.formcards').find('.formcardName').css('font-size', '16px').css('color', 'black');
    });

    $('.img-block').click(function () {
        $(this).toggleClass('full-view')
    });

    $('.cards').on('click', '.story_spoiler', function () {
        $(this).closest('.story').find('.story_text').toggle('slow');
    });

    $('.cards').on('click', '.icon-delete', function () {
        $(this).closest('.hobby').remove();
    });

    $('.popup').on('click', '.icon-delete', function () {
        $(this).closest('.popup').hide();
    });

    $('.hmain').on('click', '.hlogo', function () {
        $('.popup').show();
    });

    $('.cards').on('click', '.button_delete', function(){
        $(this).closest('.formcards').remove();
    });

    
    $('.cards').on('click', '.button-for-add-card', function(){
        var newUser = $('.formcards.card-template').clone();
        newUser.removeClass('card-template');

        var newName = $('.for_write.name').val();
        newUser.find('.name').text(newName);

        var newSecondname = $('.for_write.secondname').val();
        newUser.find('.secondname').text(newSecondname);

        var newSex = $('.for_write.sex').val();
        newUser.find('.sex').text(newSex);

        var newAge = $('.for_write.age').val();
        newUser.find('.age').text(newAge);

        var newCountry = $('.for_write.country').val();
        newUser.find('.country').text(newCountry);

        $('.cards').append(newUser);
    });
    


    $('.cards').on('click', '.button_write', function(){
        var newText = $(this).closest('.formcards');
        addTag(newText);
    });

    $('.cards').on('keypress', '.for_write', function (e){
        if (e.which == 13) {
            var newText = $(this).closest('.formcards');
            addTag(newText);
            return false;
        }
    });

    function addTag(newText){
         	var newTemplate = $('.hobby.template').clone();
         	var newName = newText.find('.for_write').val();
         	newText.find('.for_write').val('');
         	newTemplate.find('.onlyText').text(newName);
         	newText.find('.user_interest').append(newTemplate);
         	newTemplate.show(1000);
         	newTemplate.removeClass('template');
    };

        // function addTag(userCard){
         	/*var tagTemplate = $('.tag.template').clone();
         	var tagName = userCard.find('.new-tag').val();
         	userCard.find('.new-tag').val('');
         	tagTemplate.find('.tag-name').text(tagName);
         	userCard.find('.tag-block').append(tagTemplate);
         	tagTemplate.show(1000);
         	tagTemplate.removeClass('template');
         	tagTemplate.find('.remove').click(tagRemove);
    
*/

    
    // https://github.com/JinOptimist/Html/blob/master/users.html

});
