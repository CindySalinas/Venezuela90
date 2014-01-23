$(document).on("ready",iniciar);

function iniciar(){
	gestionAdministrativa();
	$('.guardarP').on("click",guardarPago);
	$('.preVerP').on("click",previ);
	printRecibo();
	$('#tipoBusc').on("change",buscReporte);
	$('.busInAClass').on("click",cargarTabla);
	$('#BuscarConsulta').css({"display":"block","margin":"10px auto"});
	$('#BuscarConsulta').on("click",consultarInfoAdmin);
}

function gestionAdministrativa(){
	var registro = $('.registroC').click(function(){
		if($('.informaAdm').is(":visible") || $('.mensControl').is(":visible")){
			$('.informaAdm , .mensControl,.registroCancelacion,.registroCancelacion2').hide("slide");
			$('#canMensualidades,.asd').show("slow");
			$('.registroCancelacion').toggle("slide");
		}
		else{
			$('.alert').remove();
			$('.registroCancelacion').toggle("slide");
			$('#canMensualidades,.asd').show("slow");
		}
	});

	var infAdmin = $('.informA').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.mensControl').is(":visible") ||$('.registroCancelacion2').is(":visible")){
			$('.registroCancelacion,.mensControl').hide("slide");
			$('.informaAdm').toggle("slide");
		}
		else
			$('.informaAdm').toggle("slide");
	});
	var controlM = $('.controlM').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.informaAdm').is(":visible")){
			$('.registroCancelacion,.informaAdm').hide("slide");
			$('.mensControl').toggle("slide");
		}
		else
			$('.mensControl').toggle("slide");

	});
	var reporte = $('.reportesC').click(function(){


	});
	var atr = $('.atrasP').click(function(){
		$(".registroCancelacion").hide("slow");
		resetear();
	})
}
// variables globales

function guardarPago(){
	var monto = $('#monto').val(),
	ced = $('#ced').val(),
	personaPago = $('#personaPago').val(),
	monto2 = $('#monto2').val(),
	conceptoP = $('#conceptoP').val(),
	dia = $('#dia').val(),
	mes = $('#mes').val(),
	year= $('#year').val();
	$('.alert').remove();
	//var fecha = dia+"-"+mes+"-"+"20"+year;
	var fecha = "20"+year+"-"+mes+"-"+dia;
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/pago.php?jsoncallback=?";
	$.getJSON(url,{
		val1:monto,
		val2:ced,
		val3:personaPago,
		val4:monto2,
		val5:conceptoP,
		val6:fecha
	}).done(function(data){
		if(data.con!=0){
			resetear();
			$('#msj').append("<div class='alert alert-success'>"+data.mensaje+"</div>");
			$('#msj').show("slide");
			$('#canMensualidades,.asd').hide("slow");
			
		}
		else{
			resetear();
			$('#msj').append("<div class='alert alet-danger'>"+data.mensaje+"</div>)");
			$('#canMensualidades,asd').hide("slow");
			$('#msj').show("slide");
		}
		
	});
}
function resetear(){
	$('input[type=text]').val("");

}
function previ(){

	var monto = $('#monto').val(),
	ced = $('#ced').val(),
	personaPago = $('#personaPago').val(),
	monto2 = $('#monto2').val(),
	conceptoP = $('#conceptoP').val(),
	dia = $('#dia').val(),
	mes = $('#mes').val(),
	year= $('#year').val(),
	fecha = "20"+year+"-"+mes+"-"+dia;

	if($('input[type=text]').val()==""){
		alert("Inserte datos");
	}else
		if($(".registroCancelacion").is(":visible")){
				$('.atras1').before('<div id="canMensualidades2"><figure id="figMen1"><img src="../images/v90logo.png"></figure><div id="divMen1"><p>UNIDAD EDUCATIVA</p><P>Venezuela 90</P><p>Av. Soublette entre Independencia y Rondón N° 102-20 - Telf.: (0241) 859.58.06 Inscrito en el M.E.D. Pd10140814 Valencia - Edo. Carabobo</p></div><div id="divMen2">	Recibo N° 	<span>038201</span><p>POR Bs. <input type="text" id="monto21" disabled></p></div><div class="diCom"><div>	<br><label>He recibido de:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>	<input type="text" class="in1 mmL" id="personaPago2" disabled><div><label class="mmL">La cantidad de:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" class="in1 mmL" id="monto22" disabled></div><div><label class="mmL">Por concepto de:&nbsp;</label><input type="text" class="in1 mmL" id="conceptoP2" disabled></div><div class="left"><br><div class="centrar"><label id="val" class="mmL centrar">Valencia,&nbsp;'+fecha+'</label></div></div></div></div><div class="oodiv"><div>NOTA: NO EFECTUAMOS DEVOLUCIÓN DE DINERO</div><div class="floatRight">__________________________</div></div></div>');

					$('#monto21').val(monto);
					$('#ced2').val(ced);
					$('#personaPago2').val(personaPago);
					$('#monto22').val(monto2);
					$('#conceptoP2').val(conceptoP);
					$(".registroCancelacion").hide("slow");
					$('.registroCancelacion2').show("slide");
	}
$('.atras1 > #atras,#at').on("click",function(){
	$('.registroCancelacion2').hide("slow");
	$(".registroCancelacion").show("slide");
	$('#canMensualidades2').remove();
});
	
}
function printRecibo(){
	$('.imprimirP').on("click",function(){
		var dia = $('#dia').val(),
		mes = $('#mes').val(),
		year= $('#year').val(),
		fecha = "20"+year+"-"+mes+"-"+dia;
		$('#algoOcul').hide();
		$('#mostOcul').append("<label class='mmL centrar'>Valencia,"+fecha+"</label>");
		$('#mostOcul').show();
		window.print();
		void 0 ;
	});
}

function buscReporte(){
	var select1 = $('#tipoBusc option:selected').val();
	//.divInCeInAClass,.divInMesInAClass, .busInAClass,#tablaInA,#links
	if(select1 == 0){
		$('#busInA').css({"display":"block","margin":"10px auto"});
		actionBotones('divInCeInAClass,.busInAClass','divInMesInAClass')
	}else
		if(select1 == 1){
			$('#busInA').css({"display":"block","margin":"10px auto"});
			actionBotones('divInMesInAClass,.busInAClass','divInCeInAClass')
	}
	else 
		if(select1 ==2){
			$('#busInA').css({"display":"block","margin":"10px auto"});
			actionBotones('busInAClass','divInCeInAClass,.divInMesInAClass')
		}
	else{
		actionBotones('','divInCeInAClass,.divInMesInAClass,.busInAClass,#busInA');
	}
}
function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
function cargarTabla(){
	$('#tablaInA,#links').show();
}

function consultarInfoAdmin(){
	$('.atras2 > #atras, #at').on("click",function(){ actionBotones('buscQ','tablasAdministrativa')})
	$('#BuscarConsulta').on("click",function(){actionBotones('tablasAdministrativa','buscQ')});
}