$(document).on("ready", inicio);

function inicio()
{
	$('#enviarNuevoForo').on("click",ingresarForo);
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

function fecha()
{
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

	var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");

	var f=new Date();
	var fecha;

	fecha = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

	return fecha;
}

function ingresarForo()
{
	var nom = $('#asuntoFn').val();
	var men = $('#mensajeFN').val();
	var nomUser = "21029953";
	var fec = fecha();
	var hor = hora();
	
	if(nom=="" || nom==" ")
	{
		$("#asuntoFn").attr("placeholder", "Ingrese Un Asunto").blur();
		$("#asuntoFn").css("border-color","#b93207");
	}
	else if(men=="" || men==" ")
	{
		$("#asuntoFn").css("border-color","#ededed");
		$("#mensajeFN").attr("placeholder", "Ingrese Un Mensaje").blur();
		$("#mensajeFN").css("border-color","#b93207");
	}
	else
	{
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
			$("#mensajeFN").val("");
		});
	}
}

