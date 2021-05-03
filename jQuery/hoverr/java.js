$(document).ready(function(){
    $('img').hover(function(){
        $(this).attr('src', 'download3.jpg');
    }, function(){
        $(this).attr('src', 'download.jpg');
    });


});