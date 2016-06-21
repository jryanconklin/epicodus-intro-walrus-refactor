$(document).ready(function() {
  $("#main").click(function() { //I'm guessing the solution is on this line. 
    var elements = ["<h1>", "<p>", "<img>"];
    elements.forEach(function(element) {
      alert("I am a " + element + "!");
    });
  });
});







  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
