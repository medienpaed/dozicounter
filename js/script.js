var satz = 90;
var intervall = 500;

var summe = 0;
var kosten = (satz / (3600 * (1000 / intervall)));
var counter = 0;

$(document).ready(function() {
    $("#anzeige").text(summe.toFixed(2)+" CHF");
    $("#start").click(function() {
        $(this).addClass("disabled");
        $(this).removeClass("active");
        $("#stop").addClass("active");
        $("#stop").removeClass("disabled");
        $("#reset").addClass("disabled");
        $("#reset").removeClass("active");
        counter = setInterval(function(){summe = summe + kosten; $("#anzeige").text(summe.toFixed(2)+" CHF");},intervall);
    });
    $("#stop").click(function(){
        $(this).addClass("disabled");
        $(this).removeClass("active");
        $("#start").addClass("active");
        $("#start").removeClass("disabled");
        $("#reset").addClass("active");
        $("#reset").removeClass("disabled");
        clearInterval(counter);
    });
    $("#reset").click(function(){
      $(this).animate({opacity: '0.5'},"fast");
      $(this).animate({opacity: '1.0'},"fast");  
      summe = 0;
      $("#anzeige").text(summe.toFixed(2)+" CHF");
    });

});
