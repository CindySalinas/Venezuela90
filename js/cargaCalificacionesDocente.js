$(document).on("ready", empezar);
var idDocente;
function empezar(){
	var cedula2=$.cookie("cedulaProf");

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){	
			idDocente = item.idDocente;	
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMateriasDocenteHorario.php?jsoncallback=?";
			$.getJSON(url3,{
			}).done(function(data3){
				$.each(data3, function(i,item){	
					$(".materias").append("<option class='optionConsultar2' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
				});												
			});			
		});
	});
	/*$('.linkAtrasTablaIngresarPEL1').on("click",function(){actionBotones('formIngresarPEL1','divIngresarPEL1');});*/
}

function resetear()
{
	$('input[type=text]').val("");
	$('textarea').val("");

}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}