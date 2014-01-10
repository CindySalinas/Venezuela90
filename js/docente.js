$(document).on("ready", empezar);

function empezar(){
   prof();
} 

function prof(){
	var galleta = $.cookie("profName")
	if(galleta == undefined){
		window.location = "../index.html";
	}
	else
		$('#nombreUsuario').text(galleta);
		
}