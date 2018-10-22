$(document).ready(function () {
    function autoMinHeight() {
        var totalHeight = window.screen.availHeight;
        var appbar = $(".mdui-appbar-fixed").height();
        var archiveHeader = $(".simple-archive-header").height();
        var archiveName = $(".simple-archive-name").height();
        var pagination = $(".simple-pagination").height();
        var footer = $("footer").height();
        var offset = 100;
        var minHeight = totalHeight - appbar - archiveHeader - checkHeight(archiveName) - checkHeight(pagination) - footer - offset;
        $(".simple-height").css("min-height", minHeight + "px");
    }

    function checkHeight(height) {
        if (undefined === height || null === height || '' === height) {
            return 0;
        }
        return height;
    }
    // autoMinHeight();

    var appbar = $(".simple-appbar");
    var title = $("#simple-archive-title").text();
    var height = 140;
    if (title === "Archives") {
        height = 90;
    }
    var handled = false;
    $(window).bind("scroll", function() {
        var scrolledHeight = $(window).scrollTop();
        if (scrolledHeight > height) {
            if (!handled) {
                appbar.addClass("mdui-appbar");
                $("#simple-header-title small").text(title);
            }
            handled = true;
        } else {
            if (handled) {
                $("#simple-header-title small").text("");
                appbar.removeClass("mdui-appbar");
                appbar.addClass("simple-appbar");
            }
            handled = false;
        }
    });

    $("#simple-all").click(function() {
        $(".simple-all-links").toggle();
    });
});