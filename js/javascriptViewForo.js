$(document).on("ready", inicio);
var iddelforo, nombreDelTema;

function inicio()
{	
	obtenerValores();
	consultarForo();
	
	
}
function linksCambio(nom){
	var url = "foroResponder.html";
	window.location=url+"?foro="+iddelforo + "&tema="+nom;
}
//Llamas a la funcion que lee la url
function obtenerValores()
{
	iddelforo=getQueryVariable("foro");
}
//Lee las Variables que se mandan por GET
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) 
       {
            var pair = vars[i].split("=");
            if(pair[0] == variable)
            {
            	return pair[1];
            }
       }
       return(false);
}

/*Funcion para ver todos el foro*/
function consultarForo()
{		
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/verForoSeleccionado.php?jsoncallback=?";
		$.getJSON(url,{fselect:iddelforo
		}).done(function(data){
	 	 	if(data.num != 0){
	 	 		$.each(data, function(i,item){
					$("#nomTemaP").text(item.nombreTema);
					$("#nomCreadorP").text("De "+item.nombre + " " + item.apellido + " - " + item.fecha + ", " + item.hora);
					$("#tex").text("");
					$("#tex").append(item.tema);
					$("#responderForo").attr("href","foroResponder.html?foro="+iddelforo+"&tema="+item.nombreTema);
				});
			}
			else
			{
				$("#todoForo").addClass("none");
				$("#respuestasForos").addClass("none");
				$("#noticias").append("<h3>No se encontro el foro seleccionado</h3>")
			}
		});
}