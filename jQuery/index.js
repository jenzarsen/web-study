// $("button").click(function(){
//     $("h1").css("color","purple");
// })


// $("input").keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("click", function(){
//     $("h1").css("color","purple");
// });

// $("h1").before("<button>New</button>");

$("button").on("click", function(){
    $("h1").fadeOut().fadeIn().animate({opacity:0.5});
})