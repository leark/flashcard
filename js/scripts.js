$(document).ready(function () {
  $('.card-title').click(function () {
    $(this).siblings().toggle();
    $(this).toggle();
  });

  $('.card-text').click(function () {
    $(this).siblings().toggle();
    $(this).toggle();
  });
});
