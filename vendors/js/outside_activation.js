jQuery(document).ready(function ($) {
	event.preventDefault();
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});
});
