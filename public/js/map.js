

var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGRlbGVhc' +
    '3RhciIsImEiOiJjamE5cTQ1aDEwYjE2MzJuY3BpbGFqNHZ0In0.i9MMtdk2VGdKsLCW50qHMw', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © ' +
  '<a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoicGRlbGVhc3RhciIsImEiOiJjamE5cTQ1aDEwYjE2MzJuY3BpbGFqNHZ0In0.i9MMtdk2VGdKsLCW50qHMw'
}).addTo(map);




for ( var i=0; i < markers.length; ++i )
{
  L.marker( [markers[i].lat, markers[i].lng] )
      .addTo( map );
}