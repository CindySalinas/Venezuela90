$(document).on("ready",iniciar);

function iniciar(){
	gestionAdministrativa();
	$('.guardarP').on("click",guardarPago);
	$('.preVerP').on("click",previ);
}

function gestionAdministrativa(){
	var registro = $('.registroC').click(function(){
		if($('.informaAdm').is(":visible") || $('.mensControl').is(":visible")){
			$('.informaAdm , .mensControl,.registroCancelacion,.registroCancelacion2').hide("slide");
			$('.registroCancelacion').toggle("slide");
		}
		else
			$('.registroCancelacion').toggle("slide");

	});

	var infAdmin = $('.informA').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.mensControl').is(":visible") ||$('.registroCancelacion2').is(":visible")){
			$('.registroCancelacion, .registroCancelacion2, .mensControl').hide("slide");
			$('.informaAdm').toggle("slide");
		}
		else
			$('.informaAdm').toggle("slide");
	});
	var controlM = $('.controlM').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.informaAdm').is(":visible")){
			$('.registroCancelacion,.registroCancelacion2, .informaAdm').hide("slide");
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

	var fecha = dia+"-"+mes+"-"+"20"+year;
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
			alert(data.mensaje);
		}
		else{
			alert(data.mensaje);
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
	year= $('#year').val();
	if($('input[type=text]').val()==""){
		alert("Inserte datos");
	}else
		if($(".registroCancelacion").is(":visible")){
				$('.atras1').before('<div id="canMensualidades2"><figure id="figMen1"><img src="../images/v90logo.png"></figure><div id="divMen1"><p>UNIDAD EDUCATIVA</p><P>Venezuela 90</P><p>Av. Soublette entre Independencia y Rondón N° 102-20 - Telf.: (0241) 859.58.06 Inscrito en el M.E.D. Pd10140814 Valencia - Edo. Carabobo</p></div><div id="divMen2">	Recibo N° 	<span>038201</span><p>POR Bs. <input type="text" id="monto21"></p><p>CEDULA: <input type="text" id="ced2"></p></div><div class="diCom"><div>	<br><label>He recibido de:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>	<input type="text" class="in1 mmL" id="personaPago2"><div><label class="mmL">La cantidad de:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" class="in1 mmL" id="monto22"></div><div><label class="mmL">Por concepto de:&nbsp;</label><input type="text" class="in1 mmL" id="conceptoP2"></div><div class="left"><label id="val" class="mmL">Valencia,&nbsp;</label><input type="text" class="mmL kkk"  id="dia2"><label class="mmLL">de</label><input type="text" class="mmL" id="mes2"><label class="mmLL">20</label><input type="text" class="mmL jjj" id="year2"></div></div></div><div class="oodiv"><div>NOTA: NO EFECTUAMOS DEVOLUCIÓN DE DINERO</div><div class="floatRight">__________________________</div></div></div>');
					$('#monto21').val(monto);
					$('#ced2').val(ced);
					$('#personaPago2').val(personaPago);
					$('#monto22').val(monto2);
					$('#conceptoP2').val(conceptoP);
					$('#dia2').val(dia);
					$('#mes2').val(mes);
					$('#year2').val(year);
					$(".registroCancelacion").hide("slow");
					$('.registroCancelacion2').show("slide");
	}
$('.atras1 > #atras,#at').on("click",function(){
	$('.registroCancelacion2').hide("slow");
	$(".registroCancelacion").show("slide");
	$('#canMensualidades2').remove();
});
	
}