//= require kmeans
//= require polymaps
    // a = $('#message_location').attr('data')
    // obj = JSON.parse(a);
    // 47cb42916aae4beb8b9f3bf68ac4e3e8


$(function(){
  if ($('#message_location').length > 0){

    $( "#slider" ).slider({
        value: 37,
        min: 1,
        max: 700,
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.value );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );

    // a = $('#message_location').attr('data')
    // obj = JSON.parse(a);

    var po = org.polymaps;
    var svg = po.svg("svg");

    var map = po.map()
        .container(document.getElementById("graphbox").appendChild(svg))
        .center({lat: 37.808522, lon: -122.364581})
        .zoom(12)
        .zoomRange([12, 13])
        .add(po.interact());

    map.add(po.image()
        .url(po.url("http://{S}tile.cloudmade.com"
        + "/47cb42916aae4beb8b9f3bf68ac4e3e8" // http://cloudmade.com/register
        + "/998/256/{Z}/{X}/{Y}.png")
        .hosts(["a.", "b.", "c.", ""])));

    map.add(po.geoJson()
        .url("/assets/location.json")
        .on("load", load)
        .clip(false)
        .zoom(14));

    // function load(e) {
    //   var cluster = e.tile.cluster || (e.tile.cluster = kmeans()
    //       .iterations(2)
    //       .size(1000));

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



     /** Post-process the GeoJSON points! */
    function load(e) {
      var r =  15;
      for (var i = 0; i < e.features.length; i++) {
        var c = e.features[i]

        c.element.setAttribute("r", r);
        if(c.data.properties.dayofweek == "weekend")
            attr = "1"
        else
            attr = "2"
        c.element.setAttribute("id", attr);
      }
    }

  } 
});



