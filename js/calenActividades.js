$(document).on("ready",iniciar);

function iniciar()
{
	rellenar();
	$("#gg").on("change",rellenar);
} 

function rellenar()
{
	var grad = $("#gg option:selected").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCalendarioActividades.php?jsoncallback=?";
	$(".tbodys2 tr td").removeClass("tabtrtd");
	$(".tbodys2 tr td").css("background","#ededed");
	$.getJSON(url,{grado:grad
		}).done(function(data){
			var cont=0;
				$.each(data, function(i,item){
					cont++;
					$(".tbodys2 tr td[value='"+item.fecha+"").css("background","green");

					$(".tbodys2 tr td[value='"+item.fecha+"").addClass("tabtrtd");
					
					$(".tbodys2 tr td[value='"+item.fecha+"").attr("title",item.descripcion);
				});
		});	
}