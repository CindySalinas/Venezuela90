$(document).on("ready",iniciar);

function iniciar()
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarCalendarioEscolar.php?jsoncallback=?";
		$.getJSON(url,{
		}).done(function(data){
			var cont=0;
				$.each(data, function(i,item){
					cont++;
					$(".tbodys tr td[value='"+item.fecha+"").css("background",item.colorEvento);
					$(".tbodys tr td[value='"+item.fecha+"").attr("title",item.descripcion);
				});
		});

	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultaTipoEvent.php?jsoncallback=?";
		$.getJSON(url2,{
		}).done(function(data){
				$.each(data, function(i,item){
					$("#tfoot").append("<div class='esc'><div class='www divDisInVer' style='background:"+item.colorTipoEvento+"'>&nbsp;</div><div class='divDisInVer'>"+item.nomTipoEvento+"<div></div>");
				});
		});

	
} 