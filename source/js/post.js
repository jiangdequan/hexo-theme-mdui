$(document).ready(function () {
    function scrollToTitle() {
        var scrolledHeight = $(window).scrollTop();
        $('html,body').animate({ scrollTop: scrolledHeight - 60 }, 0);
    }

    // fix content display when click toc
    $("#simple-toc a").mouseup(function() {
        setTimeout(scrollToTitle, 100);
        return true;
    });

    // auto focus toc when scrolling
    var segs = $(".simple-content :header");
    var tocs = $(".post-toc-link");

    var appbar = $(".simple-appbar");
    var toc = $("#simple-toc");
    var handled = false;
    $(window).bind("scroll", function() {
        var top = $(this).scrollTop();
        if (top > 150) {
            if (!handled) {
                appbar.addClass("mdui-appbar");
                toc.removeClass("simple-toc");
                toc.addClass("simple-toc-scroll");
                $("#simple-header-title small").text($("h1").text());
            }
            handled = true;
        } else {
            if (handled) {
                $("#simple-header-title small").text("");
                appbar.removeClass("mdui-appbar");
                toc.removeClass("simple-toc-scroll");
                toc.addClass("simple-toc");
                $("#simple-header-title small").text("");
            }
            handled = false;
        }
        var scrollTop = top + 30;
        var topSeg = null;
        for (var idx in segs) {
            var seg = segs[idx];
            if (seg.offsetTop > scrollTop) {
                continue;
            }
            if (!topSeg) {
                topSeg = seg;
            } else if (seg.offsetTop >= topSeg.offsetTop) {
                topSeg = seg;
            }
        }
        if (topSeg) {
            tocs.removeClass("toc-active");
            var link = $(topSeg).text();
            tocs.each(function() {
                if ($(this).find("span").text() === link) {
                    $(this).addClass("toc-active");
                }
            });
        }
    });

    $("#simple-switch").click(function() {
        var on = $("#simple-switch input").prop("checked");
        if (on) {
            $("#simple-alipay").hide();
            $("#simple-wechat").show();
        } else {
            $("#simple-alipay").show();
            $("#simple-wechat").hide();
        }
    });
});