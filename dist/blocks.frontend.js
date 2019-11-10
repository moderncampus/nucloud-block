function getURLParameter(e){var r=(RegExp("[?|&]"+e+"=(.+?)(&|$)").exec(location.search)||[,null])[1];return r?escape(decodeURI(r)):escape(r)}

window.addEventListener('DOMContentLoaded', () => {
  var frame  = document.querySelector('.wp-block-nucloud-map-embed > iframe');

  if(typeof frame !== 'undefined' && frame !== null) {
    var mapId  = frame.getAttribute('data-map-id');
    var marker = getURLParameter('marker'); 
    var layer  = getURLParameter('layer');
    if(marker == 'null') marker = frame.getAttribute('data-marker');
    if(layer == 'null') layer = frame.getAttribute('data-layer');
    var src    = 'https://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + mapId;
    if(marker != 'null' && marker != null && marker != '') src += '&marker=' + marker;
    if(layer != 'null' && layer != null && layer != '') src += '&layer=' + layer;
    frame.src = src;
  }
});
