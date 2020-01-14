$(document).ready(function() {


    $('.name').click(function() {
        $('.popup-block').show();
    });



    $('.popup-close').click(function() {
        $(this).closest('.popup-block').hide();
    });

    $('.delete').click(function() {
        $(this).parent().parent().remove();
    });

    $('.plus').click(function() {
        $(this).parent().parent().css('font-size', 30);
    });

    $('.minus').click(function() {
        $(this).parent().parent().css('font-size', 16);
    });

    $('img').click(function() {
        $(this).closest('.container-image').toggleClass('fullSize');
    })

    $('.spoiler-hidden').click(function() {
        $(this).closest('.spoiler').find('.spoiler-main').toggle();
    })

    $('.newuser').click(function() {
        var addNewUser = $('.new-user.template').clone();
        addNewUser.removeClass('template');
        $('.content').append(addNewUser);

    })

    $(".content").on('click', '.add-tag', function() {
        var newTag = $(this).closest('.user');
        addTag(newTag);
    });

    $(".content").on('click', '.tag .remove', tagRemove);

    function tagRemove(evt) {
        $(this).closest('.tag').remove();
        evt.preventDefault();

    }

    function addTag(newTag) {
        var tagTemplate = $('.tag.template').clone();
        var tagName = newTag.find('.newtext').val();
        newTag.find('.newtext').val('');
        tagTemplate.find('.tag-name').text(tagName);
        newTag.find('.tags').append(tagTemplate);
        tagTemplate.show(1000);
        tagTemplate.removeClass('template');
        tagTemplate.find('.remove').click(tagRemove);
    }
});