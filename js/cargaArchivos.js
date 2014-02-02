$(document).on("ready", empezar);

function empezar(){
botonesCargaAction();
disableds();
llenarMaterias();
llenarGrado();
$('#iniciarCarga').on("click",subir);
$('#archivos').on("change",algo);
//mat();
} 
// ---------------------------  Variables globales ----------------------------//
var fileExtension;

//----------------------------------------------------------------------------//
function disableds(){
	$('#iniciarCarga').prop("disabled",true).addClass("disabled");
}
function botonesCargaAction(){
$('.cargarR, .t1').on("click",function(){actionBotones('noticiasClass','listaPrincipal,.titulo');$('.alert').remove();
	resetear();});
$('.descargarR, .t2').on("click",function(){actionBotones('noticiasClass2','listaPrincipal,.titulo'); mat();});

$('.atras > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass');$('.alert').remove();resetear();});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass2');});

}


function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
function llenarMaterias() 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){
			$("#materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});		
}
function llenarGrado() 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGrado.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){
			$("#grado").append("<option value='"+item.idGrado+"'>"+item.grado+"</option>");
		});
	});		
}
function subir(){
	
	$('.alert2,.alert3,.alert4').remove();
	var urls = "http://127.0.0.1:8080/Venezuela90/Materiales/cargarArchivos.php";
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
			$('.msj').append("<div class='alert alert-success'>Subiendo su(s) archivo(s), por favor espere</div>")
		},
		success: function(data){
			$('.msj').hide("slow");
			guardarRuta(data);
		}
	});
}

function guardarRuta(ruta){
	var idG = $('#grado option:selected').val();
	var idMat = $('#materias option:selected').val();
	var idSecc = $('#seccion option:selected').val();
	var idProf = $.cookie("cedulaProf");
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/guardarRuta.php?jsoncallback=?";
	$.getJSON(url2,{
  		idGrado: idG, 
  		idSeccion: idSecc,
  		idMateria: idMat, 
  		idPro: idProf,
  		path : ruta
  	}).done(function(data){
  		if(data.num !=0){
  		$('.msj2').append("<div class='alert alert-success alert2'>Archivo(s) "+data.mensaje+" con Exito</div>");
  		}
  		else{
  			$('.msj3').append("<div class='alert alert-danger alert3'>"+data.errors.toUpperCase()+"</div>");
  		}
  		//alert(data.mensaje);
  	});
}

function mat(){
	//var asd =	$('#matD');
	$('.listasaaa').remove();
	var lista = $('.arch');
	var nom ,nom2;
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/mostrarMaterial.php?jsoncallback=?";
	$.getJSON(url).done(function(data){
		$.each(data,function(i,item){
			nom = item.ruta;
			nom2 = nom.replace("Archivo/","");
			//asd = item.ruta;
			//asd.attr("href", "www.ggg.com");
			lista.append("<li class='listasaaa'><a id='bloque6' href='../Materiales/"+item.ruta+"' target='_blank'></a><a class='textoAbajo' href='../Materiales/"+item.ruta+"' target='_blank'>"+nom2+"</a></li>");
		})
		
	});
}

function algo(){
	$('.alert').remove();
	var file = $('#archivos')[0].files[0];
	var fileName = file.name;
        //obtenemos la extensión del archivo
    fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
       //obtenemos el tamaño del archivo
    var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
    var fileType = file.type;

    var extenciones = new Array("jpg","gif","png","PNG","JPG","jpeg","pdf","docx","odt","doc","xlxs","xlx","ppt","pptx");
    for (var i = 0 ; i < extenciones.length ; i++){
    	if(extenciones[i] == fileExtension){
    		$('#iniciarCarga').prop("disabled",false);
    		break;
    	}
    	else{
    		disableds();
    		alert("Este tipo de Archivos no es Permitido, Seleccione Otro");
    		break;
    	}
    }

 }
 function resetear(){
 	$('input[type=file]').val("");
 }