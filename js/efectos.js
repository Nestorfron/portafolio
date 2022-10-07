$(document).ready(function() {
	
        var Inicio = $('#inicio').offset().top,
            Conocimientos = $('#conocimientos').offset().top,
            Proyectos = $('#proyectos').offset().top,
            Contacto = $('#contacto').offset().top;
    
    
        $('#btn-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: Inicio
            }, 500);
        });
    
        $('#btn-conocimientos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: Conocimientos
            }, 500);
        });
    
        $('#btn-proyectos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: Proyectos
            }, 500);
        });
    
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate ({
                scrollTop: Contacto
            }, 500);
        });
    });