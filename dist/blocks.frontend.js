function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

window.onload = function() {
  var marker = getURLParameter('marker');
  var layer  = getURLParameter('layer');
  var frame  = document.querySelector('.wp-block-nucloud-map-embed > iframe');
  var mapId  = frame.getAttribute('data-map-id');
  var src    = 'https://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + mapId;

  if(marker != null) {
  	src += '&marker=' + marker;
  } else if(layer != null) {
  	src += '&layer=' + layer;
  }

  frame.src = src;
}
