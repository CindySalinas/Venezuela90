$(document).on("ready", empezar);

function empezar(){
	
	prueba();
	$("submit").on("click", prueba)
}    

function prueba(){
	 // Realizar la petición
    var url = "http://127.0.0.1:8080/JsonVenezuela90/IniciarSesion.php?jsoncallback=?";
    
    $.getJSON(url, function(data){

      for (var i=0;i < data.length;i++){
        var algo = data[i];
        var titulos = "<h3>"+ algo.titulo+ "</h3>";
        var contenidos = "<p>"+ algo.contenido + algo.aa+ "</p>";
         cons.append(titulos,contenidos);
      }
     })     
    
    
}