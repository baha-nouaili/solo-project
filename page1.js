$(document).ready(function(){
    $('.quattro').hide() 
    $('.troisieme').hide() 
    $('#hide').click(function(){ 
        $('.premier').hide(3000) 
        $(".troisieme").show(3000)    
    }) 
    $('#hide1').click(function(){
        $('.deuxieme').hide(3000)
        $('.quattro').show(3000)
    })
}) ;  






