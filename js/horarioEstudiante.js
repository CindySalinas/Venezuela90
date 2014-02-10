$(document).on("ready", empezar);

var idGrados;

function empezar()
{
	var cedula2=$.cookie("cedulaStudent");	

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});

	$('.consultaHorario').on("click",clickConsultaHorario); 

	$('.linkAtrasTablaConsultar3').on("click",function(){actionBotones('menuPrincipal','elHorario');}); 
}

function resetear()
{
	$(".spanConsultar").text("");
}

function clickConsultaHorario () 
{
	consultarAulaHA3();
	actionBotones('elHorario','menuPrincipal');	
}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function consultarAulaHA3()
{/*consultarHorarioSalones.php*/

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioEstudiante.php?jsoncallback=?";
		$.getJSON(url,{
			grado:idGrados
		}).done(function(data){
			
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
							$("#materiCnHA0"+diaNum).text(item.nombreMateria);						
						}
						else if(x==2)
						{
							var diaMas2=diaNum+5;
							if(diaMas2<10)
							{
								$("#materiCnHA0"+diaMas2).text(item.nombreMateria);
							}
							else
							{
								$("#materiCnHA"+diaMas2).text(item.nombreMateria);
							}
							
						}
						else if(x==3)
						{
							var diaMas3=diaNum+10;
							$("#materiCnHA"+diaMas3).text(item.nombreMateria);
						}
						else if(x==4)
						{
							var diaMas4=diaNum+15;
							$("#materiCnHA"+diaMas4).text(item.nombreMateria);
						}
					}
				}
			});
		});
}