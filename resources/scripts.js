/*
$(".nav-link").click(function(){
    $("#section").load("empresa.html");
    return false;
});
*/

/*function enlace(){
    var pagina=$(".nav-link").attr("href");
    console.log(pagina);
    $("#section").load("empresa.html");
    return false; 
}*/
function enlace(evento){
    $("#section").html('<div class="loader"><img src="resources/tenor.gif"><p>Cargando....</p></div>');
    $('#section').fadeOut(200, function(){
        $("#section").load(evento).fadeIn(2000)
    });
    return false;
}