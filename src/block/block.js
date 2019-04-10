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
		element_id: {
			default: '',
			type: 'string'
		},
		layer: {
			default: '',
			type: 'string'
		},
		map_height: {
			default: '500',
			type: 'number'
		},
		map_id: {
			default: '5',
			type: 'number'
		},
		marker: {
			default: '',
			type: 'number'
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
		const { attributes: { element_id, map_id, map_height, marker, layer }, className, setAttributes } = props;
		let saveAsNum = function(attr, val) {
			props.setAttributes({attr:parseInt(val)});
		}
		return [
			<InspectorControls>
				<PanelBody
					title={ __( 'Map Settings', 'nucloud' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl
							label={ __( 'Map ID', 'nucloud' ) }
							help={ __( 'Enter the ID for the map you would like to embed', 'nucloud' ) }
							onChange={ map_id => setAttributes( parseInt({map_id}) ) }
							value={ map_id }
							type='number'
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Map Height', 'nucloud' ) }
							help={ __( 'Enter the height of the embed in pixels', 'nucloud' ) }
							onChange={ saveAsNum( map_height, {map_height} ) }
							value={ map_height }
							type='number'
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Display Marker', 'nucloud' ) }
							help={ __( 'Enter a marker ID to display a stop by default. (Overrides layers)', 'nucloud' ) }
							onChange={ marker => setAttributes( { marker } ) }
							value={ marker }
							type='number'
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Display Layers', 'nucloud' ) }
							help={ __( 'Enter a comma separated list of layer names to display them by default', 'nucloud' ) }
							onChange={ layer => setAttributes( { layer } ) }
							value={ layer }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label={ __( 'Custom Element ID', 'nucloud' ) }
							help={ __( 'Specify an ID to apply to the iframe that renders your map. Default: \'nucloud-map\'', 'nucloud' ) }
							onChange={ element_id => setAttributes( { element_id } ) }
							value={ element_id }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div className={ className }>
				<iframe src={`https://cdn-map1.nucloud.com/nucloudmap/index.html?map=${map_id}&marker=${marker}&layer=${layer}`} height={ map_height }></iframe>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return null;
	},
} );
