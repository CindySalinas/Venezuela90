$(document).on("ready", empezar);

function empezar(){
botonesGestionAction();
$('#EnviarDatos').on("click",enviarDatos);
} 

function botonesGestionAction(){
$('.calificaciones, #t2').on("click",function(){actionBotones('hideLista','listaPrincipal');});
$('.consultarCali, #t3').on("click",function(){actionBotones('noticiasClass','hideLista,.titulo');});
$('.modificarCali, #t4').on("click",function(){actionBotones('noticiasClass2','hideLista,.titulo');});
$('.atras2 > #atras,#at').on("click",function(){actionBotones('hideLista','noticiasClass,.listaPrincipal');});
$('.atras3 > #atras,#at').on("click",function(){actionBotones('hideLista','noticiasClass2,.listaPrincipal');});
$('#holas > #atras,#at').on("click",function(){actionBotones('listaPrincipal','hideLista');});
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function enviarDatos(){
	var s1 = $('#materias option:selected').val(),
	 	s2 = $('#grado option:selected').val(),
	 	s3 = $('#seccion option:selected').val(),
	 	s4 = $('#lapso option:selected').val(),
	 	s5 = $('#yearEs option:selected').val(),
	 	s6 = $('#tipo option:selected').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarViewCalif.php?jsoncallback=?";
	var newUrl;
	 	if(s1 == 0 || s2 == 0 || s3 == 0 || s4 ==0 || s5 ==0 ||s6 ==0){
	 		alert("selecciones una opcion Valida");
	 	}
	 	else if(s1 == 3 || s1 == 10 && s2 <=2){
	 		alert("No corresponde Materia a este Grado");
	 	}
	 	else if(s6 == 1){
	 			newUrl = "viewCalif.html?mat="+s1+"&gra="+s2+"&sec="+s3+"&lap="+s4+"&Ye="+s5
	 			$('#EnviarDatos').attr("href",newUrl);
	 		}
	 	else if(s6 == 2){
	 		newUrl = "viewAsistenciaEvaluacion.html?mat="+s1+"&gra="+s2+"&sec="+s3+"&lap="+s4+"&Ye="+s5;
	 			$('#EnviarDatos').attr("href",newUrl);
	 	}

}

//alert("datos Enviados");
	 	/*$.getJSON(url,{mat : s1,gra:s2,sec:s3,lap:s4,Ye: s5,tip:s6}).done(function(datos){
	 				   	$.each(datos,function(i,item){
	 				   	var newUrl = "viewCalif.html?"
	 				   	$('#EnviarDatos').attr("href",newUrl);
	 				   }):
	 				   	
	 			});*/