$(document).on("ready", inicio);

var seleccion;
var grado, materia, cedula;
function inicio()
{
	ocultarTodo();
	$("#selectBuscarPor").on("change", buscaPor);

	$("#linkMatBus").on("click", comprobarCedula);

	$("#buscaMM").on("click", comprobarCamposMateria);

	$("#buscarRPD").on("click", buscarPlanillas);

	$("#busDocent").on("click", buscarXDocente);
	
	$(".linkAtrasParaBuscar1").on("click", function(){linkAtras("#buscarPorRPD");});

	$(".linkAtrasParaBuscar2").on("click", function(){linkAtras("#buscarPorRPD");});

	$(".linkAtrasParaBuscar3").on("click", function(){linkAtras("#buscarPorRPD");});
}

function ocultarTodo()
{
	$("#buscarPorMateria").hide();	
	$("#buscarPorDocente").hide();
	$("#tablagmd").hide();
	$("#tablaDocent").show();
	$("#buscarSelectPlanilla").hide();
	$("#docenteCedRPD").val("");
	$('#selectBuscarPor option[name=nada]').attr("selected",true);
	$('#asignaturaRPD option[name=nada2]').attr("selected",true);
	$('#gradoRPD option[name=nada3]').attr("selected",true);
	
	$('#gradoDocent option[name=nada6]').attr("selected",true);
	$('#asignaturaDocent option[name=nada5]').attr("selected",true);
}

function linkAtras(ver)
{
	ocultarTodo();
	$("#buscarPorRPD").hide();
	$(ver).show("slide");
}
function buscaPor()
{
	var tipo = $('#selectBuscarPor option:selected').attr("name");

	if(tipo=="materia")
	{	
		$("#buscarPorRPD").hide();
		ocultarTodo();
		$("#buscarPorMateria").show("slide");
	}

	else if(tipo=="docente")
	{
		$("#buscarPorRPD").hide();
		ocultarTodo();
		$("#buscarPorDocente").show("slide");
	}
	else
	{
		ocultarTodo();
		$("#buscarPorRPD").show("slide");
	}
}

function comprobarCedula()
{
	var des = $("#docenteCedRPD").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarDocente.php?jsoncallback=?";
	$.getJSON(url,{
			cedDocente:des
		}).done(function(data){
	 	 	if(data.num != 0){
	 	 		cedula=$("#docenteCedRPD").val();
	 	 		seleccion="docente";
	 	 		$("#tablaDocent").hide();
	 	 		$("#tablagmd").show("slide");
			}
			else{
				alert("Cedula Incorrecta");
			}		
		});
		
}

function comprobarCamposMateria()
{
	if($('#asignaturaRPD option:selected').attr("name")=="nada2" || $('#gradoRPD option:selected').attr("name")=="nada3")
	{
		alert("Seleccione Una Materia Y Un Grado");
	}
	else
	{
		grado=$('#gradoRPD option:selected').attr("name");
		materia=$('#asignaturaRPD option:selected').attr("name");
		seleccion="materia;"
		ocultarTodo();
		$("#buscarSelectPlanilla").show("slide");
	}
}

function buscarXDocente()
{
	var tipo = $('#asignaturaDocent option:selected').attr("name");

	var tipo2 = $('#gradoDocent option:selected').attr("name");

	if(tipo=="nada5" || tipo2=="nada6")
	{
		alert("Ingrese Materia y Grado");
	}
	else
	{
		grado = $('#gradoDocent option:selected').attr("name");
		materia = $('#asignaturaDocent option:selected').attr("name");
		ocultarTodo();
		$("#buscarSelectPlanilla").show("slide");
	}
}

function buscarPlanillas()
{	
	var tipo = $('#selectPlanillaRPD option:selected').attr("name");

	if(tipo=="pSemanal")
	{
		
	}
	else if(tipo=="pLapso")
	{

	}
	else
	{
		
	}
}