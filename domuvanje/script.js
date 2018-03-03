$(document).ready(function() {
  $('[name="karta"]').change(function() {
    $('img').addClass('skrijgo');
    $(".informacii").addClass('skrijgo');
    $('img#' + $(this).attr('id') + 'slika').removeClass('skrijgo');
    $('#' + $(this).attr('id') + 'tekst').removeClass('skrijgo');
    $("#mitegeo").removeClass("skrijgo");
  });
});