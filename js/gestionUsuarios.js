$(document).on("ready", empezar);

function empezar(){
   
   $('.linkAtrasConsultar1').on("click",function(){actionBotones('menuPrincipal','consultar1');});

   $('.linkAtrasConsultar2').on("click",function(){actionBotones('consultar1','consultar2');});

   $('.linkAtrasIngresar1').on("click",function(){actionBotones('menuPrincipal','ingresar1');});
} 

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}