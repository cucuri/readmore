$(".submenu").hide();
$(".gnb_wrap li").mouseenter(function(){
    $(".submenu").stop().slideDown()
})
$("nav").mouseleave(function(){
    $(".submenu").stop().slideUp()
})


function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}

$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});


