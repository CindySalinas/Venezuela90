$(document).on("ready",iniciar);

function iniciar(){
	gestionAdministrativa();
}

function gestionAdministrativa(){
	var registro = $('.registroC').click(function(){
		if($('.informaAdm').is(":visible") || $('.mensControl').is(":visible")){
			$('.informaAdm , .mensControl').hide("slide");
			$('.registroCancelacion').toggle("slide");
		}
		else
			$('.registroCancelacion').toggle("slide");

	});

	var infAdmin = $('.informA').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.mensControl').is(":visible")){
			$('.registroCancelacion , .mensControl').hide("slide");
			$('.informaAdm').toggle("slide");
		}
		else
			$('.informaAdm').toggle("slide");
	});
	var controlM = $('.controlM').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.informaAdm').is(":visible")){
			$('.registroCancelacion , .informaAdm').hide("slide");
			$('.mensControl').toggle("slide");
		}
		else
			$('.mensControl').toggle("slide");

	});
	var reporte = $('.reportesC').click(function(){
	

	});
}
