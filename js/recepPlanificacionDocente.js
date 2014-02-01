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

	llenarMaterias();
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
	$('#selectPlanillaRPD option[name=nada4]').attr("selected",true);

	$('#asignaturaDocent option[name=optionRPD]').remove();
}

function llenarMaterias() 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){
			$("#asignaturaRPD").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});		
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
	 	 	if(data.num != 0)
	 	 	{
	 	 		cedula=$("#docenteCedRPD").val();
	 	 		seleccion="docente";
	 	 		$("#tablaDocent").hide();
	 	 		$("#tablagmd").show("slide");
	 	 		llenarMateriasDocente();
			}
			else{
				alert("Cedula Incorrecta");
			}		
		});
		
}

function llenarMateriasDocente() {
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarMaterias.php?jsoncallback=?";
	$.getJSON(url,{cedul:cedula
	}).done(function(data){
		$.each(data, function(i,item){
			$("#asignaturaDocent").append("<option name='optionRPD' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
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
		materia=$('#asignaturaRPD option:selected').attr("value");
		seleccion="materia";		

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarDocentePorMateriaGrado.php?jsoncallback=?";
		$.getJSON(url,{grad:grado, mat:materia
		}).done(function(data){
			if(data.num>0)
			{
				$.each(data, function(i,item){
					cedula=item.cedulaDocente;
					$("#spa").attr("value",cedula);
					ocultarTodo();
					$("#buscarSelectPlanilla").show("slide");
				});
			}
			else
			{
				alert("La Materia y Grado Seleccionado No Poseen Profesor");
			}
			
		});	

		
	}
}

function buscarXDocente()
{
	var tipo = $('#asignaturaDocent option:selected').attr("value");

	var tipo2 = $('#gradoDocent option:selected').attr("name");
	
	if(tipo=="nada5" || tipo2=="nada6")
	{
		alert("Ingrese Materia y Grado");
	}
	else
	{
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarMateriasDocGrado.php?jsoncallback=?";
		$.getJSON(url,{cedul:cedula, asignatura:tipo, grado:tipo2
		}).done(function(data){
			if(data.num>0)
			{
				grado = $('#gradoDocent option:selected').attr("name");
				materia = $('#asignaturaDocent option:selected').attr("value");
				ocultarTodo();
				$("#buscarSelectPlanilla").show("slide");
			}
			else
			{
				alert("La Materia y El Año Seleccionado No Coincide Con El Horario Del Profesor.")
			}
		});

		
	}
}

function buscarPlanillas()
{	
	var gradoMateriaDocente, materiaDocente, cedulaDocente, idmateriadocente;

	tipo = $('#selectPlanillaRPD option:selected').attr("name");
	
	if(seleccion=='materia')
	{
		cedulaDocente = $("#spa").attr("value");
		gradoMateriaDocente = grado;
		materiaDocente = materia;
	}
	else
	{
		cedulaDocente = cedula;
		gradoMateriaDocente = grado;
		materiaDocente = materia;
	}

	
	
	if(tipo=="pSemanal")
	{
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarDocenteMateria.php?jsoncallback=?";
		$.getJSON(url,{grad:gradoMateriaDocente, mat:materiaDocente, doc:cedulaDocente
		}).done(function(data){
			idmateriadocente=data.num;
			var url = "consultarplanestudiosemanal.html";
			window.location=url+"?materiaDocente="+ idmateriadocente;	
		});	
		
	}
	else if(tipo=="pLapso")
	{
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarDocenteMateria.php?jsoncallback=?";
		$.getJSON(url,{grad:gradoMateriaDocente, mat:materiaDocente, doc:cedulaDocente
		}).done(function(data){
			idmateriadocente=data.num;
			var url = "consultarplanestudioporlapso.html";
			window.location=url+"?materiaDocente="+ idmateriadocente;

		});	
		
	}
	else
	{
		alert("Seleccione Planilla");
	}
}