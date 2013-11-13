var $r = jQuery.noConflict();
$r(document).ready(function() {
	$(".modal").fancybox({
		maxWidth	: 900,
		maxHeight	: 800,
		fitToView	: false,
		width		: '80%',
		height		: '80%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

var $j = jQuery.noConflict();
$j('#slider1').bxSlider({
  captions: true,
  auto: true
});

var $p = jQuery.noConflict();
$p('#slider2').bxSlider({
  captions: true,
  auto: true
});