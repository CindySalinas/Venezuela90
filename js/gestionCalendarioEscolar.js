$(document).on("ready",iniciar);

function iniciar(){
gestionBotonesMenu();
linksCambio2();
}

function gestionBotonesMenu(){
	//Primer Boton Ingresar
	var ingresar = $('.ingresar').click(function(){
		if($('.consultarCalendario').is(":visible") || $('.modificarActividades').is(":visible")){
			$('#nuevoIngreso ,#nuevoActividad,.consultarCalendario,.modificarActividades,.modCalActividades,#mod2,.modCalEscolar,#mod1').hide("slide");
			$('.ingresoCalendario,.hideLista').toggle("slide");
		}
		else{
			$('.ingresoCalendario,.hideLista').toggle("slide");
			
		}

		//Boton Nuevo Ingreso de Evento
		var ingresarEvento = $('.nuevoEvento').click(function(){
			if($('#nuevoActividad').is(":visible")){
				$('#nuevoActividad').hide("slide");
				$('#nuevoIngreso').show("slide");
			}
			else
				$('#nuevoIngreso').show("slide");
		});
		// Boton Nueva Actividad 
		var ingresarActividad = $('.nuevoActividad').click(function(){
			if($('#nuevoIngreso').is(":visible")){
				$('#nuevoIngreso').hide("slide");
				$('#nuevoActividad').show("slide");
			}
			else
				$('#nuevoActividad').show("slide");
		});
	});

	//Primer Boton Consultar
	var consultar = $('.consultar').click(function(){
		if($('.ingresoCalendario').is(":visible")||$('.modificarActividades').is(":visible")){
				$('.ingresoCalendario,.hideLista,.modificarActividades,.modCalActividades,#mod2,.modCalEscolar,#mod1').hide("slide");
				$('.consultarCalendario').toggle("slide");
		}
		else{
			$('.consultarCalendario').toggle("slide");
		}
	});	

	//Primer Boton Modificar
	var modificar= $('.modificar').click(function(){
		if($('.ingresoCalendario').is(":visible")||$('.consultarCalendario').is(":visible")){
				$('.ingresoCalendario,hideLista,.consultarCalendario').hide("slide");
				$('.modificarActividades').toggle("slide");
		}
		else{
			$('.modificarActividades').toggle("slide");
		}
		//Boton Modificar Calendario de Evento
		var modiCalEscolar = $('.modCalEsc').click(function(){
		if($('#mod2').is(":visible")){
				$('.modCalActividades,#mod2').hide("slide");
				$('.modCalEscolar,#mod1').show("slide");
			}
			else
				$('.modCalEscolar,#mod1').show("slide");
		});
		// Boton Modificar  Actividad 
		var modciCalActi = $('.modCalAct').click(function(){
			if($('#mod1').is(":visible")){
				$('.modCalEscolar,#mod1').hide("slide");
				$('.modCalActividades,#mod2').show("slide");
			}
			else
				$('.modCalActividades,#mod2').show("slide");
		});
	});
}


/*
function prueba(){
	var textArea = $('.nicEdit-main').html();
	var asunto = $('#eAsunto').val();
	var fecha = $('input[name=date]').val();
	alert("Asunto: "+ asunto +"\n"+"texarea: "+ textArea+"\n"+"fecha: "+fecha);
	//<script type="text/javascript">bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });</script>
}*/
<<<<<<< HEAD
=======


//Llamas a la funcion que lee la url
function linksCambio2(){
	alert(getQueryVariable("nom") + "\n"+ getQueryVariable("app"));
}

//Lee las Variables que se mandan por GET
function getQueryVariable2(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");

               if(pair[0] == variable){return pair[1];}
       }
       return(false);

}
>>>>>>> 5b2546125a73c701b8a43c603ee30be3367b3455
