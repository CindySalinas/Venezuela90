$(document).on("ready", empezar);

var idDocente;

function empezar(){
	var cedula2=$.cookie("cedulaProf");

	$('.linkAtrasMateriaConsultar2').on("click",function(){actionBotones('menuPrincipal','hod');}); 
	$('.linkAtrasTablaHDConsultar2').on("click",function(){actionBotones('divMateriaHorarioDocenteConsultar2','divTablaHorarioDocenteConsultar2');}); 
	$('.horarioEscolar').on("click",function(){actionBotones('hod','menuPrincipal');}); 
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){	
			idDocente = item.idDocente;	
			var url3 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMateriasDocenteHorario.php?jsoncallback=?";
			$.getJSON(url3,{
				docente:item.idDocente
			}).done(function(data3){
				$.each(data3, function(i,item){	
					$(".materiaConsultarHD1").append("<option class='optionConsultar2' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
				});												
			});			
		});
	});

	$("#botonConsultarMateriaGH").on("click",consultarMateria);
}

function actionBotones(mostrar,ocultar)
{
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function consultarMateria () 
{
	var consultarMateriaDocenteHD1 = $("#materiaHorarioDocenteConsultar2 option:selected").val();
	$(".spanConsultar").text("");
	if(consultarMateriaDocenteHD1!="0")
	{

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioDocente.php?jsoncallback=?";
		$.getJSON(url,{
			docente:idDocente,
			materia:consultarMateriaDocenteHD1
		}).done(function(data){
			var con=0;
			$.each(data, function(i,item){	
				
				for(var x=1;x<5;x++)
				{
					if(item.idHorario==x)
					{
						var diaNum;
						for (var i = 1; i < 6; i++) {
							if(item.idDia==i)
							{
								diaNum=i;
							}
						};
						if(x==1)
						{						
							$("#materiaCnHD0"+diaNum).text(item.nombreMateria);
							$("#gradoCnHD0"+diaNum).text(item.grado);						
						}
						else if(x==2)
						{
							var diaMas2=diaNum+5;
							if(diaMas2<10)
							{
								$("#materiaCnHD0"+diaMas2).text(item.nombreMateria);
								$("#gradoCnHD0"+diaMas2).text(item.grado);
							}
							else
							{
								$("#materiaCnHD"+diaMas2).text(item.nombreMateria);
								$("#gradoCnHD"+diaMas2).text(item.grado);
							}
							
						}
						else if(x==3)
						{
							var diaMas3=diaNum+10;
							$("#materiaCnHD"+diaMas3).text(item.nombreMateria);
							$("#gradoCnHD"+diaMas3).text(item.grado);
						}
						else if(x==4)
						{
							var diaMas4=diaNum+15;
							$("#materiaCnHD"+diaMas4).text(item.nombreMateria);
							$("#gradoCnHD"+diaMas4).text(item.grado);
						}
					}
				}
			});
		});
		actionBotones("divTablaHorarioDocenteConsultar2","divMateriaHorarioDocenteConsultar2");
	}
	else
	{
		alert("Seleccione Materia");
	}
}