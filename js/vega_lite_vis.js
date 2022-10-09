var vg_1 = "https://raw.githubusercontent.com/Sami-Hussein/FIT3179-Homework/main/js/homework_map.vg";
var vg_2 = "https://raw.githubusercontent.com/Sami-Hussein/FIT3179-Homework/main/js/homework_bar.vg"
vegaEmbed("#homework", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#barchart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);