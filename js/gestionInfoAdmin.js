$(document).on("ready", empezar);

function empezar(){
botonesGestionAction();
} 

function botonesGestionAction(){
$('.calificaciones, #t2').on("click",function(){actionBotones('hideLista','listaPrincipal');});
$('.consultarCali, #t3').on("click",function(){actionBotones('noticiasClass','hideLista,.titulo');});
$('.modificarCali, #t4').on("click",function(){actionBotones('noticiasClass2','hideLista,.titulo');});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('hideLista','noticiasClass,.listaPrincipal');});
$('.atras3 > #atras,#at').on("click",function(){actionBotones('hideLista','noticiasClass2,.listaPrincipal');});
$('#holas > #atras,#at').on("click",function(){actionBotones('listaPrincipal','hideLista');});
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
