$(document).on("ready", empezar);

var idGrados;
var ced = $.cookie("cedulaPadre");
function empezar(){
	$('.ocultarOtroMenu').css("display","none");;
	materias();
	var cedula2=$.cookie("cedulaStudent");	

	/*var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});
*/
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarIdPadre.php?jsoncallback=?";
		$.getJSON(url2,{cedula:ced}).done(function(data){
				idPadre = data.idPadres;
				consultarAlumno();
		});
	$('.planSemanal').on("click",function(){actionBotones('consultaPS','menuPrincipal,#atrasGL1');});

	$('.linkAtrasConsultaPs').on("click",function(){actionBotones('menuPrincipal,#atrasGL1','consultaPS');});

	$('.planLapso').on("click",function(){actionBotones('consultaPL','menuPrincipal,#atrasGL1');});

	$('.linkAtrasconsultaPL').on("click",function(){actionBotones('menuPrincipal,#atrasGL1','consultaPL');});

	$('#buscaPS').on("click", function(){ buscarPs(idGrados)});
	$('#buscaPL').on("click", function(){  buscarPl(idGrados)});
	$('#horarioHijo').on("click", function(){
		guardarIdGrado();
		actionBotones('ocultarOtroMenu' ,'ocularAlClick');

	})
	$('#atrasGL1 > #atras, #atrasGL1 > #at').on("click",function(){
		actionBotones('ocularAlClick' ,'ocultarOtroMenu');
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
function guardarIdGrado(){
	var cedula2 = $('#listAlum option:selected').val()
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});
}
function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function buscarPs (grado) 
{
	var materia = $("#materiaSelect1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		materia:materia,
		grado:grado
	}).done(function(data){
		$.each(data, function(i,item){	
			var url = "consultarplanestudiosemanal.html";
			window.location=url+"?materiaDocente="+ item.idHorarioMateria;
		});
	});

}

function buscarPl (grado) 
{
	var materia = $("#materiaSelect2 option:selected").val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapsoAlumno.php?jsoncallback=?";
	$.getJSON(url,{
		materia:materia,
		grado:grado
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