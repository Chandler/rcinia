//= require kmeans
//= require polymaps
    // a = $('#message_location').attr('data')
    // obj = JSON.parse(a);
    // 47cb42916aae4beb8b9f3bf68ac4e3e8

$(function(){
  if ($('#message_location').length > 0){
    resolution = 24 * 4 * 4;
    $( "#slider" ).slider({
        value: 8,
        min: 1,
        max: resolution,
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.value );
            points = document.getElementsByName(ui.value);

            var time_id = Math.round(ui.value/4) + 28 - 5 //5 offset for the all button, 28 offset since the day starts at 7am
            console.log("y")
            console.log(ui.value)
            console.log(time_id)
            console.log("x")
            if(time_id > 96 ) time_id = time_id - 91; //reset back to midnight...just trust me.
            if(Math.round(ui.value/4) <= 5) {
                $('circle').show();
            }else{
                $('circle').hide();
                var offset_values = [-4,-3,-2,-1,0,1,2,3,4];
                for (i=0;i<=offset_values.length;i++){
                    $('circle[name=' + (time_id + offset_values[i]) + ']').show()
                }   
            }
        }
    });

    var po = org.polymaps;
    var svg = po.svg("svg");

    var map = po.map()
        .container(document.getElementById("graphbox").appendChild(svg))
        .center({lat: 37.808522, lon: -122.364581})
        .zoom(12)
        .zoomRange([12, 12]);

    map.add(po.image()
        .url(po.url("http://{S}tile.cloudmade.com"
        + "/47cb42916aae4beb8b9f3bf68ac4e3e8" // http://cloudmade.com/register
        + "/998/256/{Z}/{X}/{Y}.png")
        .hosts(["a.", "b.", "c.", ""])));

    map.add(po.geoJson()
        .url("/assets/location.json")
        .on("load", load)
        .clip(false)
        .zoom(12));


    /**Kmeans clustering loader, decided not to use this but it might come in handy later. **/
    
    // function load(e) {
    //   var cluster = e.tile.cluster || (e.tile.cluster = kmeans()
    //       .iterations(4)
    //       .size(1000));

    //   for (var i = 0; i < e.features.length; i++) {
    //     cluster.add(e.features[i].data);
    //   }
    //   var tile = e.tile, g = tile.element;
    //   while (g.lastChild) g.removeChild(g.lastChild);

    //   var means = cluster.means();
    //   means.sort(function(a, b) { return b.size - a.size; });
    //   for (var i = 0; i < means.length; i++) {
    //     var mean = means[i], point = g.appendChild(po.svg("circle"));
    //     point.setAttribute("cx", mean.x);
    //     point.setAttribute("cy", mean.y);
    //     point.setAttribute("r", 3 * Math.sqrt(mean.size));
    //     time_ids = []
    //     for(var j = 0; j < mean.points.length; j++){
    //         time_ids[j] = mean.points[j].properties.time_id
    //     }
    //     point.setAttribute("points", time_ids);
    //   }
    // }



     /** Post-process the GeoJSON points! */
    function load(e) {
      var r =  4;
      for (var i = 0; i < e.features.length; i++) {
        var c = e.features[i]
        c.element.setAttribute("r", r);
        c.element.setAttribute("name", c.data.properties.time_id);
        c.element.setAttribute("name", c.data.properties.time_id);
        c.element.setAttribute("dayofweek", c.data.properties.dayofweek);
      }
    }

  } 
});



