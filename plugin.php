<?php
/**
 * Plugin Name: nuCloud Map Embed Block
 * Plugin URI: https://github.com/nuCloud/nucloud-block/
 * Description: Allows a user to embed their nuCloud powered interactive map into a page with a block in Gutenberg.
 * Author: Michael Fienen
 * Author URI: https://nucloud.com/
 * Version: .1
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
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
