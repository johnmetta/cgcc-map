var markers = [];
var iterator = 0;
var map;
var videoSize = ['299', '182'];
var infowindow = new google.maps.InfoWindow();
/**
 * Initializes the map and listeners.
 */
function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        center: new google.maps.LatLng(45.589972, -121.188389),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
      });
  drop();
}     

function drop() {
  for (var i = 0; i < buildings.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 200);
  }
}

function addMarker() {
  var details = buildings[iterator];
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        details.coordinates[0], details.coordinates[1]
        ),
      map: map,
      draggable: false,
      clickable: true,
      animation: google.maps.Animation.DROP
  });
  markers.push(marker);
  var content = '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">' +
    details.name +
    '</h1>'+
    '<h2>Building: '+
    details.location +
    '</h2>'+
    '<div id="videoContent">'+
    '<iframe width="'+
    videoSize[0] +
    '" height="' +
    videoSize[1] +
    '" src="http://www.youtube.com/embed/'+
    details.video +
    '" frameborder="0" allowfullscreen></iframe>' +
    '</div>' +
    '<div id="bodyContent">'+
    '<p>' +
    details.text +
    '</p></div>' +
    '</div>';
  google.maps.event.addListener(marker, 'click', function () {
     infowindow.content = content;
     infowindow.open(map, marker); 
  });
  iterator++;
}

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
    videoSize[0] = '199';
    videoSize[1] = '131';
  }
}
