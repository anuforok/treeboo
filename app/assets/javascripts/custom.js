

var Charts;
Charts = (function($) {
    "use strict";
    var   handleJustGageCharts, handleMiniPieChart, handleSparklineCharts, init;
    init = function() {
        
        handleSparklineCharts();
        handleMiniPieChart();
        handleJustGageCharts();
    };
   
    handleSparklineCharts = function() {
        $("#compositebar").sparkline("html", {type: "bar", barColor: "#aaf"});
        $("#compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {composite: true, fillColor: false, lineColor: "red"});
        $("#compositebar1").sparkline("html", {type: "bar", barColor: "#aaf"});
        $("#compositebar1").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {composite: true, fillColor: false, lineColor: "red"});
        $("#linecustom").sparkline("html", {height: "1.5em", width: "8em", lineColor: "#f00", fillColor: "#ffa", minSpotColor: false, maxSpotColor: false, spotColor: "#77f", spotRadius: 3});
        $("#linecustom1").sparkline("html", {height: "2.5em", width: "8em", lineColor: "#f00", fillColor: "#ffa", minSpotColor: false, maxSpotColor: false, spotColor: "#77f", spotRadius: 3});
        $(".sparktristate").sparkline("html", {type: "tristate"});
        $(".sparktristatecols").sparkline("html", {type: "tristate", colorMap: {"-2": "#fa7", 2: "#44f"}});
    };
    handleMiniPieChart = function() {
        var charts;
        charts = $(".percentage");
        charts.easyPieChart({animate: 1000, barColor: "#da4f49", trackColor: "#f2f2f2", scaleColor: "#dfe0e0"});
        $(".updatePieCharts").on("click", function(e) {
            e.preventDefault();
            return charts.each(function() {
                var newValue;
                newValue = Math.floor(100 * Math.random());
                $(this).data("easyPieChart").update(newValue);
                return $("span", this).text(newValue);
            });
        });
    };
    handleJustGageCharts = function() {
        var g1, g2, g3, g4;
        g1 = new JustGage({id: "g1", value: getRandomInt(0, 100), min: 0, max: 100, title: "Big Fella", label: "pounds"});
        g2 = new JustGage({id: "g2", value: getRandomInt(0, 100), min: 0, max: 100, title: "Small Buddy", label: "oz"});
        g3 = new JustGage({id: "g3", value: getRandomInt(0, 100), min: 0, max: 100, title: "Tiny Lad", label: "oz"});
        g4 = new JustGage({id: "g4", value: getRandomInt(0, 100), min: 0, max: 100, title: "Little Pal", label: "oz"});
        setInterval((function() {
            g1.refresh(getRandomInt(50, 100));
            g2.refresh(getRandomInt(50, 100));
            g3.refresh(getRandomInt(0, 50));
            return g4.refresh(getRandomInt(0, 50));
        }), 2500);
    };
    return{init: init};
})(jQuery);



    //Slim scroll
    
     $('#notes').slimScroll({
      alwaysVisible: true,
      railVisible: true,
        color: '#2C3E50',
        height: '320px'
  });
   
  

  



					