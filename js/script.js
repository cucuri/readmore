$(".submenu").hide();
$(".gnb_wrap li").mouseenter(function(){
    $(".submenu").stop().slideDown()
})
$("nav").mouseleave(function(){
    $(".submenu").stop().slideUp()
})