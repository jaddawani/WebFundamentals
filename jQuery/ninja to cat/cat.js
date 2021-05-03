// $(document).ready(function(){
//     $("img").click(function(){
       
//     var temp=$(this).attr("src");
//     console.log ($(this).attr("data-alt-src"));
//     $(this).attr("src","data-alt-src");
//     $(this).attr("data-alt-src","temp");
   


//     });

// });


$(document).ready(function () {
    $('img').click(function() {
      var srccat = $(this).attr('srccat');
      var alt2 = $(this).attr('alt2');
      $(this).attr({
        //   temp : scr,
        src : srccat,
        alt : alt2
      });
  
    });
  
  })