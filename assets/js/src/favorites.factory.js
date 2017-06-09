/**
* Primary Favorites Initialization
* @package Favorites
* @author Kyle Phillips - https://github.com/kylephillips/favorites
*
* Events:
* favorites-nonce-generated: The nonce has been generated
*/

/**
* Callback Functions for use in themes (deprecated in v2 in favor of events)
*/
function favorites_after_button_submit(favorites, post_id, site_id, status){}
function favorites_after_initial_load(favorites){}

jQuery(document).ready(function(){
	new Favorites.Factory;
});

var Favorites = Favorites || {};

/**
* DOM Selectors Used by the Plugin
*/
Favorites.selectors = {

}

/**
* Localized JS Data Used by the Plugin
*/
Favorites.jsData = {
	ajaxurl : simple_favorites.ajaxurl, // The WP AJAX URL
	nonce : null, // The Dynamically-Generated Nonce
	favorite : simple_favorites.favorite, // Active Button Text/HTML
	favorited : simple_favorites.favorited, // Inactive Button Text
	include_count : simple_favorites.includecount, // Whether to include the count in buttons
	indicate_loading : simple_favorites.indicate_loading, // Whether to include loading indication in buttons
	loading_text : simple_favorites.loading_text, // Loading indication text
	loading_image_active : simple_favorites.loading_image_active, // Loading spinner url in active button
	loading_image : simple_favorites.loading_image // Loading spinner url in inactive button
}

/**
* The user's favorites
* @var object
*/
Favorites.userFavorites = null;

/**
* WP Form Actions Used by the Plugin
*/
Favorites.formActions = {
	nonce : 'simplefavorites_nonce',
	favoritesarray : 'simplefavorites_array',
	favorite : 'simplefavorites_favorite',
	clearall : 'simplefavorites_clear',
	favoritelist : 'simplefavorites_list'
}

Favorites.Factory = function()
{
	var plugin = this;
	var $ = jQuery;

	plugin.build = function()
	{
		new Favorites.NonceGenerator;
		new Favorites.FrontEnd;
	}

	return plugin.build();
}