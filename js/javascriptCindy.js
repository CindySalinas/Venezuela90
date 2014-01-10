
$(document).on("ready", inicio);

function inicio()
{
	$('#enviarNuevoForo').on("click",ingresarForo);
	consultarForos();
}
function cargarForoResponder()
{
	alert("Esta es la pagina foro responder");
}
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

	var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");

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
		$(".nicEdit-main").val(",,")
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

