$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul").prepend("<li>Cat</li>");
  });

  $("button#dog").click(function() {
    $("ul").prepend("<li>Dog</li>");
  });

  $("button#fox").click(function() {
    $("ul").prepend("<li>Fox</li>");
  });

  $("button#pig").click(function() {
    $("ul").prepend("<li>Pig</li>");
  });
})
