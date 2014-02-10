$(document).on("ready", empezar);

var idDocente, seleccionado, idHorario, idPlanificacionPL;

var materiaIngresarPL, gradoIngresarPL, mencionIngresarPL, lapsoIngresarPL, yearIngresarPL;

function empezar(){
   $('.ingreso').on("click",function(){actionBotones('ingresarPSL','planEstudio');}); 
   $('.consulta').on("click",function(){actionBotones('consultarPSL','planEstudio');}); 
   $('.ingresoSemanal').on("click",function(){actionBotones('ingresarPES1','menuPrincipal');}); 
   $('.ingresoLapso').on("click",function(){actionBotones('ingresarPEL1','menuPrincipal');}); 
   $('.consultaSemanal').on("click",function(){actionBotones('consultaPES1','menuPrincipal');}); 
   $('.consultaLapso').on("click",function(){actionBotones('consultaPEL1','menuPrincipal');}); 
   $('.linkAtrasIngresarPSL1').on("click",function(){actionBotones('planEstudio','ingresarPSL');}); 
   $('.linkAtrasconsultarPSL1').on("click",function(){actionBotones('planEstudio','consultarPSL');}); 
   $('.linkAtrasTablaIngresarPEL1').on("click",function(){actionBotones('formIngresarPEL1','divIngresarPEL1');}); 
   
   $('.linkAtrasConsultaPEL1').on("click",funAtrasDoble); 
   $('.linkAtrasconsultaPES1').on("click",funAtrasDoble2); 
   $('.linkAtrasIngresarPEL1').on("click",funAtrasDoble3); 
   $('.linkAtrasTablaIngresarPES1').on("click",funAtrasDoble4);

   $('#continuarIngresarPEL1').on("click",continuarIngresar); 

   $('#botonConsultaPEL1').on("click",consultarPlanLapso); 
   $('#botonconsultaPES1').on("click",consultarPlanSemanal); 
   $('#guardarTablaIngresarPES1').on("click",ingresarPlanSemanal);
   $('#guardarTablaIngresarPEL1').on("click",botonIngresarPlanLapso);

   var cedula2=$.cookie("cedulaProf");
   var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){	
			idDocente = item.idDocente;	
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMateriasDocenteHorario.php?jsoncallback=?";
			$.getJSON(url3,{
				docente:item.idDocente
			}).done(function(data3){
				$.each(data3, function(i,item){	
					$(".materias").append("<option class='optionConsultar2' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
				});												
			});			
		});
	}); 
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

function funAtrasDoble () 
{
	actionBotones("menuPrincipal","consultaPEL1");
	actionBotones("consultarPSL","consultaPEL1");

}
function funAtrasDoble2 () 
{
	actionBotones("menuPrincipal","consultaPES1");
	actionBotones("consultarPSL","consultaPES1");

}
function funAtrasDoble3 () 
{
	actionBotones("menuPrincipal","ingresarPEL1");
	actionBotones("ingresarPSL","ingresarPEL1");

}
function funAtrasDoble4 () 
{
	actionBotones("menuPrincipal","ingresarPES1");
	actionBotones("ingresarPSL","ingresarPES1");
}

function consultarPlanLapso() 
{
	var materia=$("#selectMateriaConsultaPEL1 option:selected").val();
	var grado=$("#selectGradoConsultaPEL1 option:selected").val();
	var year=$("#selectyearConsultaPEL1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapso.php?jsoncallback=?";
	$.getJSON(url,{
		docente:idDocente,
		materia:materia,
		grado:grado,
		year:year
	}).done(function(data){
		$.each(data, function(i,item){	
			var url = "consultarplanestudioporlapso.html";
			window.location=url+"?materiaDocente="+ item.idHorarioMateria;
		});
	});

}
function consultarPlanSemanal() 
{
	var materia=$("#selectMateriaconsultaPES1 option:selected").val();
	var grado=$("#selectGradoconsultaPES1 option:selected").val();
	var year=$("#selectyearconsultaPES1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapso.php?jsoncallback=?";
	$.getJSON(url,{
		docente:idDocente,
		materia:materia,
		grado:grado,
		year:year
	}).done(function(data){
		$.each(data, function(i,item){	
			var url = "consultarplanestudiosemanal.html";
			window.location=url+"?materiaDocente="+ item.idHorarioMateria;
		});
	});

}
function continuarIngresar () 
{	
	materiaIngresarPL=$("#selectMateriaIngresarPEL1 option:selected").val();
	gradoIngresarPL=$("#selectGradoIngresarPEL1 option:selected").val();
	yearIngresarPL=$("#selectYearIngresarPEL1 option:selected").val();
	lapsoIngresarPL=$("#selectLapsoIngresarPEL1 option:selected").val();
	mencionIngresarPL=$("#mencionIngresarPEL1").val();
	seleccionado="nuevo";
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaPlanLapso2.php?jsoncallback=?";
	$.getJSON(url,{
		docente:idDocente,
		materia:materiaIngresarPL,
		grado:gradoIngresarPL,
		year:yearIngresarPL,
		lapso:lapsoIngresarPL
	}).done(function(data){
		$.each(data, function(i,item){	
			seleccionado="viejo";
			idHorario=item.idHorarioMateria;
			idPlanificacionPL=item.idPlanificacion;
		});
	});
	actionBotones('divIngresarPEL1','formIngresarPEL1');
}
function botonIngresarPlanLapso () 
{

	var plan1 = $("#plan01").val();
	var plan2 = $("#plan02").val();
	var plan3 = $("#plan03").val();
	var plan4 = $("#plan04").val();
	var plan5 = $("#plan05").val();
	var plan6 = $("#plan06").val();

	if(seleccionado=="viejo")
	{
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarPlanLapso1.php?jsoncallback=?";
		$.getJSON(url,{
			planificacion:idPlanificacionPL,
			objetivos:plan1,
			contenido:plan2,
			estrategias:plan3,
			recursos:plan4,
			tecnicas:plan5,
			ponderacion:plan6
		}).done(function(data){
			$.each(data, function(i,item){	
				seleccionado="viejo";
				idHorario=item.idHorarioMateria;
			});
		});
	}
	else if (seleccionado=="nuevo")
	{

	}
}

function ingresarPlanSemanal () 
{
	var materia=$("#selectMateriaIngresarPES1 option:selected").val();
	var grado=$("#selectGradoIngresarPES1 option:selected").val();
	var year=$("#selectYearIngresarPES1 option:selected").val();

	var numSemana=$("#nroSemanaIngresarPES1").val();
	var fechaInicio=$("#fiIngresarPES1").val();
	var fechaFin=$("#ffIngresarPES1").val();
	var sesiones=$("#sesionesIngresarPES1").val();
	var numAlumnos=$("#nroAlumnosIngresarPES1").val();
	var primerTema=$("#ptIngresarPES1").val();
	var primerInicio=$("#piIngresarPES1").val();
	var primerDesarrollo=$("#pdIngresarPES1").val();
	var primerCierre=$("#pcIngresarPES1").val();
	var segundoTema=$("#stIngresarPES1").val();
	var segundoInicio=$("#siIngresarPES1").val();
	var segundoDesarrollo=$("#sdIngresarPES1").val();
	var segundoCierre=$("#scIngresarPES1").val();
	var observaciones=$("#observacionesIngresarPES1").val();

	alert(materia+"-"+grado+"-"+year+"-"+numSemana+"-"+fechaInicio+"-"+fechaFin+"-"+sesiones+"-"+numAlumnos+"-"+primerTema+"-"+primerInicio+"-"+primerDesarrollo+"-"+primerCierre+"-"+segundoTema+"-"+segundoInicio+"-"+segundoDesarrollo+"-"+segundoCierre+"-"+observaciones);

}