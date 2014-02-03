$(document).on("ready",iniciar);

var cantidades;
var conceptoDe;

function iniciar(){
	resetear()
	gestionAdministrativa();
	$('.guardarP').on("click",guardarPago);
	$('.preVerP').on("click",previ);
	printRecibo();
	$('#tipoBusc').on("change",buscReporte);
	$('.busInAClass').on("click",cargarTabla);
	$('#BuscarConsulta').css({"display":"block","margin":"10px auto"});
	$('.atras2 > #atras, #at').on("click",function(){ actionBotones('buscQ','tablasAdministrativa')});
	$('#BuscarConsulta').on("click",function(){consultaInfoAd('tablasAdministrativa','buscQ')});
	$('#cantMeses').on("change",generarMeses);
	$('#conceptoP').on("change",comprobarConcepto);
}

function consultaInfoAd (mostrar,ocultar)
{
	var cedul = $("#cedulaBusc").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
	$.getJSON(url,{
	cedula:cedul
	}).done(function(data){
		if(data.num>0)
		{
			infoPago();
			$('.'+mostrar).show("slide");
			$('.'+ocultar).hide("slow");
			var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedulaCampos.php?jsoncallback=?";
			$.getJSON(url2,{
			cedula:cedul
			}).done(function(data){
				$.each(data, function(i,item){			
					var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCancelacionMensualidades.php?jsoncallback=?";
					$.getJSON(url,{
					idUsuario:item.idUsuario
					}).done(function(data){
						$.each(data, function(i,item){
							var fec2 = item.fechaa;
							var factura2 = item.facturaa;
							var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCancelacionMensualidadesPagadas.php?jsoncallback=?";
							$.getJSON(url,{
							idCan:item.idd
							}).done(function(data){
								$.each(data, function(i,item){

									$("#recibo"+item.nombreMes).text(factura2);
									$("#fecha"+item.nombreMes).text(fec2);	
									$("#recibo"+item.nombreMes).css("color","green");
									$("#fecha"+item.nombreMes).css("color","green");
									$("#recibo"+item.nombreMes).addClass("bold");
									$("#fecha"+item.nombreMes).addClass("bold");
								});
							});

						});
					});
				});
			});
		}
		else
		{
			alert("No Existe La Cedula");
		}
	});

		
}

function gestionAdministrativa(){
	var registro = $('.registroC').click(function(){
		if($('.informaAdm').is(":visible") || $('.mensControl').is(":visible")){
			$('.informaAdm , .mensControl,.registroCancelacion,.registroCancelacion2').hide("slide");
			$('#canMensualidades,.asd').show("slow");
			$('.registroCancelacion').toggle("slide");
			resetear();
		}
		else{
			$('.alert').remove();
			$('.registroCancelacion').toggle("slide");
			$('#canMensualidades,.asd').show("slow");
			resetear();
		}
	});

	var infAdmin = $('.informA').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.mensControl').is(":visible") ||$('.registroCancelacion2').is(":visible")){
			$('.registroCancelacion,.mensControl').hide("slide");
			$('.informaAdm').toggle("slide");
			resetear();
		}
		else{
			$('.informaAdm').toggle("slide");
			resetear();
		}
	});
	var controlM = $('.controlM').click(function(){
		if($('.registroCancelacion').is(":visible") || $('.informaAdm').is(":visible")){
			$('.registroCancelacion,.informaAdm').hide("slide");
			$('.mensControl').toggle("slide");resetear();
		}
		else{
			$('.mensControl').toggle("slide");resetear();}

	});
	var atr = $('.atrasP').click(function(){
		$(".registroCancelacion").hide("slow");
		resetear();
	})
}
// variables globales

function guardarPago(){

	var recibidoDe=$("#personaPago").val();
	var cantidad=$("#monto2").val();	
	var fecha=$("#dia option:selected").val() + "/" + $("#mes option:selected").val() + "/" + $("#year option:selected").val(); 
	var yearEscola = $("#yearP option:selected").val();

	var numeroRecibo=$("#numRecibo").val();
	var cedula=$("#ced").val();
	var montoBS=$("#monto").val();
	var conceptoDefinitivo;

	if(recibidoDe=="" ||  recibidoDe==" " || cantidad=="" ||  cantidad==" " || numeroRecibo=="" ||  numeroRecibo==" " || cedula=="" ||  cedula==" " || montoBS=="" ||  montoBS==" ")
	{
		alert("Complete Los Campos");
	}
	else if(conceptoDe==undefined )
	{
		alert("Ingrese Un Concepto");
	}
	else if(conceptoDe=="nadaConcepto")
	{
		alert("Seleccione Un Concepto");
	}
	else if(yearEscola=="nadaYear")
	{
		alert("Seleccione Año Escolar");
	}
	else if(conceptoDe=="Inscripcion")
	{
		conceptoDefinitivo=conceptoDe;
	}
	else if(conceptoDe=="Mensualidades")
	{	
		var cantidadMeses=$("#cantMeses option:selected").val();

		if(cantidadMeses==0)
		{
			alert("Ingrese Numero De Mensualidades a Pagar");
		}
		else
		{
			var nombreMeses = new Array(cantidadMeses);

			for (var x = 0; x < cantidadMeses; x++) {
				nombreMeses[x]=$("#mesMen"+(x+1)).val();
			};
			var contando=0;
			for (var x = 0; x < cantidadMeses; x++) {
				if(nombreMeses[x]=="Mes0")
					contando++;
			};
			if(contando>0)
			{
				alert("Seleccione Los Meses");
			}
			else
			{
				var nombreMesesObject={};

			    for(i in nombreMeses)
			    {
			        nombreMesesObject[i] = nombreMeses[i];
			    }
			    nombreMesesObject=JSON.stringify(nombreMesesObject);

			    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
				$.getJSON(url,{
					cedula:cedula
				}).done(function(data){
					if(data.num>0)
					{
						var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedulaCampos.php?jsoncallback=?";
						$.getJSON(url,{
							cedula:cedula
						}).done(function(data){
							$.each(data, function(i,item){			
								var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarCancelacionMensualidadesPagadas.php?jsoncallback=?";
								$.getJSON(url,{
									idUsuario:item.idUsuario,
									nombreRecibidoDe:recibidoDe,
									cantidadTexto:cantidad,
									fec:fecha,
									numRecibo:numeroRecibo,
									montoBss:montoBS,
									concepto:conceptoDe,
									year:yearEscola,
									mes:nombreMesesObject,
									cant:cantidadMeses
								}).done(function(data){
									if(data.con>0){
										resetear();
										alert("Se Ha Realizado El Pago Satisfactoriamente");
									}
									else
										alert(data.mensaje);
								});
							});
						});
					}
					else
					{
						alert("La Cedula Es Incorrecta");
					}
				});

			}
		}	

	}
	else if(conceptoDe=="Otros")
	{
		conceptoDefinitivo=$("#conceptoOtro").val();
	}

	if(conceptoDe!="Mensualidades")
	{
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
		$.getJSON(url,{
		cedula:cedula
		}).done(function(data){
			if(data.num>0)
			{
				var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedulaCampos.php?jsoncallback=?";
				$.getJSON(url,{
				cedula:cedula
				}).done(function(data){
					$.each(data, function(i,item){			
					var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarCancelacionMensualidades.php?jsoncallback=?";
					$.getJSON(url,{
					idUsuario:item.idUsuario,
					nombreRecibidoDe:recibidoDe,
					cantidadTexto:cantidad,
					fec:fecha,
					numRecibo:numeroRecibo,
					montoBss:montoBS,
					year:yearEscola,
					concepto:conceptoDefinitivo
					}).done(function(data){
						if(data.con>0){
							resetear();
							alert("Se Ha Realizado El Pago Satisfactoriamente");
						}
						else
							alert("No Se Ha Podido Efectuar La Factura");
						});
					});
				});
			}
			else
			{
				alert("La Cedula Es Incorrecta");
			}
		});
	}
}
function resetear(){
	$('input[type=text]').val("");
	$(".divDeLosMeses").remove();
	$("#cantMeses option[value='0']").attr("selected",true);
	$("#conceptoP option[value='nadaConcepto']").attr("selected",true);
	$("#yearP option[value='nadaYear']").attr("selected",true);
	$("#divMensualidadesOculto").css("display","none");
	$("#conceptoOtrosOculto").css("display","none");

	$("#dia option[value='"+diaaa()+"']").attr("selected",true);
	$("#mes option[value='"+messs()+"']").attr("selected",true);
	$("#year option[value='"+yearrr()+"']").attr("selected",true);
	$("#tbodyDeuda tr").remove();
	infoPago();

}

function infoPago ()
{
	$("#reciboEnero").text("");
	$("#reciboFebrero").text("");
	$("#reciboMarzo").text("");
	$("#reciboAbril").text("");
	$("#reciboMayo").text("");
	$("#reciboJunio").text("");
	$("#reciboJulio").text("");
	$("#reciboAgosto").text("");
	$("#reciboSeptiembre").text("");
	$("#reciboOctubre").text("");
	$("#reciboNoviembre").text("");
	$("#reciboDiciembre").text("");

	$("#fechaEnero").text("");
	$("#fechaFebrero").text("");
	$("#fechaMarzo").text("");
	$("#fechaAbril").text("");
	$("#fechaMayo").text("");
	$("#fechaJunio").text("");
	$("#fechaJulio").text("");
	$("#fechaAgosto").text("");
	$("#fechaSeptiembre").text("");
	$("#fechaOctubre").text("");
	$("#fechaNoviembre").text("");
	$("#fechaDiciembre").text("");
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
	
	$('#busInA').css({"display":"block","margin":"10px auto"});
		actionBotones('divInCeInAClass,.busInAClass','divInMesInAClass')

	$("#cedulaBusc22").val("");
	$("#meses22 option[value='0']").attr("selected",true);
	$('#tablaInA').hide("slow");
	if(select1 == 0){
		$('#busInA').css({"display":"block","margin":"10px auto"});
		actionBotones('divInCeInAClass,.busInAClass','divInMesInAClass');
		$('#links').hide();
	}else
		if(select1 == 1){
			$('#busInA').css({"display":"block","margin":"10px auto"});
			$('.divInMesInAClass').show("slow");	
			$('.busInAClass').show("slow");	
			$('.divInCeInAClass').hide();
			$('#links').hide();
	}
	else 
		if(select1 ==2){
			$('.divInCeInAClass').hide();	
			$('.divInMesInAClass').hide();	
			$('#links').hide();
		}
	else{
		$('.divInCeInAClass').hide();	
		$('.divInMesInAClass').hide();	
		$('#links').hide();			
	}
}
function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
function cargarTabla()
{
	var seleccionado = $('#tipoBusc option:selected').text();
	$("#tbodyDeuda tr").remove();
	if(seleccionado=="Alumno")
	{
		var cedula = $("#cedulaBusc22").val();
		var meses9=new Array();
		meses9[0]="Septiembre";
		meses9[1]="Octubre";
		meses9[2]="Noviembre";
		meses9[3]="Diciembre";
		meses9[4]="Enero";
		meses9[5]="Febrero";
		meses9[6]="Marzo";
		meses9[7]="Abril";
		meses9[8]="Mayo";
		meses9[9]="Junio";
		meses9[10]="Julio";
		meses9[11]="Agosto";

		var meses12=new Array();

		meses12[0]="Enero";
		meses12[1]="Febrero";
		meses12[2]="Marzo";
		meses12[3]="Abril";
		meses12[4]="Mayo";
		meses12[5]="Junio";
		meses12[6]="Julio";
		meses12[7]="Agosto";
		meses12[8]="Septiembre";
		meses12[9]="Octubre";
		meses12[10]="Noviembre";
		meses12[11]="Diciembre";

		var mesActual=messs10();
		var mes1, mes2;

		for (var x=0; x<12; x++)
		{
			if(x==mesActual)
			{
				mes1=meses12[x];
			}
		}
		for (var x=0; x<12; x++)
		{
			if(meses9[x]==mes1)
			{
				mes2=x;
			}
		}

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
		$.getJSON(url,{
		cedula:cedula
		}).done(function(data){
			if(data.num>0)
			{
				$('#tablaInA,#links').show("slide");				
				var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedulaCampos.php?jsoncallback=?";
				$.getJSON(url2,{
				cedula:cedula
				}).done(function(data){
					$.each(data, function(i,item){			
						var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCancelacionMensualidades.php?jsoncallback=?";
						var idusarioss=item.idUsuario;
						$.getJSON(url,{
						idUsuario:item.idUsuario
						}).done(function(data){
							$.each(data, function(i,item){		
								var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCancelacionMensualidadesPagadas2.php?jsoncallback=?";
								$.getJSON(url,{
								idCan:item.idd
								}).done(function(data){
									var cont=0;
									var messesse;							
									$.each(data, function(i,item){
										messesse=item.nombreMes;
									});
									
									for(var y=0;y<12;y++)
									{
										if(meses9[y]==messesse)
										{
											cont=y;			
										}						
									}
									var deuda=mes2-cont;
									
									var deudaTotal=deuda*320;

									var nom, ape, ced10;

									var url55 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarDatosUsuarios.php?jsoncallback=?";
									$.getJSON(url55,{
									id:idusarioss
									}).done(function(data){		
										$.each(data, function(i,item)
										{
											nom=item.nombre;
											ape=item.apellido;
											ced10=item.cedula;
										});
										$("#nomm"+idusarioss).remove();
										$("#tbodyDeuda").append("<tr id='nomm"+idusarioss+"'><td>"+ape+" "+nom+"</td><td>"+ced10+"</td><td>"+deuda+"</td><td>"+deudaTotal+"</td></tr>");
									});
								});
							});
						});
					});
				});
			}
			else
			{
				alert("No Existe La Cedula");
			}
		});
			
	}
	else if(seleccionado=="Mes")
	{
		var mesMes=$("#meses22 option:selected").text();
		alert(mesMes);
	}
	else if(seleccionado=="Todos")
	{
		alert("Todos");
	}
	else
	{
		alert("Debe Seleccionar Una Opción");
	}
	/*$('#tablaInA,#links').show();*/
}

function generarMeses () 
{
	cantidades = $("#cantMeses option:selected").val();
	$(".divDeLosMeses").remove();
	if(cantidades>0 && cantidades<12)
	{
		for(var x=0; x<cantidades; x++)
		{
			$("#meses").append("<div class='divDeLosMeses'><label class='mmL'>Mes "+(x+1)+":&nbsp;</label><select type='text' class='in1 mmL' id='mesMen"+(x+1)+"'><option value='Mes0'>------------------</option><option value='Enero'>Enero</option><option value='Febrero'>Febrero</option><option value='Marzo'>Marzo</option><option value='Abril'>Abril</option><option value='Mayo'>Mayo</option><option value='Junio'>Junio</option><option value='Julio'>Julio</option><option value='Agosto'>Agosto</option><option value='Septiembre'>Septiembre</option><option value='Octubre'>Octubre</option><option value='Noviembre'>Noviembre</option><option value='Diciembre'>Diciembre</option></select></div>")
		}
		
	}	
}

function comprobarConcepto() {
	conceptoDe = $("#conceptoP option:selected").val();
	if(conceptoDe=='Mensualidades')
	{
		$("#divMensualidadesOculto").css("display","block");
		$(".divDeLosMeses").remove();
		$("#conceptoOtrosOculto").css("display","none");
		$("#conceptoOtro").val("");
	}
	else if(conceptoDe=='Inscripcion')
	{
		$("#divMensualidadesOculto").css("display","none");
		$("#cantMeses option[value='0']").attr("selected",true);
		$(".divDeLosMeses").remove();
		$("#conceptoOtrosOculto").css("display","none");
		$("#conceptoOtro").val("");
	}
	else if(conceptoDe=='Otros')
	{
		$("#divMensualidadesOculto").css("display","none");
		$("#cantMeses option[value='0']").attr("selected",true);
		$(".divDeLosMeses").remove();
		$("#conceptoOtro").val("");
		$("#conceptoOtrosOculto").css("display","block");
	}
	else
	{
		$("#divMensualidadesOculto").css("display","none");
		$("#cantMeses option[value='0']").attr("selected",true);
		$(".divDeLosMeses").remove();
		$("#conceptoOtrosOculto").css("display","none");
		$("#conceptoOtro").val("");
	}
}

/*Funcion para obtener la fecha actual*/
function messs()
{
  var f=new Date();
  var mess = f.getMonth() + 1;
  if(mess<10)
  {
  	mess="0"+mess;
  }
  return mess;
}
function messs10()
{
  var f=new Date();
  var mess = f.getMonth();
  return mess;
}
function diaaa()
{
  var f=new Date();

  var diaa = f.getDate();
  if(diaa<10)
  {
  	diaa="0"+diaa;
  }
  return diaa;
}

function yearrr()
{  
  var f=new Date();
  var yearr = f.getFullYear();
  return yearr;
}