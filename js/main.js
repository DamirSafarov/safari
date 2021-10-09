$(function(){


	$('.about-popup_link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});




    $('.photos-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:'<button type="button" class="slick-photo_btn slick-prev"><img src="img/arrow_left.png" alt=""></button>',
        nextArrow:'<button type="button" class="slick-photo_btn slick-next"><img src="img/arrow_right.png" alt=""></button>'
      });


      $('.photos-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},

	});

	$('.header-arrow_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#book').offset().top }, 1000);
		e.preventDefault();
	  });
	  

});