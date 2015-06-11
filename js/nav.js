/**
 * The nav stuff
 */
(function( window ){

	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		togglePushLeft = document.querySelector( ".toggle-push-left" ),
		pushMenuLeft = document.querySelector( ".push-menu-left" ),
		activeNav
	;
	mask.className = "mask";

	/* push menu left */
	togglePushLeft.addEventListener( "click", function(){
		classie.add( body, "pml-open" );
		document.body.appendChild(mask);
		activeNav = "pml-open";
	} );

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );


	/* dropdown menus */
	$('.dropdown > a').on('click',function(evt){
		evt.preventDefault();
		var parent = $(this).parent();
		if (parent.hasClass('open')) {
			parent.find('ul').each(function(index){
				$(this).find('li').removeClass('open');
				$(this).slideUp();
			})
			parent.removeClass('open');
		}
		else {
			parent.addClass('open');
			parent.find('> ul').slideDown();
		}


	})


})( window );