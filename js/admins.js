$(document).on("ready", empezar);

function empezar(){
   admins();
} 

function admins(){
	var galleta = $.cookie("adminName")
	if(galleta == undefined){
		window.location = "../index.html";
	}
	else
		$('#nombreUsuario').text(galleta);
		
}