//= require kmeans
//= require polymaps
    // a = $('#message_location').attr('data')
    // obj = JSON.parse(a);
    // 47cb42916aae4beb8b9f3bf68ac4e3e8
$(function(){
  if ($('#message_location').length > 0){
   
    // a = $('#message_location').attr('data')
    // obj = JSON.parse(a);

    var po = org.polymaps;
    var svg = po.svg("svg");

    var map = po.map()
        .container(document.getElementById("graphbox").appendChild(svg))
        .center({lat: 37.787, lon: -122.228})
        .zoom(14)
        .zoomRange([12, 16])
        .add(po.interact());

    map.add(po.image()
        .url(po.url("http://{S}tile.cloudmade.com"
        + "/47cb42916aae4beb8b9f3bf68ac4e3e8" // http://cloudmade.com/register
        + "/20760/256/{Z}/{X}/{Y}.png")
        .hosts(["a.", "b.", "c.", ""])));

    map.add(po.geoJson()
        .url("/assets/message_location.json")
        .on("load", load)
        .clip(false)
        .zoom(14));


    /* Create a shadow filter. */
    map.add("svg:filter")
        .attr("id", "shadow")
        .attr("width", "140%")
        .attr("height", "140%")
      .add("svg:feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 3);

    /* Create radial gradient r1. */
    svg.add("svg:radialGradient")
        .attr("id", "r1")
        .attr("fx", 0.5)
        .attr("fy", 0.9)
      .add("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#00bf17")
        .parent()
      .add("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#0f2f13");

    /* Create radial gradient r2. */
    svg.add("svg:radialGradient")
        .attr("id", "r2")
        .attr("fx", 0.5)
        .attr("fy", 0.1)
      .add("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#cccccc")
        .parent()
      .add("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#cccccc")
        .attr("stop-opacity", 0);



    function load(e) {
      var r = 20 * Math.pow(2, e.tile.zoom - 12);
      for (var i = 0; i < e.features.length; i++) {
        var c = e.features[i].element,
            g = c.parent().add("svg:g", c);

        g.attr("transform", "translate(" + c.attr("cx") + "," + c.attr("cy") + ")");

        g.add("svg:circle")
            .attr("r", r)
            .attr("transform", "translate(" + r + ",0)skewX(-45)")
            .attr("opacity", .5)
            .attr("filter", "url(#shadow)");

        g.add(c
            .attr("fill", "url(#r1)")
            .attr("r", r)
            .attr("cx", null)
            .attr("cy", null));

        g.add("svg:circle")
            .attr("transform", "scale(.95,1)")
            .attr("fill", "url(#r2)")
            .attr("r", r);
      }
    }
  } 
});



