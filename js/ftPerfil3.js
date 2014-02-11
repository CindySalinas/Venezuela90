$(document).on("ready", empezar);

function empezar(){
botonesCargaAction();
$('#cambiarFP').prop("disabled",true).addClass("disabled");
$('#cambiarFP').on("click",subir);
$('#archivos').on("change",validar);
$('.changeFT').on("click",botonesCargaAction);
$('.ftPerfil').css({display:"none"});

} 
// ---------------------------  Variables globales ----------------------------//
var fileExtension;

//----------------------------------------------------------------------------//
function disableds(){
	$('#cambiarFP').prop("disabled",true).addClass("disabled");
}
function botonesCargaAction(){
	actionBotones('ftPerfil','a');
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function subir(){
	
	$('.alert2').remove();
	var urls = "http://127.0.0.1:8080/Venezuela90/FotosPerfil/cargarArchivos.php";
	var archivos = document.getElementById("archivos");
 	var archivo = archivos.files; 

 	var data = new FormData();
	  for(i=0; i<archivo.length; i++){
	   	 data.append('archivo'+i,archivo[i]);
	  }
  
	 $.ajax({
	    url:urls, 
	    type:'POST', 
	    contentType:false, 
	    data:data, 
	    processData:false, 
	    cache:false,
	    beforeSend: function(){
			$('.msj').append("<div class='alert alert-success'>Cambiando Foto</div>")
		},
		success: function(data){
			$('.msj').hide("slow");
			guardarRuta(data);
		}
	});
}

function guardarRuta(ruta){
	var cedu = $.cookie("cedulaStudent");
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/guardarRutaPerfil.php?jsoncallback=?";
	$.getJSON(url2,{
  		path : ruta,
  		cedula: cedu
  	}).done(function(data){
  		if(data.num !=0){
  		$('.msj2').append("<div class='alert alert-success alert2'>Archivo(s) "+data.mensaje+" con Exito</div>");
  		actionBotones("ftPerfil","a");
  		    location.reload();
  		}
  		else{
  		$('.msj3').append("<div class='alert alert-danger alert3'>"+data.errors.toUpperCase()+"</div>");
  		}
  		//alert(data.mensaje);
  	});
}


 function validar(){

 	$('.alert').remove();
 	var file = $('#archivos')[0].files[0];
 	var fileName = file.name;
	//var extenciones = ["jpg","gif","png","PNG","JPG","jpeg","pdf","docx","odt","doc","xlxs","xlx","ppt","pptx"];
 	fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

 	if(fileExtension == "jpg" || fileExtension == "png" || fileExtension == "gif" || fileExtension == "PNG" || fileExtension == "JPG" || fileExtension == "jpeg"){
 		$('#cambiarFP').prop("disabled",false).removeClass("disabled");
 		console.log("coincide");
 	}
 	else{
 		$('#cambiarFP').prop("disabled",true).addClass("disabled");

 		$('.msj3').append("<div class='alert alert-danger'>Tipo de Archivo no Valido</div>");
 		console.log("no coincide");
 	}
 }

 function resetear(){
 	$('input[type=file]').val("");
 }