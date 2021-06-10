$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#animal").prepend("<li>Cat</li>");
    $("ul#noise").prepend("<li>MEOOOOOW</li>");
  });

  $("button#dog").click(function() {
    $("ul#animal").prepend("<li>Dog</li>");
    $("ul#noise").prepend("<li>barrrarroof</li>");
  });

  $("button#fox").click(function() {
    $("ul#animal").prepend("<li>Fox</li>");
    $("ul#noise").prepend("<li>Hahtehahtehatehah</li>");
  });

  $("button#pig").click(function() {
    $("ul#animal").prepend("<li>Pig</li>");
    $("ul#noise").prepend("<li>Weeweewewewi</li>");
  });
})
