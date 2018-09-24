
$(".lang-ru").click(function() {
	$(".lang-ru").addClass('active');
	$('.lang-en').removeClass('active');
});

$(".lang-en").click(function() {
	$(".lang-ru").removeClass('active');
	$('.lang-en').addClass('active');
});

