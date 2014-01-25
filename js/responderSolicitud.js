$(document).on("ready", empezar);

function empezar(){

colocarDatos();
$('#responderSolic').on("click",actualizarEstado);
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

function actualizarEstado(){
	var idS = getQueryVariable("val");
	var fechaRes = $('#fechaSoli').val();
	var estado = $('#estado').val();
	var respS = $('#textArea2').val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/estadoSolicitud.php?jsoncallback=?";
	if( respS!= ""){
		$.getJSON(url,{resp:respS,fecha:fechaRes,id:idS,est:estado}).done(function(data){
			enviarResp();
		$('#noticias').hide("slow");
		$('#msj').append("<div class='alert alert-success'>"+data.mensaje+"</div>");
		$('#otroDiv').append("<div id='atr' class='atras2'><a id='atras' href='recepcionGestionSolicitudes.html'></a><a id='at' href='recepcionGestionSolicitudes.html'>Atrás</a></div>");
	});
		
	}
	else
		alert("Inserte una respuesta a la Solicitud");
}
function colocarDatos(){
	var type = getQueryVariable("type");
	var ids = getQueryVariable("val");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/gestionSolicitud.php?jsoncallback=?";
	var ruta = window.location.pathname.split("/");
	console.log(ruta);
	if(ruta[3] == "responderSolicitudes.html"){
		$.getJSON(url,{tipo:type,datoB:ids}).done(function(data){
			$.each(data,function(i,item){
				var nomb = $('#nomb').val("Nombre Solicitante: "+item.nomSoli);
				var cedI = $('#cedI').val("Cedula Solicitante: "+item.cedSoli);
				var tipoS = $('#tipoS').val("Tipo Solicitud: "+item.tipoSolic);
				var fechaSoli = $('#fechaSoli').val(GetTodayDate());
				var textA  = $('#textArea').text(item.comentSoli);
				var mail = $('#mail').val("Email Solicitante: "+item.mailSoli);
				
			});
	});

	}
	else 
		if(ruta[3] =="responderSolicitudRespondida.html"){
		$.getJSON(url,{tipo:type,datoB:ids}).done(function(data){
			$.each(data,function(i,item){
				var nomb = $('#nomb').val("Nombre Solicitante: "+item.nomSoli);
				var cedI = $('#cedI').val("Cedula Solicitante: "+item.cedSoli);
				var tipoS = $('#tipoS').val("Tipo Solicitud: "+item.tipoSolic);
				var fechaSoli = $('#fechaSoli').val(GetTodayDate());
				var textA  = $('#textArea').text(item.comentSoli);
				var textB  = $('#textArea2').text(item.respSoli);
				var mail = $('#mail').val("Email Solicitante: "+item.mailSoli);
				
			});
	});
		}

		
}
function enviarResp(){

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarMensaje.php?jsoncallback=?";
	var cedulaRemitente = "22224963";
	var destino  =  $('#mail').val();
	var tema = "Respuesta solicitud ["+$('#tipoS').val()+"]";
	var todoMensaje = $('#textArea2').val();
	var fec = fecha(); 
	var hor = hora();
		$.getJSON(url,{
			userCedula:cedulaRemitente,
 	 		destCorreo:destino,
 	 		asunto:tema,
 	 		destMensaje:todoMensaje,
 	 		fecha:fec,
 	 		hora:hor
		}).done(function(data){ });
}
function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
  // var xxx = dd + "-" +( MM+1) + "-" + yyyy;
  if(dd < 10){
  	 var xxx = yyyy+ "-" +(0+MM+1)+ "-" +0+ dd;
  }else
   var xxx = yyyy+ "-" +(MM+1)+ "-" + dd;

   return xxx;
}
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