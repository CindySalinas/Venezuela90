$(document).on("ready", empezar);
var idDocente;
function empezar(){
	botonesCargaAction();
	$('#iniciarCarga').prop("disabled",true).addClass("disabled");
	//disableds();
	llenarMaterias();
	llenarGrado();
	$('#iniciarCarga').on("click",subir);
	$('#archivos').on("change",validar);
	//mat();

	cedula2=$.cookie("cedulaProf");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){	
			idDocente = item.idDocente;
		});
	});

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
$('.descargarR, .t2').on("click",function(){actionBotones('noticiasClass2','listaPrincipal,.titulo');});

$('.atras > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass');$('.alert').remove();resetear();});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('listaPrincipal','noticiasClass2');});


$('.linkAtrasNoticias3').on("click",function(){actionBotones('noticiasClass2','noticiasClass3');});

$('.linkAtrasNoticias2').on("click",function(){actionBotones('listaPrincipal','noticiasClass2');});

$('#consultarDescargar').on("click", consultaDatos);


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
			$(".materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
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
			$(".grados").append("<option value='"+item.idGrado+"'>"+item.grado+"</option>");
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
	var idYearr = $('#yearEscolar option:selected').val();

	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHDG.php?jsoncallback=?";
	$.getJSON(url,{
		grado: idG, 
  		year: idYearr,
  		materia: idMat, 
  		docente: idDocente
	}).done(function(data){
		if(data.num>0)
		{
			var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHDG2.php?jsoncallback=?";
			$.getJSON(url,{
				grado: idG, 
		  		year: idYearr,
		  		materia: idMat, 
		  		docente: idDocente
			}).done(function(data){
				$.each(data, function(i,item){
					
					var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/guardarRuta.php?jsoncallback=?";
					$.getJSON(url2,{
				  		idSeccion: idSecc,
				  		horarioMaterias: item.idHorarioMateria, 
				  		path : ruta
				  	}).done(function(data){
				  		if(data.num !=0){
				  		$('.msj2').append("<div class='alert alert-success alert2'>Archivo(s) "+data.mensaje+" con Exito</div>");
				  		}
				  		else{
				  			$('.msj3').append("<div class='alert alert-danger alert3'>"+data.errors.toUpperCase()+"</div>");
				  		}
				  	});

				});
			});		
		}
		else
		{
			alert("Los Valores Seleccionados Son Incorrectos");
		}
	});	

	
}

function consultaDatos() 
{
	var idG = $('#gradoConsulta option:selected').val();
	var idMat = $('#materiasConsulta option:selected').val();
	var idYearr = $('#yearEscolarConsulta option:selected').val();
	$('.listasaaa').remove();
	var lista = $('.arch');
	var nom ,nom2;
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHDG.php?jsoncallback=?";
	$.getJSON(url,{
		grado: idG, 
  		year: idYearr,
  		materia: idMat, 
  		docente: idDocente
	}).done(function(data){
		if(data.num>0)
		{
			var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHDG2.php?jsoncallback=?";
			$.getJSON(url,{
				grado: idG, 
		  		year: idYearr,
		  		materia: idMat, 
		  		docente: idDocente
			}).done(function(data){
				$.each(data, function(i,item){
					actionBotones('noticiasClass3','noticiasClass2');
					var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/mostrarMaterial.php?jsoncallback=?";
				$.getJSON(url,{
					docenteMateria:item.idHorarioMateria
				}).done(function(data){					
					$.each(data,function(i,item){
						nom = item.ruta;
						nom2 = nom.replace("Archivo/","");
						lista.append("<li class='listasaaa'><a id='bloque6' href='../Materiales/"+item.ruta+"' target='_blank'></a><a class='textoAbajo' href='../Materiales/"+item.ruta+"' target='_blank'>"+nom2+"</a></li>");
					})
					
				});
				});
			});
		}
		else
			alert("No Se Encuentra Los Datos Seleccionados");
	});

}

/*function mat(){
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
*/
// rege = /[.jpg,]$/
/*
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
   // console.log(fileName.replace(" ","_"));
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
*/


 function validar(){

 	$('.alert').remove();
 	var file = $('#archivos')[0].files[0];
 	var fileName = file.name;
	//var extenciones = ["jpg","gif","png","PNG","JPG","jpeg","pdf","docx","odt","doc","xlxs","xlx","ppt","pptx"];
 	fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

 	if(fileExtension == "jpg" || fileExtension == "png" || fileExtension == "gif" || fileExtension == "PNG" || fileExtension == "JPG" || fileExtension == "jpeg" || fileExtension == "pdf" || fileExtension == "doc" || fileExtension == "docx" || fileExtension == "pdf" || fileExtension == "odt" ||fileExtension == "xls" || fileExtension == "ppt" || fileExtension == "pptx" || fileExtension == "xlsx"){
 		$('#iniciarCarga').prop("disabled",false).removeClass("disabled");
 		console.log("coincide");
 	}
 	else{
 		$('#iniciarCarga').prop("disabled",true).addClass("disabled");

 		$('.msj3').append("<div class='alert alert-danger'>Tipo de Archivo no Valido</div>");
 		console.log("no coincide");
 	}
 }

 function resetear(){
 	$('input[type=file]').val("");
 }