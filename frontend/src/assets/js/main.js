// team member section animation
$(document).ready(function () {
  $(".image-container img").hide();
  $(".image-container img").each(function () {
    $(this).on("load", function () {
      $(this).fadeIn(500);
    });
  });
});
