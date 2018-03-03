$(document).ready(function(){
  $("#istorija").change(function() {
    if(this.checked) {
        $("#muzejcheto").removeClass("skrijgo");
    } else {
        $("#muzejcheto").addClass("skrijgo");
    }
  });


})