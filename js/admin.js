/**
 * jquery.admin.js
 *
 * Contain all handlers for admin page.
 */
 
( function( $ ) {
	$( document ).ready( function() {
		$( '.theme[aria-describedby*="beagency-lite"]' ).append( '<div class="theme-update">' + admin_vars.upgrade_available + '</div>' );

		$( '.theme' ).click( function() {
			var themeName = $( '.theme-info .theme-name' ).text();

			if ( themeName.indexOf( 'BeAgency Lite' ) >= 0 ) {
				$( '.theme-overlay .theme-author' ).after( '<div class="theme-update-message"><h4 class="theme-update">' + admin_vars.upgrade_available + '</h4><p><strong>' + admin_vars.upgrade_info + '</strong></p></div>' );
			}
		} );

		$( '.plugin-title strong' ).each( function() {
			if ( $( this ).text() == 'BeAgency Lite' ) {
				$( this ).parent().append( '<p>' + admin_vars.upgrade_info + '</p>' );
			}
		} );
	} );
} )( jQuery );