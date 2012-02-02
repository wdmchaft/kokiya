<?php
/*
Plugin Name: Google Web Fonts Manager
Plugin URI: http://MyWebsiteAdvisor.com
Description: Easily Add Google Web Fonts in your WordPress Site.
Version: 1.0
Author: MyWebsiteAdvisor
Author URI: http://MyWebsiteAdvisor.com
*/

register_activation_hook(__FILE__, 'google_web_fonts_manager_activate');

// display error message to users
if ($_GET['action'] == 'error_scrape') {                                                                                                   
    die("Sorry,  Plugin requires PHP 5.0 or higher. Please deactivate Plugin.");                                 
}

function google_web_fonts_manager_activate() {
	if ( version_compare( phpversion(), '5.0', '<' ) ) {
		trigger_error('', E_USER_ERROR);
	}
}

// require  Plugin if PHP 5 installed
if ( version_compare( phpversion(), '5.0', '>=') ) {
	define('GFM_LOADER', __FILE__);

	require_once(dirname(__FILE__) . '/google-web-fonts-manager.php');
	require_once(dirname(__FILE__) . '/plugin-admin.php');

}
?>