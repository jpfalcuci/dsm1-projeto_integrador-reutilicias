$(document).ready(function(){
    var botao = $('.consoles');
    var dropdown = $('.submenu');

    botao.on('click',function(event){
    dropdown.stop(true,true).slideToggle();
    event.stopPropagation();
    });
});

$(document).ready(function(){
    var botao = $('.login');
    var dropdown = $('.inputLog');

    botao.on('click',function(event){
    dropdown.stop(true,true).slideToggle();
    event.stopPropagation();
    });
});


