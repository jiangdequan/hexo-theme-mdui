$(document).ready(function () {
    var inst = new mdui.Drawer('#simple-menu', { "overlay": true });

    var alreadyShow = false;

    $('#simple-toggle-menu').click(function () {
        inst.toggle();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 240 && !alreadyShow) {
            $('#simple-scroll-btn').slideDown(400);
            alreadyShow = true;
        }
        if (scrollTop < 240 && alreadyShow) {
            $('#simple-scroll-btn').slideUp(500);
            alreadyShow = false;
        }
    });

    // scroll to top
    $('#simple-scroll-btn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 100);
        // $(window).scrollTop(0);
        $('#simple-scroll-btn').slideUp(500);
        alreadyShow = false;
    });

    $('.simple-pagination span').addClass('mdui-btn');
    $('.simple-pagination a').addClass('mdui-btn');
});