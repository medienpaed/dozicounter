var satz = 90;
var intervall = 500;

var summe = 0;
var kosten = (satz / (3600 * (1000 / intervall)));
var counter = 0;
var anwesende = 1;

var disable = function (element){
  $(element).addClass("disabled");
  $(element).removeClass("active");
};

var enable = function (element){
  $(element).addClass("active");
  $(element).removeClass("disabled");
};

$(document).ready(function() {
    $("#anzeige").text(summe.toFixed(2)+" CHF");
    $("#start").click(function() {
      anwesende = document.getElementById("anwesende").value;;
      disable(this);
      enable("#stop");
      disable("#reset");
      counter = setInterval(function(){
        summe = summe + (kosten * anwesende);
        $("#anzeige").text(summe.toFixed(2)+" CHF");
      },intervall);
    });
    $("#stop").click(function(){
      disable(this);
      enable("#start");
      enable("#reset");
      clearInterval(counter);
    });
    $("#reset").click(function(){
      $(this).animate({opacity: '0.5'},"fast");
      $(this).animate({opacity: '1.0'},"fast");
      summe = 0;
      $("#anzeige").text(summe.toFixed(2)+" CHF");
    });

});
