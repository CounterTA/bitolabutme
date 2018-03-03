$(document).ready(function() {
  $('[name="karta"]').change(function() {
    $('img').addClass('skrijgo');
    $(".informacii").addClass('skrijgo');
    $('img#' + $(this).attr('id') + 'line').removeClass('skrijgo');
    $('#' + $(this).attr('id') + 'table').removeClass('skrijgo');
  });
});