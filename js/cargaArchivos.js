$(document).on("ready", empezar);

function empezar(){
botonesCargaAction();
} 

function botonesCargaAction(){
$('.cargarR, .t1').on("click",function(){actionBotones('noticiasClass','listaPrincipal,.titulo');});
$('.descargarR, .t2').on("click",function(){actionBotones('noticiasClass2','listaPrincipal,.titulo');});

$('.atras > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass');});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass2');});

}


function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
