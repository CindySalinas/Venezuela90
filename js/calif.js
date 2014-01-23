$(document).on("ready", empezar);

function empezar(){
ponerDatos();
$('.inputOtroClass').prop('disabled',true).addClass("disabled");
$('#modif').on("click",modificar);
$('input').on("change",cambiarCalifPorc);
$('#calc').on("click",pruebaMetodo);
$('.valid').on("change",validarPtos);
$('#guar').on("click",guardar);
$('#porcP6').on("change",sumaPorcentaje());
} 


function pruebaMetodo(){
	calcular("califa1","porcP1","esc");
	calcular("califa2","porcP2","esc2");
	calcular("califa3","porcP3","esc3");
	calcular("califa4","porcP4","esc4");
	calcular("califa5","porcP5","esc5");
	calcular("califa6","porcP6","esc6");
	sumaPts();
	SetentaPorC();
	treintaPorC();
	NotaFinal();
}
function modificar(){
	$('.inputOtroClass').prop('disabled',false);
	$('#califP1,#califP2,#califP3,#califP4,#califP5,#califP6,#califP7,.porc1,.porc2,.porc3,.porc4,.porc5,.porc6,.tot71,.tot30,.totF').prop('disabled',true);

	actionBotones('guar,#calc','modif');

}
function actionBotones(mostrar,ocultar)
{
	$('#'+mostrar).show("slide");
	$('#'+ocultar).hide("slow");	
}
function cambiarCalifPorc(){
	 cambiar("porcP1","porc1");
	 cambiar("porcP2","porc2");
	 cambiar("porcP3","porc3");
	 cambiar("porcP4","porc4");
	 cambiar("porcP5","porc5");
	 cambiar("porcP6","porc6");
}

function  cambiar(porc,fila){
	var pts = $('#'+porc).val();
		$('.'+fila).val(pts);
}

function calcular(pts,porc,nota){
		var reult = new Array();
		var prt = $('#'+porc).val();

		$('.'+pts).each(function(i,item){
			reult[i] = Number(item.value) *(Number(prt)/100);
		});
		
		var nts = $('.'+nota);
		for(var x = 0 ; x < nts.length; x++){
			nts[x].value = reult[x];
		}

}
function sumaPts(){
	var ff = $(".col");
	var dd = $('.rows');
	var row1 =  $('.esc');
	var row2 =  $('.esc2');
	var row3 =  $('.esc3');
	var row4 =  $('.esc4');
	var row5 =  $('.esc5');
	var row6 =  $('.esc6');
	var tot = $('.tot');
	var suma = new Array();
	for(var y= 0; y < ff.length; y++){
		for(var x=0 ; x < dd.length; x++){	
			suma[x] = Number(row1[y].value)+ Number(row2[y].value)+ Number(row3[y].value)+ Number(row4[y].value)+ Number(row5[y].value)+ Number(row6[y].value);
			tot[y].value = suma[y];
		}
	}
}
function sumaPorcentaje(){
	 var p1 = $('#porcP1').val();
	 var p2 = $('#porcP2').val();
	 var p3 = $('#porcP3').val();
	 var p4 = $('#porcP4').val();
	 var p5 = $('#porcP5').val();
	 var p6 = $('#porcP6').val();
	 sumaPor = Number(p1) + Number(p2) +Number(p3) +Number(p4) + Number(p5) + Number(p6);
	 if(sumaPor > 100){ 
	 	alert(sumaPor);
	 }
}
function SetentaPorC(){
		var reult = new Array();
		var tot70 = $('.tot7');
		var tot71 = $('.tot71');
		$('.tot').each(function(i,item){
			reult[i] = Number(item.value) * Number(0.70);
		});
		
		for(var x = 0 ; x < tot70.length; x++){
			tot70[x].value = reult[x];
			tot71[x].value = reult[x];
		}
}
function treintaPorC(){
		var reult = new Array();
		var tot30 = $('.tot30');
		var tot32 = $('.tot32');
		$('.pLapso').each(function(i,item){
			reult[i] = Number(item.value) * Number(0.30);
		});
		
		for(var x = 0 ; x < tot30.length; x++){
			tot30[x].value = reult[x];
			tot32[x].value = reult[x];
		}
}
function NotaFinal(){
	//masPt
	//totF
	var ff = $(".col");
	var dd = $('.rows');
	var row1 =  $('.tot71');
	var row2 =  $('.tot30');
	var row3 =  $('.masPt');
	var tot = $('.totF');
	var tot2 = $('.totF2');
	var sumaF = new Array();
	for(var y= 0; y < ff.length; y++){
		for(var x=0 ; x < dd.length; x++){	
			sumaF[x] = Number(row1[y].value)+ Number(row2[y].value)+ Number(row3[y].value);
			tot[y].value = sumaF[y];
			tot2[y].value = sumaF[y];
		}
	}
}

function validarPtos(){
	var a = $('.valid');
	a.each(function(i,item){
		if(item.value > 20){
			//alert("inserte una nota valida");
			//a.css("border-color","#ededed");
			a[i].style.border ="1px solid #DC0F0F";
			actionBotones('msjss','');
			$('#calc').prop('disabled',true).addClass("disabled");
		}
		else{
			actionBotones('','msjss');
			a[i].style.border= "";
			$('#calc').prop('disabled',false);
		}
	});
}

function guardar(){
	
	$('.inputOtroClass').prop('disabled',true);
		actionBotones('modif','guar,#calc');
}
/* $('.tot32').val(1);
	$('.totF2').val(2);*/
function ponerDatos(){
	var materia = getQueryVariable("mat");
	var nomP = $('#nomPro').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/datosCalif.php?jsoncallback=?";
	var cont= 1 ;
	var algo = $("#tablaCalid");
	$.getJSON(url,{mat : materia}).done(function(data){
		if(data.num != 0 ){
			$.each(data,function(i,item){
				//$('#nomPro').attr("value",item.cedulaProf)
				buscarProf(item.cedulaProf);
				$('#asig').val(item.NombreMateria);
				algo.append('<tr class="modif"><td class="centrar">'+cont+'</td><td id='+item.cedulaAlumno+'>'+item.apellidoAlumno+" "+item.nombreAlumno+'</td><td class="centrar"><input class="inputOtroClass valid califa1"type="text"></td><td class="centrar"><input class="inputOtroClass porc1"type="text"></td><td class="centrar"><input class="inputOtroClass valid califa2"type="text"></td><td class="centrar"><input class="inputOtroClass porc2"type="text"></td><td class="centrar"><input class="inputOtroClass valid califa3"type="text"></td><td class="centrar"><input class="inputOtroClass porc3"type="text"></td><td class="centrar"><input class="inputOtroClass valid califa4"type="text"></td><td class="centrar"><input class="inputOtroClass porc4"type="text"></td><td class="centrar"><input class="inputOtroClass valid califa5"type="text"></td><td class="centrar"><input class="inputOtroClass porc5"type="text"></td><td class="centrar"><input class="inputOtroClass valid califa6"type="text"></td><td class="centrar"><input class="inputOtroClass porc6"type="text"></td><td class="centrar"><input class="inputOtroClass tot71"type="text"></td><td class="centrar"><input class="inputOtroClass pLapso"type="text"></td><td class="centrar"><input class="inputOtroClass tot30"type="text"></td><td class="centrar"><input class="inputOtroClass masPt"type="text"></td><td class="centrar"><input class="inputOtroClass totF"type="text"></td></tr>');
				$('#Toculta tbody').after('<tr class="col"><td class="centrar"><input class="inputOtroClass esc rows"></td><td class="centrar"><input class="inputOtroClass esc2 rows"></td><td class="centrar"><input class="inputOtroClass esc3 rows"></td><td class="centrar"><input class="inputOtroClass esc4 rows"></td><td class="centrar"><input class="inputOtroClass esc5 rows"></td><td class="centrar"><input class="inputOtroClass esc6 rows"></td><td class="centrar"><input class="inputOtroClass tot"></td><td class="centrar"><input class="inputOtroClass tot7"></td><td class="centrar"><input class="inputOtroClass tot32"></td><td class="centrar"><input class="inputOtroClass totF2"></td></tr>');
				$('.inputOtroClass').prop('disabled',true).addClass("disabled");
				console.log(item);

				cont++;  });
		}
		else{
			alert(data.mensaje);
		}
	});
}

function buscarProf(ced){
	//var ced = $('#nomPro').attr('value');
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/datosCalif2.php?jsoncallback=?";
	$.getJSON(url,{ced: ced}).done(function(data){
		$('#nomPro').val(data.profNom);
			
	})
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");

               if(pair[0] == variable){return pair[1];}
       }
       return(false);

}