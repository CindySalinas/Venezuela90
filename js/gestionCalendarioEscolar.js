$(document).on("ready",iniciar);

function iniciar(){
gestionBotonesMenu();
//linksCambio2();
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
}

function atrasEvento(mostrar,ocultar)
{
	$("."+mostrar).show("slide");
	$("."+ocultar).hide("slow");
	$(".atras1").show();
}

function resetear(){
		$('input[type=text]').val("");
		$('textarea').val("");
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

