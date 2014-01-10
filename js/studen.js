$(document).on("ready", empezar);

function empezar(){
   stu();
} 

function stu(){
	var galleta = $.cookie("studentName")
	if(galleta == undefined){
		window.location = "../index.html";
	}
	else
		$('#nombreUsuario').text(galleta);
		
}