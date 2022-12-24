$("h1").addClass("hello");
$("button").html("<strong>Tollywood</strong>");
$("button").css("background-color","yellow");
$("a").attr("href","https://www.google.com");
$("img").attr("src","images/google.png");
$("img").addClass("google-image");
$("h1").click (function(){
  $("button").css("color","red");
})
$("input").keypress(function(event) {
  $("h1").text(event.key);
})
$("h1").on("mouseover",function(){
  $("button").text("Hello!");
})
$("h1").after("<button>running</button>");
// $("h1").before("<button>move</button>");
