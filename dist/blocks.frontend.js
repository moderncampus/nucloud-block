function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

window.onload = function() {
  var marker = getURLParameter('marker');
  var layer  = getURLParameter('layer');
  var frame  = document.getElementById('nucloud-map');
  var mapId  = frame.getAttribute('data-map-id');

  if(marker != null) {
  	frame.src = 'http://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + mapId + '&marker=' + marker;
  } else if(layer != null) {
  	frame.src = 'http://cdn-map1.nucloud.com/nucloudmap/index.html?map=' + mapId + '&layer=' + layer;
  }
}
