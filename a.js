!(function (d3) {
$("acontent").empty();
$("bcontent").empty();

$("acontent").append("<div id='timeline'></div>");
$("acontent").append("<div id='map'></div>");

	var width = 960,
    height = 600;

var svg = d3.select("acontent").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");


var map = d3.geomap.choropleth()
  .geofile('/d3-geomap-1.0.1/topojson/countries/USA.json')
  .projection(d3.geo.albersUsa)
  .column('1830')
  .unitId('fips')
  .scale(1000)
  .legend(true);

d3.csv('/data/50states_sentiment_years_nulled.csv', function(error, data) {
  d3.select("#map")
    .datum(data)
    .call(map.draw, map);
})


d3.select("#timeline").call(d3.slider().axis(true).min(1830).max(1920).step(10).on("slide", function(e, value) {
  //load diff map
  var m = document.getElementById("map");
  m.removeChild(m.childNodes[0]);

  var map = d3.geomap.choropleth()
    .geofile('/d3-geomap-1.0.1/topojson/countries/USA.json')
    .projection(d3.geo.albersUsa)
    .column(value)
    .unitId('fips')
    .scale(1000)
    .legend(true);

  d3.csv('/data/50states_sentiment_years_nulled.csv', function(error, data) {
    d3.select("#map")
      .datum(data)
      .call(map.draw, map);
  })

}));
})(d3);