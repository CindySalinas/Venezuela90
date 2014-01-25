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
				});
		});

	
}