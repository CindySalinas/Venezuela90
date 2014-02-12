$(document).on("ready", empezar);

var idGrados;
var idPadre,idAlum;
var ced = $.cookie("cedulaPadre");
function empezar()
{
	$('.esconderHorario').css("display","none");
	//var cedula2=$.cookie("cedulaStudent");	
	//var cedula2 = $('listAlum option:selected').val()
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarIdPadre.php?jsoncallback=?";
		$.getJSON(url2,{cedula:ced}).done(function(data){
				idPadre = data.idPadres;
				consultarAlumno();
		});

	/*var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
		});
	});*/
	//$('#listAlum').on("change",guardarIdGrado);
	$('.consultaHorario').on("click",clickConsultaHorario); 
	$('#horarioHijo').on("click",guardarIdGrado);
	$('.linkAtrasTablaConsultar3').on("click",function(){actionBotones('menuPrincipal','elHorario,.esconderHorario');}); 

	
}

function resetear()
{
	$(".spanConsultar").text("");
}

function clickConsultaHorario () 
{
	//consultarAulaHA3();
	actionBotones('elHorario','menuPrincipal');	
}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}
function consultarAlumno(){
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarIdPadreHijos.php?jsoncallback=?";
		$.getJSON(url2,{idPadre:idPadre}).done(function(data){
				$.each(data,function(i,item){
					$('#listAlum').append("<option value="+item.cedEstud+">"+item.nombAppl+"</option>");
				});

				//idPadre = data.idPadres;
		});
}
function guardarIdGrado(){
	var cedula2 = $('#listAlum option:selected').val()
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarGradoCedula.php?jsoncallback=?";
	$.getJSON(url,{
		cedula:cedula2
	}).done(function(data){
		$.each(data, function(i,item){
			idGrados=item.idGrado;
			if(cedula2 != 0){
				consultarAulaHA3(idGrados);
			}
			else
			{
				//$('.esconderHorario').hide("slow");
				alert("Elija un Alumno");
			}
			//console.log(idGrados);
		});
	});
}
function consultarAulaHA3(grado)
{/*consultarHorarioSalones.php*/
	$('.spanConsultar').text("");
	var ced = $('#listAlum option:selected').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioEstudiante.php?jsoncallback=?";
		//guardarIdGrado();
	console.log(grado);
		$.getJSON(url,{
			grado:grado,
			cedula:ced
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
						$('.esconderHorario').show("slide");
					}
				}
			});

		});

}