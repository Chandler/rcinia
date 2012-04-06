//= require kmeans
//= require polymaps

$(function(){ 
  if ($('#message_location').length > 0){
    var po = org.polymaps;
    var map = po.map()
        .container(document.getElementById("graphbox").appendChild(po.svg("svg")))
        .center({lat: 37.807437, lon: -122.359774})
        .zoom(12)
        .zoomRange([12, 14])
        .add(po.interact());

    map.add(po.image()
        .url(po.url("http://{S}tile.cloudmade.com"
        + "/47cb42916aae4beb8b9f3bf68ac4e3e8" // http://cloudmade.com/register
        + "/20760/256/{Z}/{X}/{Y}.png")
        .hosts(["a.", "b.", "c.", ""])));

    // map.add(po.geoJson()
    //     .url(crimespotting("http://oakland.crimespotting.org"
    //         + "/crime-data"
    //         + "?count=1000"
    //         + "&format=json"
    //         + "&bbox={B}"
    //         + "&dstart=2010-04-01"
    //         + "&dend=2010-05-01"))
    //     .on("load", load)
    //     .clip(false)
    //     .zoom(14));

    // function load(e) {
    //   var cluster = e.tile.cluster || (e.tile.cluster = kmeans()
    //       .iterations(16)
    //       .size(64));

    //   for (var i = 0; i < e.features.length; i++) {
    //     cluster.add(e.features[i].data.geometry.coordinates);
    //   }

    //   var tile = e.tile, g = tile.element;
    //   while (g.lastChild) g.removeChild(g.lastChild);

    //   var means = cluster.means();
    //   means.sort(function(a, b) { return b.size - a.size; });
    //   for (var i = 0; i < means.length; i++) {
    //     var mean = means[i], point = g.appendChild(po.svg("circle"));
    //     point.setAttribute("cx", mean.x);
    //     point.setAttribute("cy", mean.y);
    //     point.setAttribute("r", Math.pow(2, tile.zoom - 11) * Math.sqrt(mean.size));
    //   }
    // }


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
  }
});



