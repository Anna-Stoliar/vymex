
$(".lang-ru").click(function() {
	$(".lang-ru").addClass('active');
	$('.lang-en').removeClass('active');
});

$(".lang-en").click(function() {
	$(".lang-ru").removeClass('active');
	$('.lang-en').addClass('active');
});

var os = document.getElementById("logo").offsetHeight;
$(document).ready(function() {
	if (window.innerWidth < 1151) {
		$('.top-auth').css('margin-left', os + 40);
	}
});

$(window).resize(function(){
	if (window.innerWidth < 1151) {
		$('.top-auth').css('margin-left', os + 40);
	}
	if (window.innerWidth > 1150) {
		$('.top-auth').css('margin-left', '20px');
	}
});

var slickOptions = {
	centerMode: false,
	infinite: false,
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


function drawl(){
	var canvas = document.getElementById("myCan");
	var ctx = canvas.getContext("2d");
	for (var i = 0; i < 10; i++) {
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(0, 404 - i*46);
		ctx.lineTo(1450, 404 - i*46);
		ctx.strokeStyle = "#1982a9";
		ctx.stroke();
	}
}
drawl();

function drawbg(){
	var canvas = document.getElementById("myCan");
	var ctx = canvas.getContext("2d");
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(0, 450);
		ctx.bezierCurveTo(-8, 463, 4, 439, 19, 432);
		ctx.bezierCurveTo(33, 426, 174, 418, 256, 389);
		ctx.bezierCurveTo(327, 364, 538, 273, 633, 257);
		ctx.bezierCurveTo(695, 241, 832, 256, 892, 292);
		ctx.bezierCurveTo(934, 317, 1066, 354, 1179, 328);
		ctx.bezierCurveTo(1262, 309, 1291, 292, 1336, 241);
		ctx.bezierCurveTo(1368, 205, 1393, 116, 1450, 115);
    	ctx.bezierCurveTo(2000, 2000, 2000, 2000, 1500, 455);
    	ctx.fillStyle = "rgba(0, 174, 239, 0.2)";
    	ctx.fill();
		ctx.stroke();
}
drawbg();

var riskOne = 45;
var riskTwo = 60;
var riskThree = 24;

var canvas = document.getElementById("myCan");
var risk1 = canvas.getContext("2d");
	risk1.lineWidth = 80;
	risk1.beginPath();
	risk1.moveTo(60, 450);
	risk1.lineTo(60, 450 - (riskOne /100*92));
	risk1.strokeStyle = "#f26522";
	risk1.stroke();

var risk2 = canvas.getContext("2d");
	risk2.lineWidth = 80;
	risk2.beginPath();
	risk2.moveTo(600, 450);
	risk2.lineTo(600, 450 - (riskTwo /100*92));
	risk2.strokeStyle = "#f26522";
	risk2.stroke();

var risk3 = canvas.getContext("2d");
	risk3.lineWidth = 80;
	risk3.beginPath();
	risk3.moveTo(1150, 450);
	risk3.lineTo(1150, 450 - (riskThree /100*92));
	risk3.strokeStyle = "#f26522";
	risk3.stroke();

var normOne = 100;
var normTwo = 377;
var normThree = 249;

var norm1 = canvas.getContext("2d");
	norm1.lineWidth = 80;
	norm1.beginPath();
	norm1.moveTo(60 + 120, 450);
	norm1.lineTo(60 + 120, 450 - (normOne /100*92));
	norm1.strokeStyle = "#2eb42e";
	norm1.stroke();

var norm2 = canvas.getContext("2d");
	norm2.lineWidth = 80;
	norm2.beginPath();
	norm2.moveTo(600 + 120, 450);
	norm2.lineTo(600 + 120, 450 - (normTwo /100*92));
	norm2.strokeStyle = "#2eb42e";
	norm2.stroke();

var norm3 = canvas.getContext("2d");
	norm3.lineWidth = 80;
	norm3.beginPath();
	norm3.moveTo(1150 + 120, 450);
	norm3.lineTo(1150 + 120, 450 - (normThree /100*92));
	norm3.strokeStyle = "#2eb42e";
	norm3.stroke();

var comfOne = 140;
var comfTwo = 223;
var comfThree = 213;

var comf1 = canvas.getContext("2d");
	comf1.lineWidth = 80;
	comf1.beginPath();
	comf1.moveTo(60 + 240, 450);
	comf1.lineTo(60 + 240, 450 - (comfOne /100*92));
	comf1.strokeStyle = "#00aeef";
	comf1.stroke();

var comf2 = canvas.getContext("2d");
	comf2.lineWidth = 80;
	comf2.beginPath();
	comf2.moveTo(600 + 240, 450);
	comf2.lineTo(600 + 240, 450 - (comfTwo /100*92));
	comf2.strokeStyle = "#00aeef";
	comf2.stroke();

var comf3 = canvas.getContext("2d");
	comf3.lineWidth = 80;
	comf3.beginPath();
	comf3.moveTo(1150 + 240, 450);
	comf3.lineTo(1150 + 240, 450 - (comfThree /100*92));
	comf3.strokeStyle = "#00aeef";
	comf3.stroke();

function changeLink(elmnt) {
	var i, tablinks;

    tablinks = document.getElementsByClassName("menu-m-itm");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("menu-a");
    }

    elmnt.classList.add("menu-a");
}

function changePage(elmnt) {
	var i, tablinks;

    tablinks = document.getElementsByClassName("page");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("page-a");
    }

    elmnt.classList.add("page-a");
}

