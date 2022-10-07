$(document).ready(function(){
   var Conocimientos = $('#conocimientos').offset().top;
   $('#btn-conocimientos').on('click', function(){
        $('html, body').animate({
            scrollTop: 380
        }, 500)
    }); 



});