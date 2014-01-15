$(document).on("ready", inicio);

function inicio()
{
	ocultar();
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
