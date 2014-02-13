$(document).on("ready", empezar);

var idGrados, idEstudiante, idHorarioMateria;

function empezar(){
	materias();
	var cedula2=$.cookie("cedulaStudent");	

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarDatosEstudiante.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		idGrados=data.grado;
		idEstudiante=data.idEs;
	});
	$('#buscaPS').on("click", horarioMateriaFun);
	$('.linkAtrasConsultarPA3').on("click",function(){actionBotones('mp','materiaNotas');});
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
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

function horarioMateriaFun() 
{
	var materia = $("#materiaSelect1 option:selected").val();
	$("#materiaConsultarPA2").text($("#materiaSelect1 option:selected").text());
	$("#gradoConsultarPA2").text(idGrados);

	var lapso = $("#lapsoSelect1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		materia:materia,
		grado:idGrados
	}).done(function(data){
		$.each(data, function(i,item){	
			idHorarioMateria = item.idHorarioMateria;
			$(".filaAlumnosConsultar").remove();
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCalificacionesEstudiantePA.php?jsoncallback=?";
			$.getJSON(url3,{
				estudiante:idEstudiante,
				horarioMateria:idHorarioMateria,
				lapso:lapso
			}).done(function(data3){
			$.each(data3, function(i,item){	
				$("#tbodyConsultarPA").append("<tr class='filaAlumnosConsultar'><td>"+item.descipcion+"</td><td>"+item.calificacion+"</td><td>"+item.porcentaje+"</td><td>"+item.puntos+"</td></tr>");
			});	
		});

		actionBotones('materiaNotas','mp');	
		});
	});
}