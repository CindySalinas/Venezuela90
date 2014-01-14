$(document).on("ready", empezar);

function empezar(){
 $('#tipoSolicitud').on("change",funcionesSelect1);
 $('#buscarSolicitud').on("click",realizarBusqueda);
} 

function funcionesSelect1(){
	var select1 =  $('#tipoSolicitud option:selected').val();

	//alert(select1);
	if(select1 == 2){
		gestionesSelect('sinNom,#buscarSolicitud','fechaSolicitud,#estadoSolicitud');
		/*$('#buscarSolicitud').on("click",function(){ 
		var das = $('#tipoSoli option:selected').text();
		var tipo1 ="tipoSolicitud";
		realizarBusqueda(tipo1,das);});*/
		}
	else 
		if(select1 ==3){
			gestionesSelect('fechaSolicitud,#buscarSolicitud','sinNom,#estadoSolicitud');
			/*$('#buscarSolicitud').on("click",function(){ 
				var das2 = $('#FechaS2').val();
				var tipo2 ="fecha";
				realizarBusqueda(tipo2,das2);});*/
	}
	else
		 if(select1 ==4){
			gestionesSelect('estadoSolicitud,#buscarSolicitud','fechaSolicitud,#sinNom');
		/*	$('#buscarSolicitud').on("click",function(){ 
				var das3 = $('#estadoSoli option:selected').text();
				var tipo3 ="estado";
				realizarBusqueda(tipo3,das3);});*/
	}
	else
		 if(select1 ==5){
			gestionesSelect('buscarSolicitud','fechaSolicitud,#sinNom,#estadoSolicitud');
	}
	else{
		gestionesSelect('','fechaSolicitud,#sinNom,#estadoSolicitud,#buscarSolicitud');
	}
}

function realizarBusqueda(type,datas){
	var tablas = $('#tablaSolicitudes thead');
	var resp;
	type="tipoSolicitud";
	datas = "Constancia de Buena Conducta";
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/gestionSolicitud.php?jsoncallback=?";
	$.getJSON(url,{tipo:type,datoB:datas}).done(function(data){
		if(data.num != 0){
			$.each(data,function(i,item){
				if(item.respSoli == "false"){
					resp = "No Respondida";
				}else{
					resp = "Respondida";
				}
				tablas.before("<tr><td>"+item.numSoli+"</td><td>"+item.tipoSolic+"</td><td>"+item.fechaSoli+"</td><td>"+resp+"&nbsp; "+item.resFechaSoli+"</td><td><a href='#'>>></a></td></tr>");
				gestionesSelect('mostrarSoli','buscarSolicitud');
			});
		}
		else{alert(data.mensaje);}
	});
}


function gestionesSelect(mostrar,ocultar)
{
	$('#'+mostrar).show("slide");
	$('#'+ocultar).hide("slow");
	
}
