/**
 * UHF Search UI.
 *
 * @since 1.0.0
 * @package  WebDevStudios\MSOffice365SearchWP
 */

/* globals WDSMS_SearchWP, console, jQuery */

if ( window.hasOwnProperty( 'WDSMS_SearchWP' ) && window.hasOwnProperty( 'jQuery' ) ) {

	/**
	 * UHF Search UI.
	 *
	 * @since 1.0.0
	 */
	window.WDSMS_SearchWP = ( function( $, pub, prv ) {

		/**
		 * Cached UHF object.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @type {Object} jQuery object.
		 */
		prv.$uhf = null;

		/**
		 * Cached Search Area.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @type {Object} jQuery object.
		 */
		prv.$search = null;

		/**
		 * Search Input.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @type {Object} jQuery object.
		 */
		prv.$searchInput = null;

		/**
		 * Init.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 */
		prv.init = function() {
			prv.setSearchAction();
			prv.setSearchInputS();
			prv.disableSearchAutocomplete();
		};

		/**
		 * Disable UHF autocomplete.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 */
		prv.disableSearchAutocomplete = function() {
			prv.getSearchInput().off( 'keyup' );
			prv.getSearchInput().off( 'keydown' );
			prv.getSearchInput().off( 'change' );
		};

		/**
		 * Cache Search Input.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 */
		prv.setSearchInputS = function() {
			prv.getSearchInput().attr( 'name', 's' );
		};

		/**
		 * Set Search Form action attribute so it submits to our page.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 */
		prv.setSearchAction = function() {
			prv.getSearchForm().attr( 'action', pub.getFormAction() );
		};

		/**
		 * Get the form action URL.
		 *
		 * Note, this has special considerations for Akamai URL's.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @return {String} The URL the form should act on.
		 */
		pub.getFormAction = function() {
			return pub.formAction;
		};

		/**
		 * Get the Search Input.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @return {Object} jQuery object.
		 */
		prv.getSearchInput = function() {
			return null === prv.$searchInput ? prv.cached( '> input#cli_shellHeaderSearchInput:first-child', '$searchInput', prv.getSearchForm() ) : prv.$searchInput;
		};

		/**
		 * Get the Search form.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @return {Object} jQuery object.
		 */
		prv.getSearchForm = function() {
			return null === prv.$search ? prv.cached( 'form.c-search', '$search' ) : prv.$search;
		};

		/**
		 * Cache a jQuery object on the object.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @param {String} selector The selector.
		 * @param {String} property The property to assign to.
		 * @param {Object} context  jQuery object for context.
		 * @param {Object} object   The object to apply to.
		 *
		 * @return {Object}          jQuery object (and cached).
		 */
		prv.cached = function( selector, property, context, object ) {
			if ( 'undefined' === context ) {
				context = prv.getUHF();
			}

			if ( 'undefined' === object ) {
				object = prv;
			}

			return null === prv[ property ] ? prv[ property ] = $( selector, context ) : prv[ property ];
		};

		/**
		 * Get the UHF.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @return {Object} jQuery object.
		 */
		prv.getUHF = function() {
			return null === prv.$uhf ? prv.setUHF() : prv.$uhf;
		};

		/**
		 * Cache the Search Form.
		 *
		 * @author Aubrey Portwood <aubrey@webdevstudios.com>
		 * @since 1.0.0
		 *
		 * @return {Object} jQuery object.
		 */
		prv.setUHF = function() {
			return null === prv.$uhf ? prv.$ufh = $( '#headerArea' ) : prv.$uhf;
		};

		document.body.addEventListener( 'uhfShellLoaded', prv.init );

		return pub; // Return public things.

	} ( jQuery, WDSMS_SearchWP, {} ) );

} // End if()
