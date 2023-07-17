jQuery(function($) {
	$('.navToggle').click(function() {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.global').addClass('active');
			$('body').addClass('fixed');
		} else {
			$('.global').removeClass('active');
			$('body').removeClass('fixed');
		}
	});
	$('.global a').click(function() {
		$('.global').removeClass('active');
		$('.navToggle').removeClass('active');
		$('body').removeClass('fixed');
	});
	$('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
