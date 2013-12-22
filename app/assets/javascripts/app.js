(function($){

  //========== views 
  var SmsTimeSeriesView = Backbone.View.extend({
    el: $('body'),
    initialize: function(){
      _.bindAll(this, 'render'); 
    },
    render: function(){
      nv.addGraph(function() {
        var chart = nv.models.stackedAreaChart()
                      .x(function(d) { return d[0] })
                      .y(function(d) { return d[1] })
                      .clipEdge(true);
        chart.xAxis
            .showMaxMin(false)
            .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });
        chart.yAxis
            .tickFormat(d3.format(',.2f'));
        d3.select('#content svg')
          .datum(smsTimeseries.toJSON())
            .transition().duration(500).call(chart);
        nv.utils.windowResize(chart.update);
          return chart;
      });
    }
  });
  //========== Models
  var SmsTimeseries = Backbone.Collection.extend({
      url: 'chart/sms_timeseries'
  });

  //========== start
  var smsView = new SmsTimeSeriesView();      
  var smsTimeseries = new SmsTimeseries();
  
  smsTimeseries.on("reset", function(){
    smsView.render();
  })
  smsTimeseries.fetch();

})(jQuery);



 // var AppRouter = Backbone.Router.extend({
 //      routes: {
 //          "*actions": "defaultRoute" // matches http://example.com/#anything-here
 //      }
 //  });
 //  // Initiate the router
 //  var app_router = new AppRouter;

 //  app_router.on('route:defaultRoute', function(actions) {
 //      alert(actions);
 //  })

 //  // Start Backbone history a necessary step for bookmarkable URL's
 //  Backbone.history.start();