$(document).ready(function () {
    $("body").append("<div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <br/>");
    $("body").append("<button>clear</button>","<button id ='random'>random</button>","<button id ='orange'>orange</button>")
});



$(function() {

     $('div').hover(
         function () {
           $(this).css({"background":"red"});
         },
         function () {
           $(this).css({"background":"orange"});
         }

     );

   });

$(function() {

  $("button").on("click", function() {
    $("div").css("background", "#0099CC");
  });
});




$(function() {
    $("#random").on("click", function() {
    $('div').hover(function() {
    $(this).css('background', get_random_color);
  });
});
});
var get_random_color = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};




$(function() {
    $("#orange").on("click", function() {
    $('div').hover(function() {
    $(this).css('background', "orange");
  });
});
});











