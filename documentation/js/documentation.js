( function( $ ) {
"use strict"

// Magnific Popup
	$('.img-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

//Main menu
	$('.main-menu').on( 'click', 'li', addClassActive);

	(function(){
		var hash = window.location.hash,
			button = $( 'a[href="' + hash + '"]' ) ;

		addClassActive ( button );
	}())

	function addClassActive ( $event ){
		var activeItem = $event.currentTarget ? $( $event.currentTarget ) : $( $event );
		$('.active').removeClass('active');

		activeItem
			.addClass('active')
			.parents('li').addClass('active');

		if( $event.currentTarget ){
			$event.stopPropagation();
		}
	}
}( jQuery ) )
