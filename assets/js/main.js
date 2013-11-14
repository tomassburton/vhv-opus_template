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

$('ul.tabs').each(function(){
  var $active, $content, $links = $(this).find('a');
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');
  $content = $($active.attr('href'));

  $links.not($active).each(function () {
    $($(this).attr('href')).hide();
  });

  $(this).on('click', 'a', function(e){
    $active.removeClass('active');
    $content.hide();

    $active = $(this);
    $content = $($(this).attr('href'));

    $active.addClass('active');
    $content.show();

    e.preventDefault();
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

var $q = jQuery.noConflict();
$q('#slider3').bxSlider({
  captions: true,
  auto: false
});