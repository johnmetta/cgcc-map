/*******************************************************************************
 * Settings that are somewhat user manageable
 */
 
// Initial map point that google maps shows in the center of the map
var center = new google.maps.LatLng(45.588700, -121.188389)

var minHeight = 370
// Initial Zoom Level
var zoom = 17;

// Delay for each marker to drop (they don't all drop at the same time)
var timeout = 300;

// The image used for the markers
var marker_image = 'images/marker.png';

// Size of the video image (This is changed in iphone/android browers, see way below)
var videoSize = ['299', '182'];

// Returns the text of the stop number
function stopNumberText(number) {
    // Change this line to change the string used
    var text = 'Stop #' + number.toString();
    return text;
}

// The HTML for actually formatting the pop-up box. CSS is in map.css
function generateContent(details) {
    var content = '<div id="popup">' +
      '<div id="header">' +
      '<div id="logo"><img src="images/logo.jpg"></div>' +
      '<div id="title"><h1 class="all-caps">'+ details.name + '</h1><h2>Location: ' + details.location + '</h2></div>' +
      '</div>'+ //end header
      '<div id="videoContent">' +
        '<iframe width="'+ videoSize[0] + '" height="' + videoSize[1] + '" src="http://www.youtube.com/embed/'+ details.video + '" frameborder="0" allowfullscreen></iframe><br/>' +
        flickrCode(details.flickrCode) +
        '</div>' +
      '<div id="bodyContent">' +
        '<p>' + details.text +
        courseList(details.courses) +
     '<p>For more information, visit <br/><a href="http://www.renewableenergycareers.org">www.renewableenergycareers.org</a>' +
      '</p></div>' + //end bodyContent
      '</div>';
    return content;
}

function courseList(courses) {
    if (courses.length > 0)
    {
        txt = '</p><p><span id="courses">Courses:<span><ul>';
        for (i in courses)
         {
           txt += '<li><b>' + courses[i][0] + ' '  + courses[i][1] + '</b></li>';
         }
        txt += "</ul>";
    } else {
        txt = "";
    }
    return txt;
}
// THis is basically just the flickr embed code, cut up so that all we need is the flickr slideshow ID that's in the code.
function flickrCode(slideShowId) {

    var flickrText = '<object width="' + videoSize[0] + '" height="' + videoSize[1] + '"> ' +
       '<param name="flashvars" value="offsite=true&lang=en-us&page_show_url=/photos/studycleanpower/sets/' + 
       slideShowId + 
       '/show/&page_show_back_url=/photos/studycleanpower/sets/' + 
       slideShowId + 
       '/&set_id=' + 
       slideShowId + 
       '&jump_to="></param>' +
       '<param name="movie" value="http://www.flickr.com/apps/slideshow/show.swf?v=109615"></param> <param name="allowFullScreen" value="true"></param>' +
       '<embed type="application/x-shockwave-flash" src="http://www.flickr.com/apps/slideshow/show.swf?v=109615" allowFullScreen="true" flashvars="offsite=true&lang=en-us&page_show_url=/photos/studycleanpower/sets/' + 
       slideShowId + 
       '/show/&page_show_back_url=/photos/studycleanpower/sets/' + 
       slideShowId + 
       '/&set_id=' + 
       slideShowId + 
       '&jump_to=" width="' + 
       videoSize[0] + 
       '" height="' + 
       videoSize[1] + 
       '"></embed>' +
       '</object>';

    return flickrText;
}

/**************************************************************
 * Shouldn't have to mess about down here
 */
var markers = [];
var iterator = 0;
var map;
var infowindow = new google.maps.InfoWindow({
    minHeight: minHeight
});

/**
 * Initializes the map and listeners.
 */
function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        center: center,
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.HYBRID
      });
  drop();
}   

// Drop functionality delay
function drop() {
  for (var i = 0; i < buildings.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * timeout);
  }e
}

// Build up markers and add them to the markers array
function addMarker() {
  var details = buildings[iterator];
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        details.coordinates[0], details.coordinates[1]
        ),
      map: map,
      draggable: false,
      clickable: true,
      icon: marker_image,
      title: stopNumberText((iterator+1).toString()),
      animation: google.maps.Animation.DROP,
      zIndex: iterator * -1
  });
  markers.push(marker);
  var content = generateContent(details);
  google.maps.event.addListener(marker, 'click', function () {
     infowindow.content = content;
     infowindow.open(map, marker); 
  });
  iterator++;
}

// Some visual goodness for mobile apps
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
    minHeight = '265'
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
