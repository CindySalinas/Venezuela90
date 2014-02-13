$(document).on("ready", empezar);

function empezar(){
   prof();
   perfil();
   perfil2();
   editarPerfil();
   $('#apPerfil,#nomPperfil,#lugar2,#celPerfil,#mailPerfil').on("change",noVacio);
   $('#butAce').on("click",guardarDatos);
   $('.nEdit2').prop("disabled",true).addClass("disabled");
   $('#butAce').prop("disabled",true).addClass("disabled");
   $('#msj').on('click','#prf',function(){window.location="perfilDocente.html"});
  cargarFoto();
} 

function prof(){
	var galleta = $.cookie("profName")
	if(galleta == undefined){
		window.location = "../index.html";
	}
	else{
		$('#nombreUsuario').text(galleta);
		$('#nombreUsuario').append(" "+"<a href='../index.html' >(Salir)</a>");
	}
}
function perfil(){
	var cedu = $.cookie("cedulaProf");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarPerfil.php?jsoncallback=?";
	$.getJSON(url,{cedula:cedu}).done(function(data){
		if(data.num !=0){
			$.each(data,function(i,item){		
				$('.apPerfil').text(item.apll);
				$('.nomPperfil').text(item.nom);
				$('.cedPerfil').text(item.ced);
				$('.sexPerfil').text(item.gen);
				$('.edoCPerfil').text(item.edoC);
				$('.fechaPerfil').text("Actualizar Tabla");
				$('.naciPerfil').text(item.nacio);
				$('.lugar1').text(item.direc);
				$('#lugar2').attr("value",item.direc);
				$('#celPerfil').attr("value",item.celP);
				$('#mailPerfil').attr("value",item.mail);
				
			});

		}
		else
			alert(data.mensaje);
	});
}
function perfil2(){
	var cedu = $.cookie("cedulaProf");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarPerfil.php?jsoncallback=?";
	$.getJSON(url,{cedula:cedu}).done(function(data){
		if(data.num !=0){
			$.each(data,function(i,item){		
				$('#apPerfil').attr("value",item.apll);
				$('#nomPperfil').attr("value",item.nom);
				$('#cedPerfil').attr("value",item.ced);
				$('#sexPerfil').attr("value",item.gen);
				$('#edoCPerfil').attr("value",item.edoC);
				$('.fechaPerfil').text("Actualizar Tabla");
				$('#naciPerfil').attr("value",item.nacio);
				$('#lugar1').attr("value",item.direc);
				$('#lugar2').attr("value",item.direc);
				$('#celPerfil').attr("value",item.celP);
				$('#mailPerfil').attr("value",item.mail);	
			});
		}
		else
			alert(data.mensaje);
	});
}

function editarPerfil(){
	var valid = getQueryVariable("valid");
	if(valid=="y"){
		$('.nEdit').prop("disabled",false).removeClass("disabled");
	}
	else{
		$('.nEdit').prop("disabled",true).addClass("disabled");
	}
}
function guardarDatos(){
	$('.alert').remove();
	var apll = $('#apPerfil').val();
	var nom = $('#nomPperfil').val();
	//var ced = $('#cedPerfil').attr("value");
	//var sex = $('#sexPerfil').attr("value");
	//var edo = $('#edoCPerfil').attr("value");
	//var $('.fechaPerfil').text("Actualizar Tabla");
	var naci = $('#naciPerfil').val();
	//var lugar = $('#lugar1').attr("value");
	var lugar2 = $('#lugar2').val();
	var cell = $('#celPerfil').val();
	var mail = $('#mailPerfil').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/editarPerfil.php?jsoncallback=?";
	if(apll != " " || nom != " " || naci != " " || lugar2 != " " || cell != " " || mail != " "){
		$.getJSON(url,{ap:apll,nom:nom,lug2:lugar2,cell:cell,mail:mail}).done(function(data){
		$('#msj').append("<div class='alert alert-success'>"+data.mensaje+"<br><br><button id='prf'>Volver al Perfil</button></div>");

		});
	}else{
		alert("Inserte Valores Validos");
	}
}
function noVacio(){
	var apll = $('#apPerfil').val();
	var nom = $('#nomPperfil').val();
	var naci = $('#naciPerfil').val();
	var lugar2 = $('#lugar2').val();
	var cell = $('#celPerfil').val();
	var mail = $('#mailPerfil').val();
	if(apll != "" && nom != "" && naci != "" && lugar2 != "" && cell != "" && mail != ""){
		$('#butAce').prop("disabled",false).removeClass("disabled");
	}else{
		alert("Inserte Valores Validos");
		$('#butAce').prop("disabled",true).addClass("disabled");
	}
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
function cargarFoto(){
	var cedu = $.cookie("cedulaProf");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarFotoPerfil.php?jsoncallback=?";
	$.getJSON(url,{cedula:cedu}).done(function(data){
		console.log(data.ruta);
		if(data.num != 0){
			$('#ftPerfil').append("<img width='70' src='../FotosPerfil/"+data.ruta+"'>")		
		}
		else{		
			$('#ftPerfil').append("<img width='70' src='../images/user.png'>")
		}

	});
}