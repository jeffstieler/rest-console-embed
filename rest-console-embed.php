<?php
/**
 * Plugin Name: REST Console Embed
 * Description: Shortcode for an embeddable REST API Console, based on Automattic's <a href="https://developer.wordpress.com/docs/api/console/">WordPress.com Console</a>.
 * Author: jeffstieler
 * Author URI: http://jeffstieler.com
 * Version: 0.1.0
 * License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

class REST_Console_Embed {

	function init() {
		
	}

}

add_action( 'wp_loaded', array( new REST_Console_Embed(), 'init' ) );