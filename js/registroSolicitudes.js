$(document).on("ready", empezar);

function empezar(){
botonesRegistroSolicitudAction();
$('#primerSelect').on("change",opcionesSelect);
$('#permisoRegistro').on("change",permisoRegistro);
$('#registroTipoCons').on("change",tipoConstRegistro);
$('#crearSoli').on("click",crearSolicitud);
} 

function botonesRegistroSolicitudAction(){
$('.nuevaSolicitud, #t1').on("click",function(){actionBotones('noticiasClass3','listaPrincipal,.titulo');});
$('.misSolicitudes, #t2').on("click",function(){actionBotones('noticiasClass','listaPrincipal,.titulo'); realizarBusqueda()});
$('.linkPrueba').on("click",function(){actionBotones('noticiasClass2','noticiasClass');});
$('#nuevaSolic').on("click",function(){actionBotones('noticiasClass3','listaPrincipal,.titulo,.noticiasClass');})
/*$('.modificarCali, #t4').on("click",function(){actionBotones('noticiasClass2','hideLista,.titulo');});*/
$('.atras > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass,#contenidoSolic,#permisoCons,#permisoRegistro');
	autoS();
});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass2,#contenidoSolic,#permisoCons,#permisoRegistro');
	autoS();
});
$('.atras3 > #atras,#at').on("click",function(){actionBotones('listaPrincipal,.titulo','noticiasClass3,#contenidoSolic,#permisoCons,#permisoRegistro'); 
autoS()
});
}
function autoS(){
	$("#primerSelect option[value='0'],#registroTipoCons option[value='0'],#permisoRegistro option[value='0']").attr("selected",true);
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
		actionLista('contenidoSolic,#permisoRegistro','a');
		resetear();
	}else{
		actionLista('permisoCons','contenidoSolic');
		resetear();
	}
	
}
function tipoConstRegistro(){
	var select3 =  $('#registroTipoCons option:selected').val();
	if(select3 !=0){
		actionLista('contenidoSolic,#tipoConstRegistro','a');
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


/*Funcion para obtener la fecha actual*/
function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
  // var xxx = dd + "-" +( MM+1) + "-" + yyyy;
  if(dd < 10 || MM < 10){
  	 var xxx = yyyy+ "-" +0+(MM+1)+ "-" +0+ dd;
  }else{
  	var xxx = yyyy+ "-" +(MM+1)+ "-" + dd;
  }
  
   return xxx;
}

function crearSolicitud(){
	$('.alert').remove();
	var primer = $("#primerSelect option:selected").val();
	var consts = $('#registroTipoCons option:selected').val(); 
	var perms = $('#permisoRegistro option:selected').val();
	var fecha = GetTodayDate();
	var mensaje= $('.textReSol').val();
	//var nombre = $('.inReSol').val();
	var estado = "Por Responder";
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/crearSolicitud.php?jsoncallback=?";
	$('#del > tr').remove();
	if(mensaje != ""){
		if(primer == 1){
			$.getJSON(url,{tipo:consts,fecha:fecha,coments:mensaje,edo : estado}).done(function(data){
				
				$('#msj').append("<div class='alert alert-success'>"+data.mensaje+"</div>");
					resetear();
			});
		}else
		if(primer == 2){
			$.getJSON(url,{tipo:perms,fecha:fecha,coments:mensaje,edo : estado}).done(function(data){
				
				$('#msj').append("<div class='alert alert-success'>"+data.mensaje+"</div>");
					resetear();
			});
		}else{
			$('#contenidoSolic').hide("slow");
			$('#msj').append("<div class='alert alert-success'>No se pudo Crea Solicitud</div>");
		}
	}
	else{
		alert("No se puede enviar una solicitud vacia");
	}
}

function realizarBusqueda(){
	$('.nooooo').remove();
	var tablas = $('#tbodyGS');
	/*var resp;*/
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/mostrarSolicitudes.php?jsoncallback=?"; 
	
	$.getJSON(url).done(function(data){
		if(data.num != 0){
			$.each(data,function(i,item){
				tablas.append("<tr class='nooooo'><td>"+item.numSoli+"</td><td>"+item.tipoSolic+"</td><td>"+item.fechaSoli+"</td><td>"+item.estadoSoli+"</td></tr>");
				//gestionesSelect('mostrarSoli','');
			});
		}
		else{alert(data.mensaje);}
	});
}

/*inReSol
textReSol
crearSoli 

nuevaSolic*/
/*<div id="atr" class="atras2">
					<a id="atras"></a>
					<a id="at">Atrás</a>
				</div>*/

