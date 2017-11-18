$(document).ready(function(){

	// load page
	$( '.mx-load_page' ).animate( {'opacity': '0'}, 500 );
	setTimeout( function(){
		$( '.mx-load_page' ).css( 'display', 'none' );
	},500 );

	/*--- widget ---*/
	// open
	var keyOpen = false;
	$( '.mx-write_to_us' ).on( 'click', function( e ){

		if( keyOpen === false ){
			$( '.mx-widget_window' ).addClass( 'mx-widget_window_open' );
			$( this ).addClass( 'mx-write_to_us_disabled' );
			keyOpen = true;
		}
		
		e.preventDefault();
	} );

	$( '.mx-close_window_message' ).on( 'click', function(){

		if( keyOpen === true ){
			$( '.mx-widget_window' ).removeClass( 'mx-widget_window_open' );
			$( '.mx-write_to_us' ).removeClass( 'mx-write_to_us_disabled' );
			keyOpen = false;
		}

	} );

	// active
	$( '.mx-widget_send textarea' ).focus( function(){
		$( '.mx-widget_body' ).addClass( 'mx-active_widget' );		
	} );
	$( '.mx-widget_send textarea' ).blur( function(){
		$( '.mx-widget_body' ).removeClass( 'mx-active_widget' );		
	} );

	/*--- scroll ---*/
	$( '.mx-widget_messages' ).jScrollPane(); 


});