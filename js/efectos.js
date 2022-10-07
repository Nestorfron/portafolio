$(document).ready(function(){
    
    var concimientos = $('#conocimientos').offset().top;
    var proyectos = $('#proyectos').offset().top;
    var contacto = $('#contacto').offset().top;

    $('#btn-conocimientos').on('click', function(){
        $('html, body').animate({
            scrollTop: concimientos
        }, 200);
    })

    $('#btn-proyectos').on('click', function(){
        $('html, body').animate({
            scrollTop: proyectos
        }, 200);
    })
    
    $('#btn-contacto').on('click', function(){
        $('html, body').animate({
            scrollTop: contacto -50
        }, 200);
    })
});