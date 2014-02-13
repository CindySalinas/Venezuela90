$(document).on("ready", empezar);

var idGrados, idEstudiante, idHorarioMateria;
var ced = $.cookie("cedulaPadre");
function empezar(){
	materias();
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarIdPadre.php?jsoncallback=?";
		$.getJSON(url2,{cedula:ced}).done(function(data){
				idPadre = data.idPadres;
				consultarAlumno();
		});
	$('#buscaPS').on("click", horarioMateriaFun);
	$('#horarioHijo').on("click", guardarIdGrado);
	$('.linkAtrasConsultarPA3').on("click",function(){actionBotones('mp','materiaNotas');});guardarIdGrado();
	$('.linkAtras3').on("click",function(){actionBotones('ocularAlClick','mp');});
	guardarIdGrado();
}

function alum () 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarDatosEstudiante.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		idGrados=data.grado;
		idEstudiante=data.idEs;
	});
}
function guardarIdGrado(){
	var cedula2 = $('#listAlum option:selected').val()
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarDatosEstudiante.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=data.grado;
			idEstudiante=data.idEs;
			actionBotones('mp','ocularAlClick');	
		});
	});
}
function consultarAlumno(){
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarIdPadreHijos.php?jsoncallback=?";
		$.getJSON(url2,{idPadre:idPadre}).done(function(data){
				$.each(data,function(i,item){
					$('#listAlum').append("<option value="+item.cedEstud+">"+item.nombAppl+"</option>");
				});

				//idPadre = data.idPadres;
		});
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