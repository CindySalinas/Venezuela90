$(document).on("ready", empezar);
var idDocente;

var cedulaIngresarPA, materiaIngresarPA, yearIngresarPA, lapsoIngresarPA;

var yearIngresarPG, materiaIngresarPG, yearIngresarPG, lapsoIngresarPG;

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
	$('.ingresarMP').on("click",function(){actionBotones('ingresarMenu','menuPrincipal');});
	$('.consultarMP').on("click",function(){actionBotones('consultarMenu','menuPrincipal');});
	$('.modificarMP').on("click",function(){actionBotones('modificarMenu','menuPrincipal');});

	$('.linkAtrasIngresar1').on("click",function(){actionBotones('menuPrincipal','ingresarMenu');});
	$('.linkAtrasConsultar1').on("click",function(){actionBotones('menuPrincipal','consultarMenu');});
	$('.linkAtrasModificar1').on("click",function(){actionBotones('menuPrincipal','modificarMenu');});

	$('.ingresarMPP').on("click",function(){actionBotones('ingresarAlumno','ingresarMenu');});
	$('.ingresarMPPG').on("click",function(){actionBotones('ingresarGrado','ingresarMenu');});

	$('.linkAtrasIngresarPG1').on("click",function(){actionBotones('ingresarMenu','ingresarGrado');});
	$('.linkAtrasIngresarPA1').on("click",function(){actionBotones('ingresarMenu','ingresarAlumno');});
	$('.linkAtrasIngresarPA2').on("click",function(){actionBotones('divIngresarPA1','tablaIngresarPA1');});
	$('.linkAtrasIngresarPA3').on("click",function(){actionBotones('tablaIngresarPA1','divIngresarPA2');});
	$('.linkAtrasIngresarPG1').on("click",function(){actionBotones('ingresarMenu','ingresarGrado');});
	$('.linkAtrasIngresarPG2').on("click",function(){actionBotones('divIngresarPG1','tablaIngresarPG1');});

	$('#aceptarCedulaIngresarPA').on("click",ingresarCedulaAlumnoPA);
	$('#consultarDatosIngresaPA').on("click",consultarIngresarDatosAlumnoPA);
	$('#guardarIngresarPA').on("click",ingresarNotasPA);
	$('#aceptarGradoIngresarPG').on("click",consultarIngresarDatosYearPG);
	$('#consultarDatosIngresaPG').on("click",consultarIngresarDatosPG);
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

function ingresarCedulaAlumnoPA() 
{
	cedulaIngresarPA=$("#inputCedulaIngresarPA").val();
	actionBotones('tablaIngresarPA1','divIngresarPA1');	
}

function consultarIngresarDatosAlumnoPA() 
{
	materiaIngresarPA=$("#selectMateriaIngresarPA option:selected").val();
	yearIngresarPA=$("#selectYearIngresarPA option:selected").val();
	lapsoIngresarPA=$("#selectLapsoIngresarPA option:selected").val();

	actionBotones('divIngresarPA2','tablaIngresarPA1');	
}
function ingresarNotasPA()
{
	var descripcion = $("#descrip").val();
	var nota = $("#nota").val();
	var porcen = $("#porc").val();
}

function consultarIngresarDatosYearPG() 
{
	yearIngresarPG=$("#gradoIngresarPG option:selected").val();
	actionBotones("tablaIngresarPG1","divIngresarPG1");
}

function consultarIngresarDatosPG()
{
	materiaIngresarPG=$("#selectMateriaIngresarPG option:selected").val();
	yearIngresarPG=$("#selectYearIngresarPG option:selected").val();
	lapsoIngresarPG=$("#selectLapsoIngresarPG option:selected").val();
	alert(materiaIngresarPG+yearIngresarPG+lapsoIngresarPG);
	actionBotones("divIngresarPG2","tablaIngresarPG1");
}