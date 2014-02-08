
$(document).on("ready", inicio);

function inicio()
{
	$('#enviarNuevoForo').on("click",ingresarForo);
	consultarForos();

	/*Gestion de la informacion de la institucion*/
	ocultarOpcionesInfoIns();
	asignarEventosInfoIns();

	// Carga de archivo
	$('#archivos').on("change",validar);
}
///////////// Variable global , ruta imagen //
var ruta;
/////////////////////////////////////////
/*Funcion para obtener la hora actual*/
function hora(){

	var Digital=new Date();
	var hours=Digital.getHours();
	var minutes=Digital.getMinutes();
	var seconds=Digital.getSeconds();
	var dn="am";

	if (hours>12)
	{
		dn="pm";
		hours=hours-12;
	}

	if (hours==0)
		hours=12;

	if (minutes<=9)
		minutes="0"+minutes;

	if (seconds<=9)
		seconds="0"+seconds;

	var hora = hours+":"+minutes+":"
	+seconds+dn;

	return hora;
}
/*Funcion para obtener la fecha actual*/
function fecha()
{
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

	var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

	var f=new Date();
	var fecha;

	fecha = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

	return fecha;
}
/*Funcion para insertar un nuevo foro*/
function ingresarForo()
{
	var nom = $('#asuntoFn').val();
	//var men = $('#mensajeFN').val();
	var men = $('.nicEdit-main').html();
	var nomUser = "21029953";
	var fec = fecha();
	var hor = hora();
	
	if(nom=="" || nom==" ")
	{
		$("#asuntoFn").attr("placeholder", "Ingrese Un Asunto").blur();
		$("#asuntoFn").css("border-color","#b93207");
		$(".alert").hide("slide");
	}
	else if(men=="<br>")
	{
		$("#asuntoFn").css("border-color","#ededed");
		$(".nicEdit-main").attr("placeholder", "Ingrese Un Mensaje").blur();
		$(".nicEdit-main").css("border-color","#b93207");
		$(".alert").hide("slide");
	}
	else
	{
		$(".alert").hide("slide");
		$("#asuntoFn").css("border-color","#ededed");
		$("#mensajeFN").css("border-color","#ededed");
		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarForo.php?jsoncallback=?";

		$.getJSON(url,{
			user:nomUser,
 	 		nombre:nom,
 	 		tema:men,
 	 		fecha:fec,
 	 		hora:hor
		}).done(function(data){
	 	 	$("#cent").append("<div class='alert  alert-success'>"+data.mensaje+"</div>");
	 	 	$("#asuntoFn").val("");
			$(".nicEdit-main").text("");
		});
	}
}

function linksCambio(){
	var url = "viewForos.html";
	window.location=url+"?foro="+"idForo";
}
/*Funcion para ver todos los foros creados*/
function consultarForos()
{		
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarForos.php?jsoncallback=?";
		$.getJSON(url,{
		}).done(function(data){
	 	 	if(data.num != 0){
	 	 		$("#laTablaForos").removeClass("none");
				$.each(data, function(i,item){
					$("#tbodyForos").append("<tr><td><a class='linkIrForo' id='"+item.idForo+"'>"+item.nombreTema+"</a></td><td><span id='"+item.cedula+"'>"+item.nombre+" "+item.apellido+"</span></td><td><a class='linkIrForo' id='res"+item.idForo+"'>"+item.resp+"</a></td><td>"+item.fecha+"</td></tr>");
						$('#'+item.idForo).attr("href","viewForos.html?foro="+item.idForo);
						$('#res'+item.idForo).attr("href","viewForos.html?foro="+item.idForo);
						$('#'+item.cedula).attr("href","viewForos.html?cedula="+item.cedula);
				});
			}
			else
				$("#noForos").removeClass("none");
		});

}

/*JAVASCRIPPPPPTTT GESTION DE LA INFORMACION DE LA INSTITUCION*/

function ocultarOpcionesInfoIns()
{
	$("#artCargaNotInfoIns").hide();
	$("#artIngresarNotInfoIns").hide();
	$("#artModInfoIns1").hide();
	$("#artModInfoIns2").hide();
}

function asignarEventosInfoIns()
{
/*	onclick="funcion1();funcion2();"*/	

	$(".linkCarNot").on("click", function(){linkInfoIns('artCargaNotInfoIns', "divSelectOpcionInfoIns");});

	$(".linkAtrasInfoIns1").on("click", function(){linkInfoIns('divSelectOpcionInfoIns', "artCargaNotInfoIns");});

	$(".linkIngNot").on("click", function(){linkInfoIns('artIngresarNotInfoIns', "artCargaNotInfoIns");});

	$(".linkAtrasInfoIns2").on("click", function(){linkInfoIns('artCargaNotInfoIns', "artIngresarNotInfoIns");});

	$(".linkAtrasInfoIns2").on("click", ocultarAlert);

	$(".linkModNot").on("click", function(){linkInfoIns('artModInfoIns1', "artCargaNotInfoIns");});

	$(".linkAtrasInfoIns3").on("click", function(){linkInfoInsAtrasMod('artCargaNotInfoIns', "artModInfoIns1");});

	$(".linkAtrasInfoIns3").on("click", borrarTablaNoticias);

	$(".linkIrModificar").on("click", function(){linkInfoIns('artModInfoIns2', "artModInfoIns1");});

	$(".linkAtrasInfoIns4").on("click", llenarNoticiasModificar);

	$(".linkAtrasInfoIns4").on("click", function(){linkInfoInsAtrasMod('artModInfoIns1', "artModInfoIns2");});
	$(".linkAtrasInfoIns4").on("click", ocultarAlert);

	$("#enviarIngresarNoticia").on("click", ingresarNoticia);

	$(".linkModNot").on("click", llenarNoticiasModificar);	

	$("#botonModificarNoticia2").on("click",botonModificaNoticia);
}

function linkInfoIns(mostrar, ocultar)
{
	$("#"+mostrar).show("slide");
	$("#"+ocultar).hide("slow");
}

function linkInfoInsAtrasMod(mostrar, ocultar)
{
	$("#"+mostrar).show("slide");
	$("#"+ocultar).hide();
}

function ocultarAlert()
{
	$(".alert").hide("slide");
}

function borrarTablaNoticias()
{
	$(".alert").hide("slide");
	$(".trNoticias").remove();
}
// subir archivo // 

function subir(){
	
	$('.alert2').remove();
	var urls = "http://127.0.0.1:8080/Venezuela90/Noticias/cargarArchivos.php";
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
			ruta = data;
			//console.log(ruta);
			//guardarRuta(data);
		}
	});
}

////////////////
function ingresarNoticia()
{
	var titNoticia = $("#inpIngNot").val();
	var contenidoNoticia = $("#textContIngNot").val();
	var fec = fecha();
	var hor = hora();
	/*Colocar la cookie*/
	var usuario = "21029953"
	
	/*INVESTIGAR COMO USAR EL INPUT TYPE FILE*/
	var archivoNoticia = $("#archivoIngNot").val();
	archivoNoticia = "../images/user.png";
	if(titNoticia=="" || titNoticia==" ")
	{
		$("#inpIngNot").attr("placeholder", "Ingrese Un Titulo").blur();
		$("#inpIngNot").css("border-color","#b93207");
		$(".alert").hide("slide");
	}
	else if(contenidoNoticia=="" || contenidoNoticia==" ")
	{
		$("#inpIngNot").css("border-color","#ededed");
		$("#textContIngNot").attr("placeholder", "Ingrese Un Contenido").blur();
		$("#textContIngNot").css("border-color","#b93207");
		$(".alert").hide("slide");
	}
	else
	{
		$(".alert").hide("slide");
		$("#inpIngNot").css("border-color","#ededed");
		$("#textContIngNot").css("border-color","#ededed");

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarNoticia.php?jsoncallback=?";
		console.log(ruta)
		$.getJSON(url,{
			user:usuario,
 	 		titulo:titNoticia,
 	 		noticia:contenidoNoticia,
 	 		imagen:ruta,
 	 		fecha:fec,
 	 		hora:hor
		}).done(function(data){
	 	 	$("#divAtrasAgregar").before("<div class='alert  alert-success'>"+data.mensaje+"</div>");
	 	 	$("#inpIngNot").val("");
			$("#textContIngNot").val("");
		});
	}

}
/////////////////////
function llenarNoticiasModificar()
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarNoticias.php?jsoncallback=?";
		$.getJSON(url,{
		}).done(function(data){
	 	 	if(data.num != 0){
	 	 		var cont;
				$.each(data, function(i,item){
					cont=item.cant-1;
					
					$("#tbodyNoticiasModificar").append("<tr class='trNoticias'><td class='colFigod'><figure><img width='80px' src='"+item.imagenNoticia+"'></figure></td><td class='colConMod'><div><b>"+item.tituloNoticia+"</b></div>"+item.noticia+"</td><td><a class='linkIrModificar' id='"+item.idNoticia+"'>>></a></td></tr>");		
						$("#"+item.idNoticia).on("click", function(){eventoModificar2(item.idNoticia, item.noticia, item.tituloNoticia);});	
					if(i!=cont)
					{
						$("#tbodyNoticiasModificar").append("<tr class='trNoticias'><td colspan='3'><hr></td></tr>");
					}
				});
			}
			else
				$("#artModInfoIns1").append("<div class='alert  alert-success'>No Hay Noticias Creadas</div>");
		});
}

var idModificar, titModificar, contModificar;

function eventoModificar2(iddenoticia, contenidNoticia, titNoticia)
{
	idModificar=iddenoticia;
	titModificar=titNoticia;
	contModificar=contenidNoticia;

	$("#inputNotModificar1").val(titModificar);
	$("#contNoticiaMod2").val(contModificar);
	$(".trNoticias").remove();
	linkInfoInsAtrasMod('artModInfoIns2', "artModInfoIns1");
}

function botonModificaNoticia()
{
	var tituloModificado = $("#inputNotModificar1").val();
	var mensajeModificado = $("#contNoticiaMod2").val();
	var idModificado = idModificar;

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarNoticia.php?jsoncallback=?";

		$.getJSON(url,{
			titulo:tituloModificado,
 	 		mensaje:mensajeModificado,
 	 		id:idModificado
		}).done(function(data){
	 	 	$("#divAtrasModifi2").before("<div class='alert  alert-success'>"+data.mensaje+"</div>");
	 	 	$("#inputNotModificar1").val("");
			$("#contNoticiaMod2").val("");
		});
}
// Carga de Archivos

/*
function guardarRuta(ruta){
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/guardarRutaPerfil.php?jsoncallback=?";
	$.getJSON(url2,{
  		path : ruta
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

*/
 function validar(){

 	$('.alert').remove();
 	var file = $('#archivos')[0].files[0];
 	var fileName = file.name;
	//var extenciones = ["jpg","gif","png","PNG","JPG","jpeg","pdf","docx","odt","doc","xlxs","xlx","ppt","pptx"];
 	fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

 	if(fileExtension == "jpg" || fileExtension == "png" || fileExtension == "gif" || fileExtension == "PNG" || fileExtension == "JPG" || fileExtension == "jpeg"){
 		$('#cambiarFP').prop("disabled",false).removeClass("disabled");
 		subir();
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