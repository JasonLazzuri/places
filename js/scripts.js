function Places(location,landmark,time){
  this.locale = location;
  this.landmark = landmark;
  this.time = time;
}

Places.prototype.travel = function() {
  return this.locale ;
}



$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();


    var locate = $("#locale").val();
    var land = $("#landmark").val();
    var clock = $("#time").val();

    var newPlaces = new Places(locate, land, clock);

    $("ul#contacts").append("<li><span class='contact'>" + newPlaces.travel() + "</span></li>");

    $(".contact").last().click(function() {
      $("#task").show();
      $(".location").text(newPlaces.locale);
      $(".landmark").text(newPlaces.landmark);
      $(".time").text(newPlaces.time);



    });

    $("input#locale").val("");

  });
});
