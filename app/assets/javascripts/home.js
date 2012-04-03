//= require polymaps
//= require kmeans

$(function(){ 

var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .center({lat: 37.787, lon: -122.228})
    .zoom(14)
    .zoomRange([12, 16])
    .add(po.interact());

map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
    + "/20760/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

var b = '{
  "kml": {
    "-xmlns": "http://www.opengis.net/kml/2.2",
    "-xmlns:gx": "http://www.google.com/kml/ext/2.2",
    "-xmlns:kml": "http://www.opengis.net/kml/2.2",
    "-xmlns:atom": "http://www.w3.org/2005/Atom",
    "Document": {
      "name": "Location history from 04/01/2012 to 04/04/2012",
      "open": "1",
      "StyleMap": {
        "-id": "multiTrack",
        "Pair": [
          {
            "key": "normal",
            "styleUrl": "#multiTrack_n"
          },
          {
            "key": "highlight",
            "styleUrl": "#multiTrack_h"
          }
        ]
      },
      "Style": [
        {
          "-id": "multiTrack_n",
          "IconStyle": {
            "Icon": { "href": "http://earth.google.com/images/kml-icons/track-directional/track-0.png" }
          },
          "LineStyle": {
            "color": "99ffac59",
            "width": "6"
          }
        },
        {
          "-id": "multiTrack_h",
          "IconStyle": {
            "scale": "1.2",
            "Icon": { "href": "http://earth.google.com/images/kml-icons/track-directional/track-0.png" }
          },
          "LineStyle": {
            "color": "99ffac59",
            "width": "8"
          }
        }
      ],
      "Placemark": {
        "name": "Latitude User",
        "description": "Location history for Latitude User from 04/01/2012 to 04/04/2012",
        "styleUrl": "#multiTrack",
        "gx:Track": {
          "altitudeMode": "clampToGround",
          "when": [
            "2012-04-01T00:38:08.424-07:00",
            "2012-04-01T00:41:15.389-07:00",
            "2012-04-01T00:48:03.111-07:00",
            "2012-04-01T11:03:17.260-07:00",
            "2012-04-01T11:06:18.460-07:00",
            "2012-04-01T11:13:11.289-07:00",
            "2012-04-01T12:06:37.734-07:00",
            "2012-04-01T12:09:36.487-07:00",
            "2012-04-01T12:14:47.686-07:00",
            "2012-04-01T12:16:31.454-07:00",
            "2012-04-01T14:47:16.406-07:00",
            "2012-04-01T14:50:15.973-07:00",
            "2012-04-01T14:57:10.521-07:00",
            "2012-04-01T16:20:27.034-07:00",
            "2012-04-01T16:23:28.774-07:00",
            "2012-04-01T16:28:29.587-07:00",
            "2012-04-01T16:30:21.949-07:00",
            "2012-04-01T16:51:00.688-07:00",
            "2012-04-01T16:53:42.877-07:00",
            "2012-04-01T16:58:31.860-07:00",
            "2012-04-01T17:00:26.106-07:00",
            "2012-04-01T17:04:35.623-07:00",
            "2012-04-01T17:09:09.154-07:00",
            "2012-04-01T17:11:00.802-07:00",
            "2012-04-02T10:10:22.860-07:00",
            "2012-04-02T10:13:21.240-07:00",
            "2012-04-02T10:18:21.412-07:00",
            "2012-04-02T10:20:15.706-07:00",
            "2012-04-02T10:34:37.116-07:00",
            "2012-04-02T10:39:39.085-07:00",
            "2012-04-02T10:42:38.251-07:00",
            "2012-04-02T10:48:54.434-07:00",
            "2012-04-02T10:51:54.289-07:00",
            "2012-04-02T10:57:12.995-07:00",
            "2012-04-02T10:58:48.198-07:00",
            "2012-04-02T15:13:51.428-07:00",
            "2012-04-02T15:16:52.809-07:00",
            "2012-04-02T15:19:51.701-07:00",
            "2012-04-02T15:22:39.230-07:00",
            "2012-04-02T15:25:42.068-07:00",
            "2012-04-02T15:28:41.104-07:00",
            "2012-04-02T15:31:50.993-07:00",
            "2012-04-02T15:36:15.707-07:00",
            "2012-04-02T15:39:16.763-07:00",
            "2012-04-02T15:42:27.725-07:00",
            "2012-04-02T15:45:37.262-07:00",
            "2012-04-02T16:29:18.034-07:00",
            "2012-04-02T16:32:28.191-07:00",
            "2012-04-02T16:35:38.569-07:00",
            "2012-04-02T16:38:48.819-07:00",
            "2012-04-02T16:39:01.507-07:00",
            "2012-04-02T20:28:08.725-07:00",
            "2012-04-02T20:31:14.189-07:00",
            "2012-04-02T20:34:49.593-07:00",
            "2012-04-02T20:37:29.388-07:00",
            "2012-04-02T20:38:02.505-07:00",
            "2012-04-02T20:38:08.259-07:00",
            "2012-04-02T20:41:10.186-07:00",
            "2012-04-02T20:44:20.155-07:00",
            "2012-04-02T20:47:54.558-07:00",
            "2012-04-02T21:57:34.426-07:00",
            "2012-04-02T22:00:50.713-07:00",
            "2012-04-02T22:03:57.581-07:00",
            "2012-04-02T22:06:54.195-07:00",
            "2012-04-02T22:07:27.456-07:00"
          ],
          "gx:coord": [
            "-122.288594 37.859037 0",
            "-122.274455 37.857447 0",
            "-122.274455 37.857447 0",
            "-122.2872267 37.8617449 0",
            "-122.274156 37.857411 0",
            "-122.274156 37.857411 0",
            "-122.280869 37.867665 0",
            "-122.274202 37.85734 0",
            "-122.274224 37.857355 0",
            "-122.274224 37.857355 0",
            "-122.285122 37.848429 0",
            "-122.274268 37.857352 0",
            "-122.274268 37.857352 0",
            "-122.266115 37.872595 0",
            "-122.266442 37.86861 0",
            "-122.255411 37.867496 0",
            "-122.2554692 37.866563 0",
            "-122.269649 37.85916 0",
            "-122.243377 37.867324 0",
            "-122.248675 37.86876 0",
            "-122.248675 37.86876 0",
            "-122.261514 37.866569 0",
            "-122.274046 37.86316 0",
            "-122.274376 37.862734 0",
            "-122.286123 37.847921 0",
            "-122.274082 37.857239 0",
            "-122.274246 37.857357 0",
            "-122.274246 37.857357 0",
            "-122.273118 37.824793 0",
            "-122.280423 37.799862 0",
            "-122.302607 37.807041 0",
            "-122.396305 37.787892 0",
            "-122.3944447 37.7897001 75",
            "-122.391626 37.783345 0",
            "-122.391626 37.783345 0",
            "-122.391299 37.783497 0",
            "-122.3906958 37.7828017 0",
            "-122.391375 37.783472 0",
            "-122.3906958 37.7828017 0",
            "-122.391487 37.783393 0",
            "-122.3906958 37.7828017 0",
            "-122.395021 37.785178 0",
            "-122.391794 37.783475 0",
            "-122.391755 37.783378 0",
            "-122.3921074 37.787437 0",
            "-122.3913477 37.787831 0",
            "-122.3927148 37.7864786 0",
            "-122.3949879 37.7858756 57",
            "-122.3949879 37.7858756 57",
            "-122.3949879 37.7858756 57",
            "-122.3949879 37.7858756 57",
            "-122.315229 37.81379 -47",
            "-122.295339 37.805046 0",
            "-122.2767 37.798375 0",
            "-122.269746 37.821148 0",
            "-122.2666355 37.8281378 -5",
            "-122.266974 37.828679 0",
            "-122.268134 37.836603 0",
            "-122.272454 37.852068 0",
            "-122.27184 37.851731 0",
            "-122.2818999 37.8527875 0",
            "-122.2740509 37.8574128 0",
            "-122.281302 37.856178 0",
            "-122.2796064 37.8567307 0",
            "-122.2796064 37.8567307 0"
          ]
        }
      }
    }
  }
}'

map.add(b)



map.add(po.compass()
    .pan("none"));

function load(e) {
  var cluster = e.tile.cluster || (e.tile.cluster = kmeans()
      .iterations(16)
      .size(64));

  for (var i = 0; i < e.features.length; i++) {
    cluster.add(e.features[i].data.geometry.coordinates);
  }

  var tile = e.tile, g = tile.element;
  while (g.lastChild) g.removeChild(g.lastChild);

  var means = cluster.means();
  means.sort(function(a, b) { return b.size - a.size; });
  for (var i = 0; i < means.length; i++) {
    var mean = means[i], point = g.appendChild(po.svg("circle"));
    point.setAttribute("cx", mean.x);
    point.setAttribute("cy", mean.y);
    point.setAttribute("r", Math.pow(2, tile.zoom - 11) * Math.sqrt(mean.size));
  }
}




/* URL template for loading Crimespotting data. */
function crimespotting(template) {
  return function(c) {
    var max = 1 << c.zoom, column = c.column % max;
    if (column < 0) column += max;
    return template.replace(/{(.)}/g, function(s, v) {
      switch (v) {
        case "B": {
          var nw = map.coordinateLocation({row: c.row, column: column, zoom: c.zoom}),
              se = map.coordinateLocation({row: c.row + 1, column: column + 1, zoom: c.zoom}),
              pn = Math.ceil(Math.log(c.zoom) / Math.LN2);
          return nw.lon.toFixed(pn)
              + "," + se.lat.toFixed(pn)
              + "," + se.lon.toFixed(pn)
              + "," + nw.lat.toFixed(pn);
        }
      }
      return v;
    });
  };
}

crimespotting.categorize = (function() {
  var categories = {
    "aggravated assault": "violent",
    "murder": "violent",
    "robbery": "violent",
    "simple assault": "violent",
    "arson": "property",
    "burglary": "property",
    "theft": "property",
    "vandalism": "property",
    "vehicle theft": "property",
    "alcohol": "quality",
    "disturbing the peace": "quality",
    "narcotics": "quality",
    "prostitution": "quality"
  };
  return function(d) {
    return categories[d.properties.crime_type.toLowerCase()];
  };
})();

});



