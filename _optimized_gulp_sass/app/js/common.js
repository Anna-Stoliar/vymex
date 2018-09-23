
$(".lang-ru").click(function() {
	$(".lang-ru").addClass('active');
	$('.lang-en').removeClass('active');
});

$(".lang-en").click(function() {
	$(".lang-ru").removeClass('active');
	$('.lang-en').addClass('active');
});

var w = document.getElementById("logo").offsetWidth;

$(document).ready(function() {
	if (window.innerWidth < 831) {
		$(".header-auth").css("margin-left", w);
	}
});

$(window).resize(function(){
	if (window.innerWidth < 831) {
		$(".header-auth").css("margin-left", w);
	}
	if (window.innerWidth > 830) {
		$(".header-auth").css("margin-left", "0");
	}
});