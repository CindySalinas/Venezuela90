$(document).on("ready", empezar);

var idTipoUsuario;

function empezar(){
   
   $('.linkAtrasConsultar1').on("click",function(){actionBotones('menuPrincipal','consultar1');});

   $('.linkAtrasConsultar2').on("click",function(){actionBotones('consultar1','consultar2');});

   $('.linkAtrasIngresar1').on("click",function(){actionBotones('menuPrincipal','ingresar1');});

   $('.linkAtrasIngresar2').on("click",function(){actionBotones('ingresar1','ingresar2');});

   $('.linkAtrasEliminar1').on("click",function(){actionBotones('menuPrincipal','eliminar1');});

   $('.linkIngresar').on("click",function(){actionBotones('ingresar1','menuPrincipal');});

   $('.linkConsultar').on("click",function(){actionBotones('consultar1','menuPrincipal');});

   $('.linkEliminar').on("click",function(){actionBotones('eliminar1','menuPrincipal');});

   $('#bontonConsultar1').on("click", consultar1);

   $('#aceptarIngresar1').on("click", ingresar1);

   $('#botonIngresar2').on("click", ingresar2);

   $('#botonEliminar1').on("click", eliminar1);
} 

function resetear()
{
	$('input[type=text]').val("");
	$("#tipoUsuarioIngresar1 option[value=1]").attr("selected","true");
	
	$(".tablaDocenteIngresar2").css("display","none");
	$(".tablaAlumnoIngresar2").css("display","none");
	$(".tablaRepresentanteIngresar2").css("display","none");

}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function consultar1() 
{
	var cedula = $("#inputCedulaConsultar1").val();
	actionBotones("consultar2","consultar1");
}

function ingresar1() 
{
	idTipoUsuario = $("#tipoUsuarioIngresar1 option:selected").val();
	actionBotones("ingresar2","ingresar1");
	if(idTipoUsuario=="2")
	{
		actionBotones("tablaDocenteIngresar2","");
	}
	else if(idTipoUsuario=="3")
	{
		actionBotones("tablaAlumnoIngresar2","");
	}
	else if(idTipoUsuario=="4")
	{
		actionBotones("tablaRepresentanteIngresar2","");
	}	
}

function ingresar2() 
{
	alert(idTipoUsuario);
}

function eliminar1 () 
{
	var cedula = $("#cedulaEliminar1").val();
}