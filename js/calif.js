$(document).on("ready", empezar);

function empezar(){
$('.inputOtroClass').prop('disabled',true).addClass("disabled");
$('#modif').on("click",modificar);
$('input').on("change",cambiarCalifPorc);
$('#calc').on("click",calcular);
} 

function botonesGestionAction(){

}
function modificar(){
	$('.inputOtroClass').prop('disabled',false);
	$('#califP1,#califP2,#califP3,#califP4,#califP5,#califP6,#califP7').prop('disabled',true);
	actionBotones('guar,#calc','modif');

}
function actionBotones(mostrar,ocultar)
{
	$('#'+mostrar).show("slide");
	$('#'+ocultar).hide("slow");	
}

function cambiarCalifPorc(){
	var porc = $('#porcP1').val();
	var cPorc = $('.porc1').val(porc);

	var porc2 = $('#porcP2').val();
	var cPorc2 = $('.porc2').val(porc2);

	var porc3 = $('#porcP3').val();
	var cPorc3 = $('.porc3').val(porc3);

	var porc4 = $('#porcP4').val();
	var cPorc4 = $('.porc4').val(porc4);

	var porc5 = $('#porcP5').val();
	var cPorc5 = $('.porc5').val(porc5);

	var porc6 = $('#porcP6').val();
	var cPorc6 = $('.porc6').val(porc6);

}

function calcular(){
	var algo;
	$( ".calif1" ).each(function(i, v){
		$('#porc1').each(function(x,c){
			algo = v - c;
		
		});
});


	/*var arr;// = $.makeArray( obj );
	/*for(var i =0 ; i <= 5; i++){
			obj[i];
			arr = $.makeArray(obj);
			console.log(arr);
	}
	/*$.each(data, function(i,v) {
		console.log(i+":"+$('.calif1').val());
	});*/
	
	
	
}