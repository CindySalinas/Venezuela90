$(document).on("ready", empezar);
var idGrados;
function empezar(){
	
	llenarMaterias();
	llenarGrado();

	cedula2=$.cookie("cedulaStudent");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});

	$('.linkAtrasNoticias3').on("click",function(){actionBotones('notnot','noticiasClass3');});

	$('#consultarDescargar').on("click", consultaDatos);

} 

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
function llenarMaterias() 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){
			$("#materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
			$(".materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});		
}
function llenarGrado() 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGrado.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){
			$("#grado").append("<option value='"+item.idGrado+"'>"+item.grado+"</option>");
			$(".grados").append("<option value='"+item.idGrado+"'>"+item.grado+"</option>");
		});
	});		
}

function consultaDatos() 
{	
	var idMat = $('#materiasConsulta option:selected').val();
	var idYearr = $('#yearEscolarConsulta option:selected').val();

	$('.listasaaa').remove();
	var lista = $('.arch');
	var nom ,nom2;
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaAsignacionAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		grado: idGrados, 
  		year: idYearr,
  		materia: idMat
	}).done(function(data){
		if(data.num>0)
		{
			var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno3.php?jsoncallback=?";
			$.getJSON(url,{
				grado: idGrados, 
		  		year: idYearr,
		  		materia: idMat
			}).done(function(data){
				$.each(data, function(i,item){
					actionBotones('noticiasClass3','notnot');
					var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/mostrarMaterial.php?jsoncallback=?";
				$.getJSON(url,{
					docenteMateria:item.idHorarioMateria
				}).done(function(data){					
					$.each(data,function(i,item){
						nom = item.ruta;
						nom2 = nom.replace("Archivo/","");
						lista.append("<li class='listasaaa'><a id='bloque6' href='../Materiales/"+item.ruta+"' target='_blank'></a><a class='textoAbajo' href='../Materiales/"+item.ruta+"' target='_blank'>"+nom2+"</a></li>");
					})
					
				});
				});
			});
		}
		else
			alert("No Se Encuentra Los Datos Seleccionados");
	});

}
