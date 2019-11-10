<?php
/**
 * Plugin Name: nuCloud Map Embed Block
 * Plugin URI: https://github.com/nuCloud/nucloud-block/
 * GitHub Plugin URI: nuCloud/nucloud-block
 * Description: Allows a user to embed their nuCloud powered interactive map into a page with a block in Gutenberg.
 * Author: Michael Fienen
 * Author URI: https://nucloud.com/
 * Version: 1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * load_nucloud_blocks_init
 *
 * Acticvate php files found in folders
 *
 * @return null
 */
function load_nucloud_blocks_init() {
	if ( file_exists( __DIR__ . '/inc' ) && is_dir( __DIR__ . '/inc' ) ) {
		foreach ( glob( __DIR__ . '/inc/*.php' ) as $filename ) {
			require $filename;
		}
	}
}

add_action( 'plugins_loaded', 'load_nucloud_blocks_init' );
