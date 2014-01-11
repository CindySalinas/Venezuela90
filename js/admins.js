$(document).on("ready", empezar);

function empezar(){
   admins();
   perfil();
} 

function admins(){
	var galleta = $.cookie("adminName")
	if(galleta == undefined){
		window.location = "../index.html";
	}
	else
		$('#nombreUsuario').text(galleta);
		
}
function perfil(){
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarPerfil.php?jsoncallback=?";
	$.getJSON(url).done(function(data){
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