function getURLParameter(e){var r=(RegExp("[?|&]"+e+"=(.+?)(&|$)").exec(location.search)||[,null])[1];return r?escape(decodeURI(r)):escape(r)}

window.addEventListener('DOMContentLoaded', () => {
  var frame  = document.querySelector('.wp-block-nucloud-map-embed > iframe') !== null;

  if(frame) {
    var mapId  = frame.getAttribute('data-map-id');
    var marker = getURLParameter('marker') ? getURLParameter('marker') : frame.getAttribute('data-marker');
    var layer  = getURLParameter('layer') ? getURLParameter('layer') : frame.getAttribute('data-layer');
    var src    = 'https://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + mapId;

    if(marker != null) {
    	src += '&marker=' + marker;
    } else if(layer != null) {
    	src += '&layer=' + layer;
    }

    frame.src = src;
  }
});
