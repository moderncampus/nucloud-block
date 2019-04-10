<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function nucloud_block_map_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'nucloud-map-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block script for frontend.
	if( !is_admin() ) {
		wp_enqueue_script(
			'nucloud-map-frontend-js',
			plugins_url( 'dist/blocks.frontend.js', dirname( __FILE__ ) ),
			array(),
			null,
			true
		);
	}

	// Register block editor script for backend.
	wp_register_script(
		'nucloud-map-block-js', // Handle.
		plugins_url( 'dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'nucloud-map-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'nucloud/map-embed', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'           => 'nucloud-map-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script'   => 'nucloud-map-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'    => 'nucloud-map-block-editor-css',
			'render_callback' => 'nucloud_block_map_render'
		)
	);
}

function nucloud_block_map_render( $attributes ) {
	$class = 'wp-block-nucloud-map-embed';
  if ( isset( $attributes['className'] ) ) {
      $class .= ' ' . $attributes['className'];
  }

	$query_str = '?map=' . $attributes['map_id'];
	if ( isset( $attributes['marker'] ) ) {
      $query_str .= '&marker=' . $attributes['marker'];
  } elseif ( isset( $attributes['layer'] ) ) {
      $query_str .= '&layer=' . $attributes['layer'];
  }

	return '<div class="' . $class . '">
		<iframe id="nucloud-map" data-map-id="' . $attributes['map_id'] . '" src="https://cdn-map1.nucloud.com/nucloudmap/index.html' . $query_str . '"></iframe>
	</div>';
}

// Hook: Block assets.
add_action( 'init', 'nucloud_block_map_assets' );
