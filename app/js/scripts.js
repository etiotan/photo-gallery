

$(document).ready(function(){
// loader did it this way because not enough content.
  setTimeout(function(){
    $('#wrapper').fadeOut();
    $('html').css("overflow-y", "auto");
    $(".flex-container").css("display", "flex")
  }, 4000);

//Filter Flowers
$("li:contains('Flowers')").click(function(){
  $(".grid-item").not(".flowers").hide(500);
  $(".flowers").show(500);
});
//Filter Interior
$("li:contains('Interior')").click(function(){
  $(".grid-item").not(".interior").hide(500);
  $(".interior").show(500);
});
//Filter Nature
$("li:contains('Nature')").click(function(){
  $(".grid-item").not(".nature").hide(500);
  $(".nature").show(500);
});
//Filter Black&White
$("li:contains('Black & White')").click(function(){
  $(".grid-item").not(".black-white").hide(500);
  $(".black-white").show(500);
});
//Filter All
$("li:contains('Show All'), .description-container h1").click(function(){
  $(".grid-item").show(500);
});

//Open Image
// $("img").click(function(){
//   var url = window.location.href;
//   var filename = $(this).attr("src")
//    window.open(url + "/"+ filename, '_blank');
// })

//Hover description-container
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .show();
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});

//fancy box-
$(".fancybox").each(function(){

$(this).fancybox({
       padding: 0,
       href : $(this).attr('src'),
       openEffect	: 'elastic',
       closeEffect	: 'elastic',
    	  helpers : {
        overlay : {

            css : {
                'background' : 'rgba(255, 255, 255, 0.5)',


            }

        }
    }

   })

});


});
