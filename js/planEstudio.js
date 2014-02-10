$(document).on("ready", empezar);

var idGrados;

function empezar(){

	materias();
	var cedula2=$.cookie("cedulaStudent");	

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});

	$('.planSemanal').on("click",function(){actionBotones('consultaPS','menuPrincipal');});

	$('.linkAtrasConsultaPs').on("click",function(){actionBotones('menuPrincipal','consultaPS');});

	$('.planLapso').on("click",function(){actionBotones('consultaPL','menuPrincipal');});

	$('.linkAtrasconsultaPL').on("click",function(){actionBotones('menuPrincipal','consultaPL');});

	$('#buscaPS').on("click", buscarPs);
	$('#buscaPL').on("click", buscarPl);
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function buscarPs () 
{
	var materia = $("#materiaSelect1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		materia:materia,
		grado:idGrados
	}).done(function(data){
		$.each(data, function(i,item){	
			var url = "consultarplanestudiosemanal.html";
			window.location=url+"?materiaDocente="+ item.idHorarioMateria;
		});
	});

}

function buscarPl () 
{
	var materia = $("#materiaSelect2 option:selected").val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		materia:materia,
		grado:idGrados
	}).done(function(data){
		$.each(data, function(i,item){	
			var url = "consultarplanestudioporlapso.html";
			window.location=url+"?materiaDocente="+ item.idHorarioMateria;
		});
	});
}

function materias () 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){	
			$(".materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});
}