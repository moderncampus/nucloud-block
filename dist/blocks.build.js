!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),r=(n.n(l),n(3)),u=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,a=wp.editor.InspectorControls,i=wp.components,c=i.PanelBody,p=i.PanelRow,m=i.TextControl;o("nucloud/map-embed",{title:u("nuCloud Map Embed"),icon:"location-alt",category:"embed",keywords:[u("map"),u("nucloud"),u("embed")],attributes:{map_id:{type:"integer"},query_string:{type:"string"},height:{type:"integer"}},edit:function(e){var t=e.attributes,n=e.setAttributes;return wp.element.createElement(a,null,wp.element.createElement(c,{title:u("Map Settings","nucloud")},wp.element.createElement(p,null,wp.element.createElement(m,{label:u("Map ID","nucloud"),help:u("Enter the ID for the map you would like to embed","nucloud"),onChange:function(e){n({map_id:e})},value:t.map_id})),wp.element.createElement(p,null,wp.element.createElement(m,{label:u("Map Height","nucloud"),help:u("Enter the height of the embed in pixels","nucloud"),onChange:function(e){n({height:e})},value:t.height})),wp.element.createElement(p,null,wp.element.createElement(m,{label:u("Customize View","nucloud"),help:u("Enter a query string for a marker or category to customize the display","nucloud"),onChange:function(e){n({query_string:e})},value:t.query_string})))),wp.element.createElement("div",{className:e.className},wp.element.createElement("iframe",{src:"https://cdn-map1.nucloud.com/nucloudmap/index.html?map={ attributes.map_id }",width:"100%",height:"{ attributes.height }"}))},save:function(){return null}})},function(e,t){},function(e,t){}]);