$(document).ready(function() {
    function adjustViewport() {
        var height = $(window).height();
        $('body').css('height', height + 'px');
    }
    adjustViewport();
    $(window).resize(adjustViewport);
});
