$(document).ready(function() {
   // setando o elemento do meu menu
   var menu = $('#cabecalho'); 
   // setando offset
   var navpos = menu.offset();  
   //console.log(navpos.top);
            // pegando a ação de rolar a tela 
            $(window).bind('scroll', function() {
                // verificando se estou no topo da tela ou não               
                if ($(window).scrollTop() > navpos.top)
                 {
                    // se não estiver faço o menu seguir 
                 menu.addClass('navbar-fixed-top');
                 menu.addClass('nav-color');
                 menu.addClass('transparente');
                
                  }
               else
                  {
                    // se estou no topo da tela deixo ele no lugar original  
                 menu.removeClass('navbar-fixed-top');
                 menu.removeClass('transparente');
                menu.removeClass('nav-color');
                  }
            });
}); 
	
