$(document).ready(function() {
  $("form#selectAnimal").submit(function(event) {
    var outputAnimal = $("select#animal").val();

    if (outputAnimal === 'turtle')  {
      $('#turtle').show();
    } else if (outputAnimal === 'snake') {
      $('#snake').show();
    }
    else {
      $('#otter').show();
    }
  });
});

      // var outputAnimal = "turtle";
      //
      // if (outputAnimal === "turtle") {
      //   $('#turtle').show();
      //}
