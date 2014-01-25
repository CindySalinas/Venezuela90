$(document).on("ready",iniciar);

var tipoEvent = "select";
var tipoEvent2 = "select";

function iniciar(){
	gestionBotonesMenu();
	$('#ingresarNE').on("click", ingresarNuevoEvento);

	$('#ingresarNE2').on("click", ingresarNuevaActividad);
	$('#ingresarLinkNuevo').on("click", aparecerNuevo);
	$('#ingresarLinkNuevo3').on("click", aparecerNuevoModificar);
	$('#ingresarLinkSelect').on("click", aparecerSelect);
	$('#ingresarLinkSelect3').on("click", aparecerSelectModificar);

	$('#guardarModificadoCE').on("click", guardarCambiosCE);

	$('#linkBuscarModCE').on("click", aparecerModificarCE);

	$('#linkBuscarActEven').on("click", buscarFechaActivi);
	$('#guardaModCA').on("click", guardarCambiosCA);

	$("#inputColor").on("change", color);
	$("#inputColor3").on("change", color3);

	rellenarSelectTipoEvent();

	$("#diaGCED").attr("disabled", true);
	$("#mesGCED").attr("disabled", true);
	$("#yearGCED").attr("disabled", true);

	$("#diaGCE11").attr("disabled", true);
	$("#mesGCE11").attr("disabled", true);
	$("#yearGCE11").attr("disabled", true);
}

function guardarCambiosCA() {
	var dia1=$("#diaGCE11").val();
	var mes1=$("#mesGCE11 option:selected").val();
	var year1=$("#yearGCE11").val();

	var dia2=$("#diaGCE12").val();
	var mes2=$("#mesGCE12 option:selected").val();
	var year2=$("#yearGCE12").val();	

	var fechaPrimera = dia1 + "/" + mes1 + "/" + year1;
	
	var fechaSegunda = dia2 + "/" + mes2 + "/" + year2;

	var descripcionEvento = $("#textActiModif").val();

	var grado = $("#selectGradoModif option:selected").val();

	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarCalendarioActividades.php?jsoncallback=?";

		$.getJSON(url3,{id:grado, des:descripcionEvento, fe1:fechaPrimera, fe2:fechaSegunda}).done(function(data){			
			 	alert("Se Ha Modificado Los Datos");
			 	$("#diaGCE11 option[value='"+dia2+"']").attr("selected",true);
		 	 	$("#mesGCE11 option[value='"+mes2+"']").attr("selected",true);
		 	 	$("#yearGCE11 option[value='"+year2+"']").attr("selected",true);
			 });
}

function buscarFechaActivi() {
	var dia=$("#diaGCE10").val();
	var mes=$("#mesGCE10 option:selected").val();
	var year=$("#yearGCE10").val();

	if(dia != "dia10" && mes != "mes10" && year != "year10")
	{
		var fecha = dia + "/" + mes + "/" + year;

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarFechaCalendarioActividades.php?jsoncallback=?";
		$.getJSON(url,{
				fe:fecha
			}).done(function(data){
		 	 	if(data.num != 0){
		 	 		$("#divModificarCA").show("slide");
		 	 		$("#mod2").hide();

		 	 		$("#diaGCE11 option[value='"+dia+"']").attr("selected",true);
		 	 		$("#mesGCE11 option[value='"+mes+"']").attr("selected",true);
		 	 		$("#yearGCE11 option[value='"+year+"']").attr("selected",true);

		 	 		$("#diaGCE12 option[value='"+dia+"']").attr("selected",true);
		 	 		$("#mesGCE12 option[value='"+mes+"']").attr("selected",true);
		 	 		$("#yearGCE12 option[value='"+year+"']").attr("selected",true);

		 	 		$("#textActiModif").val(data.des);
		 	 		
		 	 		$("#selectGradoModif option[value='"+data.idGrado+"']").attr("selected",true);

				}
				else{
					alert("No Existe Actividad - Seleccione Otra Fecha");
				}		
		});

	}
	else
	{
		alert("Seleccione Fecha Valida");
	}
}

function rellenarSelectTipoEvent()
{
	$(".optionNo").remove();
	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaTipoEvent.php?jsoncallback=?";

		$.getJSON(url3,{}).done(function(data){
			$.each(data, function(i,item){
				$("#selectTipoEvent").append("<option class='optionNo' value='"+item.idTipoEvento+"'>"+item.nomTipoEvento+"</option>");
			});
		});

	$(".optionNo2").remove();
	var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaTipoEvent.php?jsoncallback=?";

		$.getJSON(url3,{}).done(function(data){
			$.each(data, function(i,item){
				$("#selectTipoEvent2").append("<option class='optionNo2' value='"+item.idTipoEvento+"'>"+item.nomTipoEvento+"</option>");
			});
		});
}

function resett()
{
	$("#diaGCE option[value='dia1']").attr("selected",true);
	$("#diaGCE2 option[value='dia2']").attr("selected",true);
	$("#diaGCE3 option[value='dia3']").attr("selected",true);
	$("#diaGCE10 option[value='dia10']").attr("selected",true);
	$("#mesGCE option[value='mes1']").attr("selected",true);	
	$("#mesGCE2 option[value='mes2']").attr("selected",true);
	$("#mesGCE3 option[value='mes3']").attr("selected",true);
	$("#mesGCE10 option[value='mes10']").attr("selected",true);
	$("#yearGCE option[value='year1']").attr("selected",true);
	$("#yearGCE2 option[value='year2']").attr("selected",true);
	$("#yearGCE3 option[value='year3']").attr("selected",true);
	$("#yearGCE10 option[value='year10']").attr("selected",true);

	$("#ingresarDescNE").val("");
	$("#ingresarDescNE2").val("");
	$("#ingresarDescNE3").val("");
	$("#ingNTE").val("");
	$("#ingNTE2").val("");
	$("#ingNTE3").val("");
	$("#inputColor").val("#000000");
	$("#inputColor").css("background","white");
	$("#inputColor3").val("#000000");
	$("#inputColor3").css("background","white");
	$(".alert").css("display","none");

	$("#selectTipoEvent option[name='nada1']").attr("selected",true);
	$("#selectGrado option[name='nada2']").attr("selected",true);

	$("#divModiCE").hide();
	$("#divModificarCA").hide();
	
}

function guardarCambiosCE() 
{
	var dia1=$("#diaGCED").val();
	var mes1=$("#mesGCED option:selected").val();
	var year1=$("#yearGCED").val();

	var dia2=$("#diaGCE4").val();
	var mes2=$("#mesGCE4 option:selected").val();
	var year2=$("#yearGCE4").val();	

	var fechaPrimera = dia1 + "/" + mes1 + "/" + year1;
	
	var fechaSegunda = dia2 + "/" + mes2 + "/" + year2;

	var descripcionEvento = $("#ingresarDescNE3").val();

	if(tipoEvent2 == "select")
	{
		var sele = $("#selectTipoEvent2 option:selected").val();

		var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarCalendarioEscolar.php?jsoncallback=?";

		$.getJSON(url3,{id:sele, des:descripcionEvento, fe1:fechaPrimera, fe2:fechaSegunda}).done(function(data){			
			 	alert("Se Ha Modificado Los Datos");
			 	$("#diaGCED option[value='"+dia2+"']").attr("selected",true);
		 	 	$("#mesGCED option[value='"+mes2+"']").attr("selected",true);
		 	 	$("#yearGCED option[value='"+year2+"']").attr("selected",true);
		 	 	$("#ingNTE3").val("");
		 	 	$("#inputColor3").val("#000000");
		 	 	$("#inputColor3").css("background","white");
			 });
	}
	else
	{
		var tipEv = $("#ingNTE3").val();
		var col = $("#inputColor3").val();

		if(tipEv != "" && col != "#000000")
			{
				var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarTipoEvento.php?jsoncallback=?";

 	 			$.getJSON(url,{nomTipo:tipEv, colorTipo:col}).done(function(data){	
 	 				var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarTipoEvento.php?jsoncallback=?";
					$.getJSON(url2,{nom:tipEv
					}).done(function(data){
		 	 		
						$.each(data, function(i,item){
							var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarCalendarioEscolar.php?jsoncallback=?";

			 	 			$.getJSON(url3,{id:item.idTipoEvento, des:descripcionEvento, fe1:fechaPrimera, fe2:fechaSegunda}).done(function(data){			
			 	 					alert("Se Ha Modificado Los Datos");
			 	 					$("#diaGCED option[value='"+dia2+"']").attr("selected",true);
		 	 						$("#mesGCED option[value='"+mes2+"']").attr("selected",true);
		 	 						$("#yearGCED option[value='"+year2+"']").attr("selected",true);
		 	 						$("#ingNTE3").val("");
		 	 						$("#inputColor3").val("#000000");
		 	 						$("#inputColor3").css("background","white");
		 	 						$(".optionNo2").remove();
									var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaTipoEvent.php?jsoncallback=?";

										$.getJSON(url3,{}).done(function(data){
											$.each(data, function(i,item){
												$("#selectTipoEvent2").append("<option class='optionNo2' value='"+item.idTipoEvento+"'>"+item.nomTipoEvento+"</option>");
											});
											$("#selectTipoEvent2 option[value='"+item.idTipoEvento+"']").attr("selected",true);
										});
		 	 						
		 	 						
								});
 	 					});
					});
 	 			});				
			}
		else{
			alert("Ingres Nombre Del Evento y El Color a Asignar");
			
		}
	}
}

function aparecerNuevo()
{
	$('.trOculto').show("slow");
	$('.trVisibleINE').hide();
	tipoEvent="nuevo";
}

function aparecerNuevoModificar() {
	$('.trOculto2').show("slow");
	$('.trVisibleINE3').hide();
	tipoEvent2="nuevo";
}

function aparecerSelect()
{
	$('.trOculto').hide();
	$('.trVisibleINE3').show("slow");
	tipoEvent="select";
}

function aparecerSelectModificar() {
	$('.trOculto2').hide();
	$('.trVisibleINE3').show("slow");
	tipoEvent2="select";

}

function color()
{
	var colo= $("#inputColor").val();
	$("#inputColor").css("background",colo)
}

function color3()
{
	var colo= $("#inputColor3").val();
	$("#inputColor3").css("background",colo)
}
function aparecerModificarCE () 
{
	var dia=$("#diaGCE3").val();
	var mes=$("#mesGCE3 option:selected").val();
	var year=$("#yearGCE3").val();

	if(dia != "dia3" && mes != "mes3" && year != "year3")
	{
		fecha = dia + "/" + mes + "/" + year;
		
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarFechaCalendarioEscolar.php?jsoncallback=?";
		$.getJSON(url,{
				fe:fecha
			}).done(function(data){
		 	 	if(data.num != 0){
		 	 		$("#divModiCE").show("slide");
		 	 		$("#mod1").hide();

		 	 		$("#diaGCE4 option[value='"+dia+"']").attr("selected",true);
		 	 		$("#mesGCE4 option[value='"+mes+"']").attr("selected",true);
		 	 		$("#yearGCE4 option[value='"+year+"']").attr("selected",true);

		 	 		$("#diaGCED option[value='"+dia+"']").attr("selected",true);
		 	 		$("#mesGCED option[value='"+mes+"']").attr("selected",true);
		 	 		$("#yearGCED option[value='"+year+"']").attr("selected",true);

		 	 		$("#ingresarDescNE3").val(data.des);
		 	 		
		 	 		$("#selectTipoEvent2 option[value='"+data.idTE+"']").attr("selected",true);

				}
				else{
					alert("No Existe Un Evento - Seleccione Otra Fecha");
				}		
		});
	}
	else
	{
		alert("Ingrese Fecha Valida");
	}
}

function ingresarNuevaActividad()
{
	var dia=$("#diaGCE2").val();
	var mes=$("#mesGCE2 option:selected").val();
	var year=$("#yearGCE2").val();
	var fecha;
	var descripcionEvento;
	var grado;

	if(dia != "dia2" && mes != "mes2" && year != "year2")
	{
		fecha = dia + "/" + mes + "/" + year;
		
		descripcionEvento = $("#ingresarDescNE2").val();
		
		grado = $("#selectGrado").val();

		if(grado != "------------")
		{
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarActividad.php?jsoncallback=?";

			$.getJSON(url3,{fe:fecha, des:descripcionEvento, idg:grado}).done(function(data){
			 	 		resett();
			 	 		alert("Se Ha Creado La Actividad");
			});
		}
		else
			alert("Seleccione Grado");

	}
	else
		alert("Seleccione Fecha");
}

function ingresarNuevoEvento()
{
	var dia=$("#diaGCE").val();
	var mes=$("#mesGCE option:selected").val();
	var year=$("#yearGCE").val();
	var fecha;
	var descripcionEvento;
	var selectEvento, idTip;
	var nuevoEvent, colorEvent;

	if(dia != "dia1" && mes != "mes1" && year != "year1")
	{
		fecha = dia + "/" + mes + "/" + year;
		
		descripcionEvento = $("#ingresarDescNE").val();
		
		if(tipoEvent=="select")
		{
			selectEvento=$("#selectTipoEvent").val();

			if(selectEvento != "-----------------------")
			{
				idTip = $("#selectTipoEvent option:selected").val();

				var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarCalendarioEscolar.php?jsoncallback=?";

			 	$.getJSON(url3,{id:idTip, des:descripcionEvento, fe:fecha}).done(function(data){
			 	 		resett();
			 	 		alert("Se Ha Creado El Evento");
					});

			}
			else
			{
				alert("Seleccione Un Tipo De Evento");
			}
		}
		else
		{
			nuevoEvent=$("#ingNTE").val();
			colorEvent=$("#inputColor").val();

			if(nuevoEvent != "" && colorEvent != "#000000")
			{
				var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarTipoEvento.php?jsoncallback=?";

 	 			$.getJSON(url,{nomTipo:nuevoEvent, colorTipo:colorEvent}).done(function(data){	
 	 				var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarTipoEvento.php?jsoncallback=?";
					$.getJSON(url2,{nom:nuevoEvent
					}).done(function(data){
		 	 		
						$.each(data, function(i,item){
							var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarCalendarioEscolar.php?jsoncallback=?";

			 	 			$.getJSON(url3,{id:item.idTipoEvento, des:descripcionEvento, fe:fecha}).done(function(data){
			 	 					resett();
			 	 					rellenarSelectTipoEvent();
			 	 					alert("Se Ha Creado El Evento");
								});
 	 					});
					});
 	 			});				
			}			
		}
	}
	else
		alert("Seleccionar Fecha");
}

function gestionBotonesMenu(){
	$('.ingresar').on("click",function(){gestionesBoton("ingresoCalendario,.hideLista","titulo,.listaPrincipal");$('.atras1').show();});

	$('.consultar').on("click",function(){gestionesBoton('consultarCalendario,.hideLista',"titulo,.listaPrincipal");});

	$('.modificar').on("click",function(){gestionesBoton('modificarActividades,hideLista',"titulo,.listaPrincipal");});

	$('.nuevoEvento').on("click",function(){gestionesBoton('nuevoIngr',"nuevoAct");$('.atras1').show();resetear()});

	$('.nuevoActividad').on("click",function(){gestionesBoton('nuevoAct',"nuevoIngr");$('.atras1').show();resetear()});

	$('.modCalEsc').on("click",function(){gestionesBoton('modCalEscolar,#mod1',"titulo,.modificarActividades");});

	$('.modCalAct').on("click",function(){gestionesBoton('modCalActividades,#mod2',"titulo,.modificarActividades");});

	$('.atras1 > #atras,#at').on("click",function(){
		resetear();
		atrasEvento("listaPrincipal,.titulo","nuevoAct,.nuevoIngr,.ingresoCalendario"); 

	});
	$('.atras1 > #atras,#at').on("click",function(){
		atrasEvento("listaPrincipal,.titulo","nuevoAct,.nuevoIngr,.ingresoCalendario"); 

	});
	$('.atras2 > #atras,#at').on("click",function(){
		atrasEvento("listaPrincipal,.titulo","consultarCalendario"); 

	});
	$('.atras3 > #atras,#at').on("click",function(){
		atrasEvento("listaPrincipal,.titulo","modificarActividades"); 

	});

	$('.atras4 > #atras,#at').on("click",function(){
		resetear();
		atrasEvento("modificarActividades","modCalEscolar,#mod1"); 

	});
	$('.atras5 > #atras,#at').on("click",function(){
		resetear();
		atrasEvento("modificarActividades","modCalActividades,#mod2"); 

	});
}

function gestionesBoton(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");
	$('.atras1').hide();
	resett();
}

function atrasEvento(mostrar,ocultar)
{
	$("."+mostrar).show("slide");
	$("."+ocultar).hide("slow");
	$(".atras1").show();
	resett();
}

function resetear(){
		$('input[type=text]').val("");
		$('textarea').val("");
		resett();
}
//Llamas a la funcion que lee la url
function linksCambio2(){
	alert(getQueryVariable("nom") + "\n"+ getQueryVariable("app"));
}

//Lee las Variables que se mandan por GET
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");

               if(pair[0] == variable){return pair[1];}
       }
       return(false);

}

