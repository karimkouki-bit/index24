/*global $*/
$(function () {
    'use strict';
    
    // Adjust Header Height
    
    $(".header").height($(window).height());
    
    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    
    $(".bx-wrapper").each(function () {
        $(this).css("paddingTop", ($(window).height() - (".bx-wrapper li").height()) / 2);
    });
    // Add active class item
    $(".links li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // Adjust Bxslider item  center
    
    $(".bx-wrapper").each(function () {
        $(this).css("paddingTop", ($(window).height() - ("bx-wrapper li").height()) / 2);
    });
    // Trigger bxslider
    
    $(".bxslider").bxSlider({
        Pager: false
    });
    
    // smooth scroll to div
    $(".links li a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    
    // Our Auto Slider Code
    
    (function autoslider() {
     
        $(".slider .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    
                    autoslider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    
                    autoslider();
                });
            }
        });
        
    }());
    
    // Trigger mixitup
    
    $("#Container").mixItUp();
    
    // adjust shuffle links
    
    
    $(".shuffle li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    // trigger nice scroll
    $("html").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c",
        cursorborderradius: 0
    });
});