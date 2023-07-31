$(document).ready(function() {
    if($(window).width() <= 768) {
        $('head meta[name=viewport]').remove();
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />');
    } else {
        $('head meta[name=viewport]').remove();
        $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    }
    $(window).resize(function() {
        if($(window).width() <= 768) {
            $('head meta[name=viewport]').remove();
            $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />');
        } else {
            $('head meta[name=viewport]').remove();
            $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        }
    });
});
