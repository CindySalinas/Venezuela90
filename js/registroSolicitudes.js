$(document).on("ready", empezar);

function empezar(){
botonesRegistroSolicitudAction();
$('#primerSelect').on("change",opcionesSelect);
$('#permisoRegistro').on("change",permisoRegistro);
$('#registroTipoCons').on("change",tipoConstRegistro);
} 

function botonesRegistroSolicitudAction(){
$('.nuevaSolicitud, #t1').on("click",function(){actionBotones('noticiasClass3','listaPrincipal,.titulo');});
$('.misSolicitudes, #t2').on("click",function(){actionBotones('noticiasClass','listaPrincipal,.titulo');});
$('.linkPrueba').on("click",function(){actionBotones('noticiasClass2','noticiasClass');});
/*$('.modificarCali, #t4').on("click",function(){actionBotones('noticiasClass2','hideLista,.titulo');});*/
$('.atras > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass');});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass2');});
$('.atras3 > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass3');});
}

function opcionesSelect(){
	var select1 =  $('#primerSelect option:selected').val();
	if(select1 == 1){
		actionLista('tipoConstRegistro','permisoCons,#contenidoSolic');
	}
	else if(select1 == 2){
		actionLista('permisoCons','tipoConstRegistro,#contenidoSolic')
	}
	else if(select1 == 0){
		actionLista('','tipoConstRegistro,.permisoCons,#contenidoSolic');
	}
}
function permisoRegistro(){
	var select2 =  $('#permisoRegistro option:selected').val();
	if(select2 !=0){
		actionLista('contenidoSolic','permisoCons');
		resetear();
	}else{
		actionLista('permisoCons','contenidoSolic');
		resetear();
	}
	
}
function tipoConstRegistro(){
	var select3 =  $('#registroTipoCons option:selected').val();
	if(select3 !=0){
		actionLista('contenidoSolic','tipoConstRegistro');
		resetear();
	}else{
		actionLista('tipoConstRegistro','contenidoSolic');
		resetear();
	}
	
}
function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function actionLista(mostrar,ocultar)
{
	$('#'+mostrar).show("slide");
	$('#'+ocultar).hide("slow");	
}

function resetear(){
	$('input[type=text]').val("");
	$('textarea').val("");
}






/*<div id="atr" class="atras2">
					<a id="atras"></a>
					<a id="at">Atrás</a>
				</div>*/