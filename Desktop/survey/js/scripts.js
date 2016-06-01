$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var bornInput = $("input#born").val();
    var colorInput = $("input#color").val();


    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".born").text(bornInput)


    $("#story").show();

    event.preventDefault();
  });
});
