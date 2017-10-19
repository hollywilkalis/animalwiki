$(document).ready(function() {
  $("form#selectAnimal").change(function(event) {
    var outputAnimal = $("select#animal").val();

    if (outputAnimal === 'turtle')  {
      $('#turtle').show();
      $('#snake','#otter').hide();
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
