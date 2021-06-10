$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#animal").prepend("<li>Cat</li>");
    $("ul#noise").prepend("<li>MEOOOOOW</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#noise").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#animal").prepend("<li>Dog</li>");
    $("ul#noise").prepend("<li>barrrarroof</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#noise").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#fox").click(function() {
    $("ul#animal").prepend("<li>Fox</li>");
    $("ul#noise").prepend("<li>Hahtehahtehatehah</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#noise").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#pig").click(function() {
    $("ul#animal").prepend("<li>Pig</li>");
    $("ul#noise").prepend("<li>Weeweewewewi</li>");
    $("ul#animal").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#noise").children("li").first().click(function() {
      $(this).remove();
    });
  });
})
