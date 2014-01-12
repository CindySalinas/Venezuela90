$(document).on("ready", inicio);

function inicio()
{
	ocultar();

	mensajesRecibidos();

	$("#linkNewMensaje").on("click", function(){navMensajes('.tablaNewMensaje');});

	$("#linkMensajesRecibidos").on("click", mensajesRecibidos);

	$("#linkMensajesRecibidos").on("click", function(){navMensajes('.tablaMenRecibidos');});

	$("#linkMensajesSinLeer").on("click", function(){navMensajes('.tablaSinLeer');});

	$("#linkMensajesEnviados").on("click", function(){navMensajes('.tablaEnviados');});

	$("#linkMensajeFavoritos").on("click", function(){navMensajes('.tablaMenFavoritos');});
	
	$("#enviarNuevoMensaje").on("click", function(){comprobarCorreo();});
}

function ocultar()
{
	$(".tablaMensajes").hide();
	$(".tablaSinLeer").hide();
	$(".tablaEnviados").hide();
	$(".tablaMenFavoritos").hide();
	$(".tablaNewMensaje").hide();
	$(".divOcultoDes").hide();
	$("#texmensaje").val("");
	$("#asunto").val("");
	$("#destinatario").val("");
	$(".alert").hide();
	$("#destinatario").css("border-color","#ededed");
	$("#asunto").css("border-color","#ededed");
	$("#texmensaje").css("border-color","#ededed");
	$("#divMenRec").remove();
}

function navMensajes(dato)
{
	ocultar();
	$(".tablaMenRecibidos").hide();
	$(dato).show("slide");
}

function enviarMensaje()
{

	var destino = $("#destinatario").val();
	var tema = $("#asunto").val();
	var todoMensaje = $("#texmensaje").val();
	var veamos = $(".divOcultoDes").attr("id");
	var cedulaRemitente = $.cookie("cedulaAdmin");
	var fec = fecha();
	var hor = hora();
	if(destino=="" || destino==" ")
	{
		$("#destinatario").attr("placeholder", "Ingrese Destinatario").blur();
		$("#destinatario").css("border-color","#b93207");
		$("#asunto").css("border-color","#ededed");
		$("#texmensaje").css("border-color","#ededed");
		$(".alert").hide("slide");
	}
	else if(tema=="" || tema==" ")
	{
		$("#asunto").attr("placeholder", "Ingrese Asunto").blur();
		$("#asunto").css("border-color","#b93207");
		$("#destinatario").css("border-color","#ededed");
		$("#texmensaje").css("border-color","#ededed");
		$(".alert").hide("slide");
	}
	else if(todoMensaje=="" || todoMensaje==" ")
	{
		$("#destinatario").css("border-color","#ededed");
		$("#asunto").css("border-color","#ededed");
		$("#texmensaje").attr("placeholder", "Ingrese Un Mensaje").blur();
		$("#texmensaje").css("border-color","#b93207");
		$(".alert").hide("slide");
	}
	else if(veamos=="si")
	{
		/*alert($(".divOcultoDes").attr("id"));*/
		$(".alert").hide("slide");
		$("#destinatario").css("border-color","#ededed");
		$("#asunto").css("border-color","#ededed");
		$("#texmensaje").css("border-color","#ededed");
		
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarMensaje.php?jsoncallback=?";

		$.getJSON(url,{
			userCedula:cedulaRemitente,
 	 		destCorreo:destino,
 	 		asunto:tema,
 	 		destMensaje:todoMensaje,
 	 		fecha:fec,
 	 		hora:hor
		}).done(function(data){
	 	 	$("#divVerAlert").append("<div class='alert  alert-success'>"+data.mensaje+"</div>");
	 	 	$("#destinatario").val("");
			$("#asunto").val("");
			$("#texmensaje").val("");
		});
	}
	else
	{
		$(".alert").hide("slide");
		$("#destinatario").css("border-color","#ededed");
		$("#asunto").css("border-color","#ededed");
		$("#texmensaje").css("border-color","#ededed");
		alert("El Destinatario No Existe");
	}
	
}

function comprobarCorreo()
{
	var des = $("#destinatario").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCorreo.php?jsoncallback=?";
	$.getJSON(url,{
			correoUsuario:des
		}).done(function(data){
	 	 	if(data.num != 0){
	 	 		$("#destinatario").css("color", "black");
	 	 		$("#destinatario").css("font-weight", "normal");
				$(".divOcultoDes").hide("slide");
				$(".divOcultoDes").attr("id","si");
				
				enviarMensaje();
			}
			else{
				$("#destinatario").css("color", "#b93207");
				$("#destinatario").css("font-weight", "bold");
				$(".divOcultoDes").show("slide");
				$(".divOcultoDes").attr("id","no");
				
				enviarMensaje();
			}		
		});
		
}

function mensajesRecibidos()
{
	$(".trMensajesRecibidos").remove();
	var cedulaRemitente = $.cookie("cedulaAdmin");

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMensajesRecibidos.php?jsoncallback=?";

		$.getJSON(url,{cedula:cedulaRemitente
		}).done(function(data){
	 	 	if(data.num != 0){
				$.each(data, function(i,item){
					
					if(i==(item.cantMensajes-1))
					{
						$("#tbodyMenRecibidos").append("<tr class='trMensajesRecibidos'><td class='fotoMenDoc' rowspan=2><figure class='centrar'><img width=60 src='../images/user.png'></figure></td><td class='nomMenDoc'>"+item.nombresDestino+"<a class='floatRight' id='e"+item.idMensaje+"'>Eliminar</a><a class='floatRight'>Favorito</a><a class='floatRight' id='r"+item.idMensaje+"'>Responder</a></td></tr><tr class='trMensajesRecibidos'><td class=' menMenDoc'><label>"+item.asuntoMensaje+" </label><a id='"+item.idMensaje+"'> Ver Más</a></td></tr>");
					}
					else
					{
						$("#tbodyMenRecibidos").append("<tr class='trMensajesRecibidos'><td class='borAba fotoMenDoc' rowspan=2><figure class='centrar'><img width=60 src='../images/user.png'></figure></td><td class='nomMenDoc'>"+item.nombresDestino+"<a class='floatRight' id='e"+item.idMensaje+"'>Eliminar</a><a class='floatRight'>Favorito</a><a class='floatRight' id='r"+item.idMensaje+"'>Responder</a></td></tr><tr class='trMensajesRecibidos'><td class='borAba menMenDoc'><label>"+item.asuntoMensaje+" </label><a id='"+item.idMensaje+"'> Ver Más</a></td></tr>");				
					}
					$("#"+item.idMensaje).on("click", function(){linkVerMas(item.idMensaje, item.correoRemitente, item.correoDestino, item.asuntoMensaje, item.mensaje, item.nombresDestino);});

					$("#r"+item.idMensaje).on("click", function(){responderMensaje(item.correoRemitente, item.asuntoMensaje);});

					$("#e"+item.idMensaje).on("click", function(){eliminarMensaje(item.idMensaje);});
				});
			}
			else
				$("#tbodyMenRecibidos").append("<tr id='divMenRec'><td id='espacioTD'><div class='alert  alert-success'>"+data.mensaje+"</div></td></tr>");
		});
}

function linkVerMas(idMensaje, correoRemitente, correoDestino, asuntoMensaje, mensaje, nombresDestino)
{
	$("#textAsunto").text(asuntoMensaje);
	$("#nombreRemit").text(nombresDestino);
	$("#correoRemit").text(correoRemitente);
	$("#pMensaje").text(mensaje);

	$("#menRes").on("click", function(){responderMensaje(correoRemitente, asuntoMensaje);});
	$("#menElimiar").on("click", function(){eliminarMensaje(idMensaje);});
	navMensajes(".tablaMensajes");
}

function responderMensaje(correoRemitente, asuntoMensaje)
{
	navMensajes(".tablaNewMensaje");
	$("#destinatario").val(correoRemitente);
	$("#asunto").val("RE: " + asuntoMensaje);
}

function eliminarMensaje(id)
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarMensaje.php?jsoncallback=?";
	$.getJSON(url,{
			idMen:id
		}).done(function(data){
	 	 	alert("Mensaje Eliminado");	
	 	 	mensajesRecibidos();
	 	 	navMensajes(".tablaMenRecibidos");
		});
	
}

function hora(){

	var Digital=new Date();
	var hours=Digital.getHours();
	var minutes=Digital.getMinutes();
	var seconds=Digital.getSeconds();
	var dn="am";

	if (hours>12)
	{
		dn="pm";
		hours=hours-12;
	}

	if (hours==0)
		hours=12;

	if (minutes<=9)
		minutes="0"+minutes;

	if (seconds<=9)
		seconds="0"+seconds;

	var hora = hours+":"+minutes+":"
	+seconds+dn;

	return hora;
}
/*Funcion para obtener la fecha actual*/
function fecha()
{
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

	var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

	var f=new Date();
	var fecha;

	fecha = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

	return fecha;
}