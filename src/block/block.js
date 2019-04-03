/**
 * BLOCK: nucloud/map-embed
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls } = wp.editor;
const {
	PanelBody,
	PanelRow,
	TextControl
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'nucloud/map-embed', {
	title: __( 'nuCloud Map Embed' ),
	icon: 'location-alt',
	category: 'embed', // E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'map' ),
		__( 'nucloud' ),
		__( 'embed' ),
	],
	attributes: {
		map_id: {
			type: 'integer'
		},
		category: {
			type: 'string'
		},
		marker: {
			type: 'string'
		},
		height: {
			type: 'integer'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		return (
			<div className={ props.className }>
				<iframe src="https://cdn-map1.nucloud.com/nucloudmap/index.html?map=5" width="100%" height="500"></iframe>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( ) {
		return null;
	},
} );