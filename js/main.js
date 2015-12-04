$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 80,
				height	: 80
			}
		}
	});
});
/*
	$('.main-gallery').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});

*/