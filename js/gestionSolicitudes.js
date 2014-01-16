$(document).on("ready", empezar);

function empezar(){
 $('#tipoSolicitud').on("change",funcionesSelect1);
 //$('#buscarSolicitud').on("click",realizarBusqueda);
} 

function funcionesSelect1(){
	var select1 =  $('#tipoSolicitud option:selected').val();

	//alert(select1);
	if(select1 == 2){
		gestionesSelect('sinNom,#buscarSolicitud','fechaSolicitud,#estadoSolicitud');
		$('#buscarSolicitud').on("click",function(){ 
			var das = $('#tipoSoli option:selected').text();
			var tipo1 ="tipoSolicitud";
			$('#tbodyGS > tr').remove();
		realizarBusqueda(tipo1,das);});
		}
	else 
		if(select1 ==3){
			gestionesSelect('fechaSolicitud,#buscarSolicitud','sinNom,#estadoSolicitud');
			$('#buscarSolicitud').on("click",function(){ 
			var das2 = $('#FechaS2').val();
			var tipo2 ="fecha";
				$('#tbodyGS > tr').remove();
				realizarBusqueda(tipo2,das2);});
	}
	else
		 if(select1 ==4){
			gestionesSelect('estadoSolicitud,#buscarSolicitud','fechaSolicitud,#sinNom');
			$('#buscarSolicitud').on("click",function(){ 
				var das3 = $('#estadoSoli option:selected').text();
				var tipo3 ="estado";
				$('#tbodyGS > tr').remove();
				realizarBusqueda(tipo3,das3);});
	}
	else
		 if(select1 ==5){
			gestionesSelect('buscarSolicitud','fechaSolicitud,#sinNom,#estadoSolicitud');
			$('#buscarSolicitud').on("click",function(){ 
				var das4="";
				var tipo4 ="todo";
				$('#tbodyGS > tr').remove();
				realizarBusqueda(tipo4,das4);});
	}
	else{
		gestionesSelect('','fechaSolicitud,#sinNom,#estadoSolicitud,#buscarSolicitud');
	}
}

function realizarBusqueda(tipo,valor){
	var tablas = $('#tbodyGS');
	/*var resp;*/
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/gestionSolicitud.php?jsoncallback=?"; 
	$.getJSON(url,{tipo:tipo,datoB:valor}).done(function(data){
		if(data.num != 0){
			$.each(data,function(i,item){
				tablas.append("<tr><td>"+item.numSoli+"</td><td>"+item.tipoSolic+"</td><td>"+item.fechaSoli+"</td><td>"+item.estadoSoli+"</td><td><a href='responderSolicitudes.html?type=resp&val="+item.numSoli+"'>>></a></td></tr>");
				gestionesSelect('mostrarSoli','');
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
