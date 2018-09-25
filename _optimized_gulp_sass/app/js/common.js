
$(".lang-ru").click(function() {
	$(".lang-ru").addClass('active');
	$('.lang-en').removeClass('active');
});

$(".lang-en").click(function() {
	$(".lang-ru").removeClass('active');
	$('.lang-en').addClass('active');
});


var slickOptions = {
	centerMode: false,
	infinite: false,
	initialSlide: 1,
	responsive: [
	{
      breakpoint: 19200,
      settings: {
      	slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow:"<b class='arrow-left'>&#10094</b>",
		nextArrow:"<b class='arrow-right'>&#10095</b>",
      }
    },
    {
      breakpoint: 830,
      settings: {
      	slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow:"<b class='arrow-left'>&#10094</b>",
		nextArrow:"<b class='arrow-right'>&#10095</b>",
      }
    },
    {
      breakpoint: 580,
      settings: {
      	slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:"<b class='arrow-left'>&#10094</b>",
		nextArrow:"<b class='arrow-right'>&#10095</b>",
      }
    },
    ]
}


$('.slick').slick(slickOptions);

$(".audit-btn-one").click(function() {
	$(".audit-step-one span").css('color', '#599edf');
	$('.audit-step-one i').css('color', '#76c665');
	$('.audit-step-one p').css('background-color', '#f47032');
});

$(".audit-btn-two").click(function() {
	$(".audit-step-two span").css('color', '#599edf');
	$('.audit-step-two i').css('color', '#76c665');
	$('.audit-step-two p').css('background-color', '#f47032');
});

$(".audit-btn-three").click(function() {
	$(".audit-step-three span").css('color', '#599edf');
	$('.audit-step-three i').css('color', '#76c665');
	$('.audit-step-three p').css('background-color', '#f47032');
});

$(".audit-btn-four").click(function() {
	$(".audit-step-four span").css('color', '#599edf');
	$('.audit-step-four i').css('color', '#76c665');
	$('.audit-step-four p').css('background-color', '#f47032');
});

