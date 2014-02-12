$(document).on("ready", empezar);
var idDocente;

var cedulaIngresarPA, materiaIngresarPA, yearIngresarPA, lapsoIngresarPA, gradoIngresarPA, hmIngresarPA, idAlumnoIngresarPA;

var gradoIngresarPG, materiaIngresarPG, yearIngresarPG, lapsoIngresarPG, hmIngresarPG, contandoGrado;

var cedulaConsultarPA, materiaConsultarPA, yearConsultarPA, lapsoConsultarPA;

var gradoConsultarPG, materiaConsultarPG, yearConsultarPG, lapsoConsultarPG;

var cedulaModificarPA, materiaModificarPA, yearModificarPA, lapsoModificarPA;

var gradoModificarPG, materiaModificarPG, yearModificarPG, lapsoModificarPG;

function empezar(){
	var cedula2=$.cookie("cedulaProf");

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){	
			idDocente = item.idDocente;	
			/*var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMateriasDocenteHorario.php?jsoncallback=?";
			$.getJSON(url3,{docente:item.idDocente
			}).done(function(data3){
				$.each(data3, function(i,item){	
					$(".materias").append("<option class='optionConsultar2' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
				});												
			});	*/		
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
	$('.linkAtrasIngresarPG3').on("click",function(){actionBotones('tablaIngresarPG1','divIngresarPG2');});
	$('.consultarAlumnoMP').on("click",function(){actionBotones('consultarPorAlumno','consultarMenu');});
	$('.consultarGradoMP').on("click",function(){actionBotones('consultarGrado','consultarMenu');});
	$('.linkAtrasConsultarPA1').on("click",function(){actionBotones('consultarMenu','consultarPorAlumno');});
	$('.linkAtrasConsultarPA2').on("click",function(){actionBotones('divConsultarPA1','tablaConsultarPA1');});
	$('.linkAtrasConsultarPA3').on("click",function(){actionBotones('tablaConsultarPA1','divConsultarPA2');});
	$('.linkAtrasConsultarPG1').on("click",function(){actionBotones('consultarMenu','consultarGrado');});
	$('.linkAtrasConsultarPG2').on("click",function(){actionBotones('divConsultarPG1','tablaConsultarPG1');});
	$('.linkAtrasConsultarPG3').on("click",function(){actionBotones('tablaConsultarPG1','divConsultarPG2');});
	$('.modificarAlumnoMP').on("click",function(){actionBotones('modificarPorAlumno','modificarMenu');});
	$('.modificarGradoMP').on("click",function(){actionBotones('modificarGrado','modificarMenu');});
	$('.linkAtrasModificarPA1').on("click",function(){actionBotones('modificarMenu','modificarPorAlumno');});
	$('.linkAtrasModificarPA2').on("click",function(){actionBotones('divModificarPA1','tablaModificarPA1');});
	$('.linkAtrasModificarPG2').on("click",function(){actionBotones('divModificarPG1','tablaModificarPG1');});
	$('.linkAtrasModificarPG3').on("click",function(){actionBotones('tablaModificarPG1','divModificarPG2');});
	$('.linkAtrasModificarPG1').on("click",function(){actionBotones('modificarMenu','modificarGrado');});
	$('.linkAtrasModificarPA3').on("click",function(){actionBotones('tablaModificarPA1','divModificarPA2');});

	$('#aceptarCedulaIngresarPA').on("click",ingresarCedulaAlumnoPA);
	$('#consultarDatosIngresaPA').on("click",consultarIngresarDatosAlumnoPA);
	$('#guardarIngresarPA').on("click",ingresarNotasPA);
	$('#aceptarGradoIngresarPG').on("click",consultarIngresarDatosYearPG);
	$('#consultarDatosIngresaPG').on("click",consultarIngresarDatosPG);
	$('#aceptarCedulaIngresarPG').on("click",guardarDatosPG);
	$('#aceptarCedulaConsultarPA').on("click",guardarCedulaPA);
	$('#consultarDatosConsultarPA').on("click",consultarDatosPA);
	$('#aceptarGradoConsultarPG').on("click",aceptarGradoPA);
	$('#consultarDatosConsultarPG').on("click",consultaDatosPA);
	$('#aceptarCedulaModificarPA').on("click",consultaCedulaModificarPA);
	$('#consultarDatosModificarPA').on("click",consultaDatosModificarPA);
	$('#aceptarGradoModificarPG').on("click",aceptarGradoModificarPG);
	$('#consultarDatosModificarPG').on("click",consultarDatosModificarPG);
	$('#aceptarCedulaModificarPG').on("click",aceptarCedulaModificarPG);
	$('#consultarDatosModificarPA').on("click",consultarDatosModificarPA);
	$('#aceptarCedulaModificarPA').on("click",aceptarCedulaModificarPA);
	$('#aceptarTodoModificarPA').on("click",aceptarTodoModificarPA);
}

function resetear()
{
	$('input[type=text]').val("");
	$('input[type=number]').val("");
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
	$("#spanCedula").text(cedulaIngresarPA);

	$(".materiasGradosIngresar").remove();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula2.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedulaIngresarPA
	}).done(function(data){
		if(data.num>0)
		{
			if(data.rol=="3")
			{
				var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarDatosEstudiante.php?jsoncallback=?";
				$.getJSON(url,{
					cedula:cedulaIngresarPA
				}).done(function(data){
					$("#gradoPA2").text(data.grado);
					gradoIngresarPA=data.grado;
					idAlumnoIngresarPA=data.idEs;
					llenarMateriarPorGrado(data.grado,"#selectMateriaIngresarPA")
				});
				actionBotones('tablaIngresarPA1','divIngresarPA1');	
			}	
			else
			{
				alert("La Cedula No Pertenece a Ningun Alumno");
			}				
		}
		else
		{
			alert("Cedula Invalida");
		}
		
	});
	
}
function llenarMateriarPorGrado (grado2, idMate) {
	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMateriasDocenteHorarioPorGrado.php?jsoncallback=?";
	$.getJSON(url3,{docente:idDocente, grado:grado2
	}).done(function(data3){
		$.each(data3, function(i,item){	
			$(idMate).append("<option class='materiasGradosIngresar' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});	
	});
}

function consultarIngresarDatosAlumnoPA() 
{
	materiaIngresarPA=$("#selectMateriaIngresarPA option:selected").val();
	yearIngresarPA=$("#selectYearIngresarPA option:selected").val();
	lapsoIngresarPA=$("#selectLapsoIngresarPA option:selected").val();
	if(materiaIngresarPA!=0)
	{
		$("#materiaPA2").text($("#selectMateriaIngresarPA option:selected").text());
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioMateriaIN1.php?jsoncallback=?";
		$.getJSON(url,{
			docente:idDocente,
			grado:gradoIngresarPA,
			year:yearIngresarPA,
			materia:materiaIngresarPA
			}).done(function(data){
				if(data.num>0)
				{
					hmIngresarPA=data.idHorarioMateria;
					actionBotones('divIngresarPA2','tablaIngresarPA1');	
				}
				else
				{
					alert("Datos Incorrectos");
				}
			});				
		

	}
	else
		alert("Seleccione Una Materia");
	
}
function ingresarNotasPA()
{
	var descripcion = $("#descrip").val();
	var nota = $("#nota").val();
	var porcen = $("#porc").val();

	if(descripcion!="" && descripcion!=" " && nota!="" && nota!=" " && porcen!="" && porcen!=" ")
	{
		if(nota<=20 && porcen<=70)
		{			
			var pun = (nota*porcen)/100;
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarNotas.php?jsoncallback=?";
			$.getJSON(url3,{
				estudiante:idAlumnoIngresarPA, 
				horarioMateria:hmIngresarPA,
				lapso:lapsoIngresarPA, 
				calificacion:nota,
				porcentaje:porcen,
				puntos:pun,
				descripcion:descripcion
			}).done(function(data3){
				alert("Se Ha Ingresado Los Datos Correctamente");
				$('input[type=text]').val("");
				$('input[type=number]').val("");
			});
		}
		else
		{
			alert("Calificacion o Porcentaje Incorrecto");
		}		
	}
}

function justNumbers(e)
{
	var keynum = window.event ? window.event.keyCode : e.which;
	if ((keynum == 8))
	return true;
	 
	return /\d/.test(String.fromCharCode(keynum));
}

function consultarIngresarDatosYearPG() 
{
	gradoIngresarPG=$("#gradoIngresarPG option:selected").val();
	$(".materiasGradosIngresar").remove();
	llenarMateriarPorGrado(gradoIngresarPG,"#selectMateriaIngresarPG");
	actionBotones("tablaIngresarPG1","divIngresarPG1");
}

function consultarIngresarDatosPG()
{
	materiaIngresarPG=$("#selectMateriaIngresarPG option:selected").val();
	yearIngresarPG=$("#selectYearIngresarPG option:selected").val();
	lapsoIngresarPG=$("#selectLapsoIngresarPG option:selected").val();
	if(materiaIngresarPG!=0)
	{
		$("#materiaPG2").text($("#selectMateriaIngresarPG option:selected").text());
		$("#gradoPG2").text(gradoIngresarPG);
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioMateriaIN1.php?jsoncallback=?";
		$.getJSON(url,{
			docente:idDocente,
			grado:gradoIngresarPG,
			year:yearIngresarPG,
			materia:materiaIngresarPG
		}).done(function(data){
			if(data.num>0)
			{
				hmIngresarPG=data.idHorarioMateria;
				llenarAlumnos();
				actionBotones("divIngresarPG2","tablaIngresarPG1");	
			}
			else
			{
				alert("Datos Incorrectos");
			}
		});		
	}
	else
	{
		alert("Seleccione Una Materia");
	}
	
}

function llenarAlumnos () 
{
	$(".filaAlumnos").remove();
	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarAlumnosPorGrado.php?jsoncallback=?";
	$.getJSON(url3,{
		grado:gradoIngresarPG
	}).done(function(data3){
		var contando=0;
		$.each(data3, function(i,item){	
			contando++;
			$("#tbodyGradoIngresar").append("<tr class='filaAlumnos'><td><span class='"+item.idEstudiante+"' id='alumno"+contando+"'>"+item.cedula+"</span></td><td><input class='inputsGrados1' onkeypress='return justNumbers(event);' type='number' id='nota"+contando+"'></td></tr>");
		});	
		contandoGrado=contando;
	});
}

function guardarDatosPG() 
{
	var nombreExamen = $("#nombreExamenPG").val();
	$(".inputsGrados1").removeClass("rojosIC");
	if(nombreExamen!="" && nombreExamen!=" ")
	{
		var porcenExamen = $("#porcentaPG2").val();
		if(porcenExamen!="" && porcenExamen!=" " && porcenExamen<=70)
		{
			var contarValidar=0;
			for (var x=1; x<=contandoGrado; x++)
			{
				if($("#nota"+x).val()=="" || $("#nota"+x).val()==" ")
				{				
					$("#nota"+x).addClass("rojosIC");
					contarValidar++;
				}
				else if($("#nota"+x).val()>20)
				{
					$("#nota"+x).addClass("rojosIC");
					contarValidar++;
				}
			}

			if(contarValidar==0)
			{
				for (var x=1; x<=contandoGrado; x++)
				{
					var calif=$("#nota"+x).val();
					var punto=(calif*porcenExamen)/100;
					var alum=$("#alumno"+x).attr("class");
					ingresaLasNotas(alum, hmIngresarPG, lapsoIngresarPG, calif, porcenExamen, punto, nombreExamen)
				}
				alert("Se Ha Ingresado Los Datos Correctamente");	
				
				$('input[type=text]').val("");

				$('input[type=number]').val("");
			}
		}
		else
		{
			alert("Ingrese Porcentaje Valido");
		}
		
	}
	else
	{
		alert("Ingrese Nombre Del Examen");
	}
}

function ingresaLasNotas(alumno, idhm, lapso, califi, porcenta, puntos, nombreExamen)
{
	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarNotas.php?jsoncallback=?";
	$.getJSON(url3,{
		estudiante:alumno, 
		horarioMateria:idhm,
		lapso:lapso, 
		calificacion:califi,
		porcentaje:porcenta,
		puntos:puntos,
		descripcion:nombreExamen
	}).done(function(data3){
		
	});
}

function guardarCedulaPA() 
{
	cedulaConsultarPA=$("#inputCedulaConsultarPA").val();
	actionBotones('tablaConsultarPA1','divConsultarPA1');
}
function consultarDatosPA()
{
	materiaConsultarPA=$("#selectMateriaConsultarPA option:selected").val();
	yearConsultarPA=$("#selectYearConsultarPA option:selected").val();
	lapsoConsultarPA=$("#selectLapsoConsultarPA option:selected").val();
	actionBotones('divConsultarPA2','tablaConsultarPA1');	
}

function aceptarGradoPA()
{
	gradoConsultarPG=$("#gradoConsultarPG option:selected").val();
	actionBotones("tablaConsultarPG1","divConsultarPG1");
}

function consultaDatosPA()
{
	materiaConsultarPG=$("#selectMateriaConsultarPA option:selected").val();
	yearConsultarPG=$("#selectYearConsultarPA option:selected").val();
	lapsoConsultarPG=$("#selectLapsoConsultarPA option:selected").val();
	actionBotones('divConsultarPG2','tablaConsultarPG1');
}

function consultaCedulaModificarPA() 
{
	cedulaModificarPA=$("#inputCedulaModificarPA").val();
	actionBotones('tablaModificarPA1','divModificarPA1');
}
function consultaDatosModificarPA() 
{
	materiaModificarPA=$("#selectMateriaModificarPA option:selected").val();
	yearModificarPA=$("#selectYearModificarPA option:selected").val();
	lapsoModificarPA=$("#selectLapsoModificarPA option:selected").val();
	actionBotones('divModificarPA2','tablaModificarPA1');	
}
function aceptarCedulaModificarPG() 
{
	alert("hh");
}
function aceptarGradoModificarPG() 
{
	gradoModificarPG=$("#gradoModificarPG option:selected").val();
	actionBotones("tablaModificarPG1","divModificarPG1");
}
function consultarDatosModificarPG()
{
	materiaModificarPG=$("#selectMateriaModificarPG option:selected").val();
	yearModificarPG=$("#selectYearModificarPG option:selected").val();
	lapsoModificarPG=$("#selectLapsoModificarPG option:selected").val();
	actionBotones('divModificarPG2','tablaModificarPG1');
}
function aceptarTodoModificarPA()
{
	alert("hol");
}