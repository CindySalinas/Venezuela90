$(document).on("ready", empezar);

var ingresarCedulaDocenteHD1, ingresarIdDocenteHD1, ingresarYearDocenteHD1;
var ingresarAulaHorarioAula1, ingresarYearHorarioAula1;
var consultarCedulaDocenteHD1, consultarIdDocenteHD1, consultarMateriaDocenteHD1;
var consultarAulaHA1;

var modificarCedulaHD1, modificarIdHD1, modificarYearHD1;
var modificarAulaHA1, modificarYearHA1;

var materiaModificar = new Array();
var idHorarioMateriaModificar = new Array();
var gradoModificar = new Array();
var ingresarOnoModificar=new Array();

var idSelectMateriaModificar=new Array();
var idSelectGradoModificar=new Array();

var idSelectMateriaModificar22=new Array();
var idHorarioMateriaModificar22 = new Array();
var ingresarOnoModificar22=new Array();

function empezar(){
	materias();
	$(".grados").css("border","0px solid white");
	$(".materias").css("border","0px solid white");
	$(".materias").css("font-size","12px");
	$(".grados").css("font-size","12px");
	
  	$('.ingresarHorario').on("click",function(){actionBotones('ingresar1','menuPrincipal');}); 

	$('.consultarHorario').on("click",function(){actionBotones('consultar1','menuPrincipal');}); 

	$('.modificarHorario').on("click",function(){actionBotones('modificar1','menuPrincipal');}); 

	$('.linkAtrasModificar0').on("click",function(){actionBotones('menuPrincipal','modificar1');});  

	$('.ingresarHorarioDocente1').on("click",function(){actionBotones('arcticleIngresarHorarioDocente1','ingresar1');});   

	$('.ingresarHorarioSalones1').on("click",function(){actionBotones('articleIngresarHorarioAulas1','ingresar1');});   

	$('.linkAtrasIngresar1').on("click",function(){actionBotones('menuPrincipal','ingresar1');});  

	$('#botonBuscarDocenteGH').on("click",ingresarBuscarDocente1); 

	$('.linkAtrasIngresarHD1').on("click",function(){actionBotones('ingresar1','arcticleIngresarHorarioDocente1');});  

	$('.linkAtrasDivIngresarHD1').on("click",function(){actionBotones('divCedulaHorarioDocente1','divYearHorarioDocente1');}); 

	$('.linkAtrasTablaHD1').on("click",function(){actionBotones('divYearHorarioDocente1','tablaIngresarHorarioDocente1');});

	$('.linkAtrasIngresarAulas1').on("click",function(){actionBotones('ingresar1','articleIngresarHorarioAulas1');});  

	$('.linkAtrasYearHA1').on("click",function(){actionBotones('divSeleccionHorarioAulas1','divYearHorarioAulas1');});  

	$('.linkAtrasTablaHA1').on("click",function(){actionBotones('divYearHorarioAulas1','divTablaHorarioAulas1');});  

	$('.horarioDocenteConsultar1').on("click",function(){actionBotones('consultar2','consultar1');});   

	$('.horarioAulasConsultar1').on("click",function(){actionBotones('consultar3','consultar1');});   

	$('.linkAtrasConsultar1').on("click",function(){actionBotones('menuPrincipal','consultar1');}); 

	$('.linkAtrasCedulaConsultar2').on("click",function(){actionBotones('consultar1','consultar2');});  

	$('.linkAtrasMateriaConsultar2').on("click",function(){actionBotones('divCedulaHorarioDocenteConsultar2','divMateriaHorarioDocenteConsultar2');});   

	$('.linkAtrasTablaHDConsultar2').on("click",function(){actionBotones('divMateriaHorarioDocenteConsultar2','divTablaHorarioDocenteConsultar2');});

	$('.linkAtrasSelectAulaConsultar3').on("click",function(){actionBotones('consultar1','consultar3');});  

	$('.linkAtrasTablaConsultar3').on("click",function(){actionBotones('divAulaHorarioAulasConsultar3','tablaConsultarAulasConsultar3');});   

	$('.linkAtrasCedulaModificar1').on("click",function(){actionBotones('modifica0','divCedulaHorarioDocenteModificar1');});   

	$('.linkAtrasYearModificar1').on("click",function(){actionBotones('divCedulaHorarioDocenteModificar1','divYearHorarioDocenteModificar1');});   

	$('.linkAtrasTablaModificar1').on("click",function(){actionBotones('divYearHorarioDocenteModificar1','tablaHorarioDocenteModificar1');});   

	$('.linkAtrasAulaModificar2').on("click",function(){actionBotones('modificar1','modificar2');});   

	$('.linkAtrasYearModificar2').on("click",function(){actionBotones('divAulaHorarioAulasModificar2','divYearHorarioAulasModificar2');}); 

	$('.linkAtrasTablaModificar2').on("click",function(){actionBotones('divYearHorarioAulasModificar2','tablaHorarioAulasModificar2');});   

	$('.horarioDocenteModificar0').on("click",function(){actionBotones('divCedulaHorarioDocenteModificar1','modifica0');});   

	$('.horarioAulasModificar0').on("click",function(){actionBotones('modificar2','modificar1');});   

	$('#botonYearEscolarDocenteGH').on("click",ingresarYearHD1); 
	
	$('#guardarHorarioDocente').on("click",guardarHorarioDocente1); 
	
	$('#botonBuscarAulaGH').on("click",selecionarAula1); 

	$('#botonYearEscolarAulaGH').on("click",ingresarHorarioAulas1); 
	
	$('#guardarHorarioAulas').on("click", guardarHorarioAulas1); 

	$('#botonConsultarDocenteGH').on("click", consultarDocenteHorarioDocente1); 

	$('#botonConsultarMateriaGH').on("click", consultarHD2); 

	$('#botonConsultarAulaGH').on("click", consultarAulaHA3); 

	$('#modificarBuscarDocenteGH').on("click", modificarCedulaHD);

	$('#modificarYearEscolarDocenteGH').on("click", modificarYearHD); 
	$('#modificarHorarioDocente').on("click", modificarHD11); 

	$('#modificarBuscarAulaGH').on("click", modificarAulaHA1);

	$('#modificarYearEscolarAulaGH').on("click", modificarYearHA1); 
	
	$('#modificarHorarioAulas').on("click", modificarHA11); 


} 

function resetear()
{
	$('input[type=text]').val("");
	$(".divYearHorarioDocente1").css("display","none");
	$(".tablaIngresarHorarioDocente1").css("display","none");
	$(".divYearHorarioAulas1").css("display","none");
	$(".divTablaHorarioAulas1").css("display","none");

	$(".divMateriaHorarioDocenteConsultar2").css("display","none");
	$(".divTablaHorarioDocenteConsultar2").css("display","none");
	$(".tablaConsultarAulasConsultar3").css("display","none");
	$(".divYearHorarioDocenteModificar1").css("display","none");
	$(".tablaHorarioDocenteModificar1").css("display","none");
	$(".divYearHorarioAulasModificar2").css("display","none");
	$(".tablaHorarioAulasModificar2").css("display","none");

	$(".materias option[value=0]").attr("selected","true");
	$(".grados option[value=0]").attr("selected","true");

	$(".materias").css("border","0px solid white");
	$(".grados").css("border","0px solid white");
	$(".materias").removeAttr("disabled");

	$(".spanConsultar").text("");

	for(var y=1;y<=20;y++)
	{
		if(y<10)
		{
			$("#materiMdHD0"+y).addClass("none");
			$("#gradoMdHD0"+y).addClass("none");
		}
		else
		{
			$("#materiMdHD"+y).addClass("none");
			$("#gradoMdHD"+y).addClass("none");
		}		
	}
	for(var y=1;y<=20;y++)
	{
		if(y<10)
		{
			$("#materiaMdHA0"+y).addClass("none");
		}
		else
		{
			$("#materiaMdHA"+y).addClass("none");
		}		
	}

}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function ingresarBuscarDocente1() 
{
	ingresarCedulaDocenteHD1=$("#cedulaIngresarHorarioDocente1").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarDocente.php?jsoncallback=?";
	$.getJSON(url,{
	cedDocente:ingresarCedulaDocenteHD1
	}).done(function(data){
	 	if(data.num != 0)
	 	{	
	 		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
			$.getJSON(url,{
			cedula:ingresarCedulaDocenteHD1
			}).done(function(data){
				$.each(data, function(i,item){	
					ingresarIdDocenteHD1 = item.idDocente;			
				});
			});

	 	 	actionBotones("divYearHorarioDocente1","divCedulaHorarioDocente1");	
		}
		else{
			alert("Cedula Incorrecta");
		}		
	});		
}

function ingresarYearHD1() 
{

	ingresarYearDocenteHD1 = $("#yearHorarioDocente1 option:selected").val();

	$(".materias").removeAttr("disabled");
	$(".grados").removeAttr("disabled");	

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHorarioDocente.php?jsoncallback=?";
	$.getJSON(url,{
		docente:ingresarIdDocenteHD1,
		year:ingresarYearDocenteHD1
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
						$("#materiaInHD0"+diaNum).attr("disabled","disabled");
						$("#gradoInHD0"+diaNum).attr("disabled","disabled");						
					}
					else if(x==2)
					{
						var diaMas2=diaNum+5;
						if(diaMas2<10)
						{
							$("#materiaInHD0"+diaMas2).attr("disabled","disabled");
							$("#gradoInHD0"+diaMas2).attr("disabled","disabled");
						}
						else
						{
							$("#materiaInHD"+diaMas2).attr("disabled","disabled");
							$("#gradoInHD"+diaMas2).attr("disabled","disabled");
						}
						
					}
					else if(x==3)
					{
						var diaMas3=diaNum+10;
						$("#materiaInHD"+diaMas3).attr("disabled","disabled");
						$("#gradoInHD"+diaMas3).attr("disabled","disabled");
					}
					else if(x==4)
					{
						var diaMas4=diaNum+15;
						$("#materiaInHD"+diaMas4).attr("disabled","disabled");
						$("#gradoInHD"+diaMas4).attr("disabled","disabled");
					}
				}
			}
		});
	});

	actionBotones("tablaIngresarHorarioDocente1","divYearHorarioDocente1");
}

function materias () 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){	
			$(".materias").append("<option value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});
}

function materias2Select () 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarMaterias.php?jsoncallback=?";
	$.getJSON(url,{
	}).done(function(data){
		$.each(data, function(i,item){	
			$(".materiaConsultarHD1").append("<option class='optionConsultar2' value='"+item.idMateria+"'>"+item.nombreMateria+"</option>");
		});
	});
}

function guardarHorarioDocente1() 
{	
	var materia = new Array();
	var grado = new Array();
	var ingresarOno=new Array();
	var dia=new Array();
	var hora=new Array();
	$(".grados").css("border","0px solid white");
	$(".materias").css("border","0px solid white");
	for(var x=0;x<20;x++)
	{
		var nu=x+1;
		if(nu<10)
		{
			materia[x]=$("#materiaInHD0"+nu+" option:selected").val();
			grado[x]=$("#gradoInHD0"+nu+" option:selected").val();

			if(materia[x] != "0" && grado[x]!="0")
			{
				ingresarOno[x]="si";
			}
			else if(materia[x]=="0" && grado[x]!="0")
			{
				ingresarOno[x]="talves";
				$("#materiaInHD0"+nu).css("border","1px solid red");
			}
			else if(materia[x]!="0" && grado[x]=="0")
			{
				ingresarOno[x]="talves";
				$("#gradoInHD0"+nu).css("border","1px solid red");
			}
			else if(materia[x]=="0" && grado[x]=="0")
			{
				ingresarOno[x]="no";
			}
			if(nu<=5)
			{
				hora[x]="1";
			}
			else if(nu>5 && nu<10)
			{
				hora[x]="2";
			}

			if(nu==1 || nu==6 || nu==11 || nu==16)
			{
				dia[x]="1";
			}
			if(nu==2 || nu==7 || nu==12 || nu==17)
			{
				dia[x]="2";
			}
			if(nu==3 || nu==8 || nu==13 || nu==18)
			{
				dia[x]="3";
			}
			if(nu==4 || nu==9 || nu==14 || nu==19)
			{
				dia[x]="4";
			}
			if(nu==5 || nu==10 || nu==15 || nu==20)
			{
				dia[x]="5";
			}
		}
		else
		{
			materia[x]=$("#materiaInHD"+nu+" option:selected").val();
			grado[x]=$("#gradoInHD"+nu+" option:selected").val();

			if(materia[x] != "0" && grado[x]!="0")
			{
				ingresarOno[x]="si";
			}
			else if(materia[x]=="0" && grado[x]!="0")
			{
				ingresarOno[x]="talves";
				$("#materiaInHD"+nu).css("border","1px solid red");
			}
			else if(materia[x]!="0" && grado[x]=="0")
			{
				ingresarOno[x]="talves";
				$("#gradoInHD"+nu).css("border","1px solid red");
			}
			else if(materia[x]=="0" && grado[x]=="0")
			{
				ingresarOno[x]="no";
			}	
			if(nu==10)
			{
				hora[x]="2";
			}
			else if(nu>10 && nu<=15)
			{
				hora[x]="3";
			}
			else if(nu>15 && nu<=20)
			{
				hora[x]="4";
			}

			if(nu==1 || nu==6 || nu==11 || nu==16)
			{
				dia[x]="1";
			}
			if(nu==2 || nu==7 || nu==12 || nu==17)
			{
				dia[x]="2";
			}
			if(nu==3 || nu==8 || nu==13 || nu==18)
			{
				dia[x]="3";
			}
			if(nu==4 || nu==9 || nu==14 || nu==19)
			{
				dia[x]="4";
			}
			if(nu==5 || nu==10 || nu==15 || nu==20)
			{
				dia[x]="5";
			}
		}
	}
	var contando=0;
	for (var x = 0; x < 20; x++)
	{
		if(ingresarOno[x]=="talves")
		{
			contando++;
		}
	};
	if(contando>0)
	{
		alert("Faltan Datos Por Seleccionar");
	}
	else
	{
		for(var z = 0; z < 20; z++)
		{
			if(ingresarOno[z]=="si")
			{
				ingresarHorarioMateria(ingresarIdDocenteHD1, materia[z], hora[z], ingresarYearDocenteHD1, grado[z], dia[z]);
			}			
		}
		alert("Se Ha Ingresado El Horario");
		actionBotones('divYearHorarioDocente1','tablaIngresarHorarioDocente1');
	}
	

}

function ingresarHorarioMateria (idDocente, idMateria, idHorario, idYear, idGrado, idDia) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarHorarioMateria.php?jsoncallback=?";
	$.getJSON(url,{
		docente:idDocente,
		year:idYear,
		materia:idMateria,
		horario:idHorario,
		grado:idGrado,
		dia:idDia
	}).done(function(data){
		
	});
}

function selecionarAula1 () 
{
	ingresarAulaHorarioAula1 = $("#selectAula111 option:selected").val();
	actionBotones("divYearHorarioAulas1","divSeleccionHorarioAulas1");
}

function ingresarHorarioAulas1()
{
	ingresarYearHorarioAula1 = $("#yearHorarioAulas1 option:selected").val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarHorarioAulas.php?jsoncallback=?";
	$.getJSON(url,{
		aula:ingresarAulaHorarioAula1,
		year:ingresarYearHorarioAula1
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
						$("#materiaInHA0"+diaNum).attr("disabled","disabled");					
					}
					else if(x==2)
					{
						var diaMas2=diaNum+5;
						if(diaMas2<10)
						{
							$("#materiaInHA0"+diaMas2).attr("disabled","disabled");
						}
						else
						{
							$("#materiaInHA"+diaMas2).attr("disabled","disabled");
						}
						
					}
					else if(x==3)
					{
						var diaMas3=diaNum+10;
						$("#materiaInHA"+diaMas3).attr("disabled","disabled");
					}
					else if(x==4)
					{
						var diaMas4=diaNum+15;
						$("#materiaInHA"+diaMas4).attr("disabled","disabled");
					}
				}
			}
		});
	});

	actionBotones("divTablaHorarioAulas1","divYearHorarioAulas1");
}

function guardarHorarioAulas1()
{
	var materia = new Array();
	var ingresarOno=new Array();
	var dia=new Array();
	var hora=new Array();
	$(".materias").css("border","0px solid white");

	for(var x=0;x<20;x++)
	{
		var nu=x+1;
		if(nu<10)
		{
			materia[x]=$("#materiaInHA0"+nu+" option:selected").val();
			
			if(materia[x] != "0")
			{
				ingresarOno[x]="si";
			}
			else if(materia[x]=="0" )
			{
				ingresarOno[x]="no";				
			}

			if(nu<=5)
			{
				hora[x]="1";
			}
			else if(nu>5 && nu<10)
			{
				hora[x]="2";
			}

			if(nu==1 || nu==6 || nu==11 || nu==16)
			{
				dia[x]="1";
			}
			if(nu==2 || nu==7 || nu==12 || nu==17)
			{
				dia[x]="2";
			}
			if(nu==3 || nu==8 || nu==13 || nu==18)
			{
				dia[x]="3";
			}
			if(nu==4 || nu==9 || nu==14 || nu==19)
			{
				dia[x]="4";
			}
			if(nu==5 || nu==10 || nu==15 || nu==20)
			{
				dia[x]="5";
			}
		}
		else
		{
			materia[x]=$("#materiaInHA"+nu+" option:selected").val();

			if(materia[x] != "0")
			{
				ingresarOno[x]="si";
			}
			else if(materia[x]=="0")
			{
				ingresarOno[x]="no";
			}
			if(nu==10)
			{
				hora[x]="2";
			}
			else if(nu>10 && nu<=15)
			{
				hora[x]="3";
			}
			else if(nu>15 && nu<=20)
			{
				hora[x]="4";
			}

			if(nu==1 || nu==6 || nu==11 || nu==16)
			{
				dia[x]="1";
			}
			if(nu==2 || nu==7 || nu==12 || nu==17)
			{
				dia[x]="2";
			}
			if(nu==3 || nu==8 || nu==13 || nu==18)
			{
				dia[x]="3";
			}
			if(nu==4 || nu==9 || nu==14 || nu==19)
			{
				dia[x]="4";
			}
			if(nu==5 || nu==10 || nu==15 || nu==20)
			{
				dia[x]="5";
			}
		}
	}
	for(var z = 0; z < 20; z++)
	{
		if(ingresarOno[z]=="si")
		{
			ingresarHorarioAulas(hora[z], ingresarAulaHorarioAula1, materia[z], ingresarYearHorarioAula1, dia[z]);
		}			
	}
	actionBotones('divYearHorarioAulas1','divTablaHorarioAulas1');
	alert("Se Ha Ingresado El Horario");	
}

function ingresarHorarioAulas (idHorario, idSalon, idAsignatuura, idYear, idDia) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarHorarioAula.php?jsoncallback=?";
	$.getJSON(url,{
		horario:idHorario,
		salon:idSalon,
		materia:idAsignatuura,
		year:idYear,
		dia:idDia
	}).done(function(data){
		
	});
}

function consultarDocenteHorarioDocente1() 
{
	consultarCedulaDocenteHD1 = $("#cedulaHorarioDocenteConsultar2").val();
	$(".optionConsultar2").remove();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarDocente.php?jsoncallback=?";
	$.getJSON(url,{
	cedDocente:consultarCedulaDocenteHD1
	}).done(function(data){
	 	if(data.num != 0)
	 	{	
	 		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
			$.getJSON(url,{
			cedula:consultarCedulaDocenteHD1
			}).done(function(data){
				$.each(data, function(i,item){	
					consultarIdDocenteHD1 = item.idDocente;	
					
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
	 	 	actionBotones("divMateriaHorarioDocenteConsultar2","divCedulaHorarioDocenteConsultar2");
		}
		else{
			alert("Cedula Incorrecta");
		}		
	});	
	
}

function consultarHD2 () 
{
	consultarMateriaDocenteHD1 = $("#materiaHorarioDocenteConsultar2 option:selected").val();
		
	if(consultarMateriaDocenteHD1!="0")
	{

		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioDocente.php?jsoncallback=?";
		$.getJSON(url,{
			docente:consultarIdDocenteHD1,
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
		alert("Seleccione Materia u Otro Docente");
	}
	
}

function consultarAulaHA3()
{/*consultarHorarioSalones.php*/
	consultarAulaHA1 = $("#aulaHorarioAulasConsultar3 option:selected").val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHorarioSalones.php?jsoncallback=?";
		$.getJSON(url,{
			aula:consultarAulaHA1
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
	
	actionBotones("tablaConsultarAulasConsultar3","divAulaHorarioAulasConsultar3");
}

function modificarCedulaHD() 
{
	modificarCedulaHD1=$("#cedulaHorarioDocenteModificar1").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarDocente.php?jsoncallback=?";
	$.getJSON(url,{
	cedDocente:modificarCedulaHD1
	}).done(function(data){
	 	if(data.num != 0)
	 	{	
	 		var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCamposDocente.php?jsoncallback=?";
			$.getJSON(url,{
			cedula:modificarCedulaHD1
			}).done(function(data){
				$.each(data, function(i,item){	
					modificarIdHD1 = item.idDocente;	
				});
			});

	 	 	actionBotones("divYearHorarioDocenteModificar1","divCedulaHorarioDocenteModificar1");	
		}
		else{
			alert("Cedula Incorrecta");
		}		
	});		
	
}

function modificarYearHD() 
{
	modificarYearHD1=$("#yearHorarioDocenteModificar1 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHmModificar.php?jsoncallback=?";
	$.getJSON(url,{
		docente:modificarIdHD1,
		year: modificarYearHD1
	}).done(function(data){
		var con=0;var cuantas=0;
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
						$("#materiMdHD0"+diaNum).removeClass("none");				
						$("#gradoMdHD0"+diaNum).removeClass("none");

						$("#materiMdHD0"+diaNum+" option[value='"+item.idMateria+"']").attr("selected","selected");				
						$("#gradoMdHD0"+diaNum+" option[value='"+item.idGrado+"']").attr("selected","selected");	

						idSelectMateriaModificar[cuantas]="#materiMdHD0"+diaNum;
						idSelectGradoModificar[cuantas]="#gradoMdHD0"+diaNum;	
						idHorarioMateriaModificar[cuantas]=item.idHorarioMateria;	
					}
					else if(x==2)
					{
						var diaMas2=diaNum+5;
						if(diaMas2<10)
						{
							$("#materiMdHD0"+diaMas2).removeClass("none");
							$("#gradoMdHD0"+diaMas2).removeClass("none");
							idSelectMateriaModificar[cuantas]="#materiMdHD0"+diaMas2;
							idSelectGradoModificar[cuantas]="#gradoMdHD0"+diaMas2;
							$("#materiMdHD0"+diaMas2+" option[value='"+item.idMateria+"']").attr("selected","selected");				
							$("#gradoMdHD0"+diaMas2+" option[value='"+item.idGrado+"']").attr("selected","selected");	
							idHorarioMateriaModificar[cuantas]=item.idHorarioMateria;
						}
						else
						{
							$("#materiMdHD"+diaMas2).removeClass("none");
							$("#gradoMdHD"+diaMas2).removeClass("none");
							idSelectMateriaModificar[cuantas]="#materiMdHD"+diaMas2;
							idSelectGradoModificar[cuantas]="#gradoMdHD"+diaMas2;
							$("#materiMdHD"+diaMas2+" option[value='"+item.idMateria+"']").attr("selected","selected");				
							$("#gradoMdHD"+diaMas2+" option[value='"+item.idGrado+"']").attr("selected","selected");	
							idHorarioMateriaModificar[cuantas]=item.idHorarioMateria;
						}
							
					}
					else if(x==3)
					{
						var diaMas3=diaNum+10;
						$("#materiMdHD"+diaMas3).removeClass("none");
						$("#gradoMdHD"+diaMas3).removeClass("none");
						idSelectMateriaModificar[cuantas]="#materiMdHD"+diaMas3;
						idSelectGradoModificar[cuantas]="#gradoMdHD"+diaMas3;
						$("#materiMdHD"+diaMas3+" option[value='"+item.idMateria+"']").attr("selected","selected");				
						$("#gradoMdHD"+diaMas3+" option[value='"+item.idGrado+"']").attr("selected","selected");	
						idHorarioMateriaModificar[cuantas]=item.idHorarioMateria;
					}
					else if(x==4)
					{
						var diaMas4=diaNum+15;
						$("#materiMdHD"+diaMas4).removeClass("none");
						$("#gradoMdHD"+diaMas4).removeClass("none");
						idSelectMateriaModificar[cuantas]="#materiMdHD"+diaMas4;
						idSelectGradoModificar[cuantas]="#gradoMdHD"+diaMas4;
						$("#materiMdHD"+diaMas4+" option[value='"+item.idMateria+"']").attr("selected","selected");				
						$("#gradoMdHD"+diaMas4+" option[value='"+item.idGrado+"']").attr("selected","selected");	
						idHorarioMateriaModificar[cuantas]=item.idHorarioMateria;
					}
					cuantas++;
				}
			}
		});
	});
	

	actionBotones("tablaHorarioDocenteModificar1","divYearHorarioDocenteModificar1");
}

function modificarHorarioDocente () 
{
	//consultarHmModificar.php
}

function modificarHD11() 
{
	$(".materias").css("border","0px solid white");
	$(".grados").css("border","0px solid white");
	var materia=new Array();
	var grado=new Array();
	for(var y=0;y<idSelectGradoModificar.length; y++)
	{
		materia[y]=$(idSelectMateriaModificar[y] + " option:selected").val();
		grado[y]=$(idSelectGradoModificar[y] + " option:selected").val();
	}
	for(var x=0; x<idSelectGradoModificar.length; x++)
	{
		if(materia[x] != "0" && grado[x]!="0")
		{
			ingresarOnoModificar[x]="si";
		}
		else if(materia[x]=="0" && grado[x]!="0")
		{
			ingresarOnoModificar[x]="talves";
			$(idSelectMateriaModificar[x]).css("border","1px solid red");
		}
		else if(materia[x]!="0" && grado[x]=="0")
		{
			ingresarOnoModificar[x]="talves";
			$(idSelectGradoModificar[x]).css("border","1px solid red");
		}
		else if(materia[x]=="0" && grado[x]=="0")
		{
			ingresarOnoModificar[x]="no";
		}
	}
	var contando=0;
	for(var x=0; x<ingresarOnoModificar.length; x++)
	{
		if(ingresarOnoModificar[x]=="talves")
		{
			contando++;
		}
	}
	if(contando>0)
	{
		alert("Faltan Datos Por Seleccionar");
	}
	else
	{
		for(var x=0; x<ingresarOnoModificar.length; x++)
		{
			if(ingresarOnoModificar[x]=="si")
			{
				var idMateriaM = $(idSelectMateriaModificar[x]+" option:selected").val();
				var idHorarioMateriaM = idHorarioMateriaModificar[x];
				var idGradoM = $(idSelectGradoModificar[x]+" option:selected").val();
				modificarHorarioDocente(idMateriaM, idGradoM, idHorarioMateriaM);
			}
			else if(ingresarOnoModificar[x]=="no")
			{
				var idHorarioMateriaM = idHorarioMateriaModificar[x];
				eliminarHorarioDocente(idHorarioMateriaM);
			}
		}
		alert("Se Han Guardado Los Datos Satisfactoriamente");
		actionBotones('divYearHorarioDocenteModificar1','tablaHorarioDocenteModificar1');
	}	
}

function modificarHorarioDocente (idMateria, idGrado, idHorarioMateria) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarHorarioDocente.php?jsoncallback=?";
	$.getJSON(url,{
		horarioMateria:idHorarioMateria,
		materia:idMateria,
		grado:idGrado
	}).done(function(data){
		
	});
}
function eliminarHorarioDocente (idHorarioMateria) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarHorarioMateriaDocente.php?jsoncallback=?";
	$.getJSON(url,{
		horarioMateria:idHorarioMateria
	}).done(function(data){
		
	});
}


function modificarAulaHA1()
{
	modificarAulaHA1 = $("#aulaHorarioAulasModificar2 option:selected").val();
	actionBotones("divYearHorarioAulasModificar2","divAulaHorarioAulasModificar2");
}

function modificarYearHA1()
{
	modificarYearHA1 = $("#yearHorarioAulasModificar2 option:selected").val();
	
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarHaModificar.php?jsoncallback=?";
	$.getJSON(url,{
		aula:modificarAulaHA1,
		year:modificarYearHA1
	}).done(function(data){
		var con=0;var cuantas=0;
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
						$("#materiaMdHA0"+diaNum).removeClass("none");	
						$("#materiaMdHA0"+diaNum+" option[value='"+item.idMateria+"']").attr("selected","selected");

						idSelectMateriaModificar22[cuantas]="#materiaMdHA0"+diaNum;
						idHorarioMateriaModificar22[cuantas]=item.idHorarioSalon;	
					}
					else if(x==2)
					{
						var diaMas2=diaNum+5;
						if(diaMas2<10)
						{
							$("#materiaMdHA0"+diaMas2).removeClass("none");	
							$("#materiaMdHA0"+diaMas2+" option[value='"+item.idMateria+"']").attr("selected","selected");

							idSelectMateriaModificar22[cuantas]="#materiaMdHA0"+diaMas2;
							idHorarioMateriaModificar22[cuantas]=item.idHorarioSalon;	
						}
						else
						{
							$("#materiaMdHA"+diaMas2).removeClass("none");	
							$("#materiaMdHA"+diaMas2+" option[value='"+item.idMateria+"']").attr("selected","selected");

							idSelectMateriaModificar22[cuantas]="#materiaMdHA"+diaMas2;
							idHorarioMateriaModificar22[cuantas]=item.idHorarioSalon;
						}
							
					}
					else if(x==3)
					{
						var diaMas3=diaNum+10;
						$("#materiaMdHA"+diaMas3).removeClass("none");	
							$("#materiaMdHA"+diaMas3+" option[value='"+item.idMateria+"']").attr("selected","selected");

							idSelectMateriaModificar22[cuantas]="#materiaMdHA"+diaMas3;
							idHorarioMateriaModificar22[cuantas]=item.idHorarioSalon;
					}
					else if(x==4)
					{
						var diaMas4=diaNum+15;
						$("#materiaMdHA"+diaMas4).removeClass("none");	
							$("#materiaMdHA"+diaMas4+" option[value='"+item.idMateria+"']").attr("selected","selected");

							idSelectMateriaModificar22[cuantas]="#materiaMdHA"+diaMas4;
							idHorarioMateriaModificar22[cuantas]=item.idHorarioSalon;
					}
					cuantas++;
				}
			}
		});
	});

	actionBotones("tablaHorarioAulasModificar2","divYearHorarioAulasModificar2");
}

function modificarHA11()
{
	var materia=new Array();

	for(var y=0;y<idSelectMateriaModificar22.length; y++)
	{
		materia[y]=$(idSelectMateriaModificar22[y] + " option:selected").val();
	}
	for(var x=0; x<idSelectMateriaModificar22.length; x++)
	{
		if(materia[x] != "0")
		{
			ingresarOnoModificar22[x]="si";
		}
		else if(materia[x]=="0")
		{
			ingresarOnoModificar22[x]="no";
		}
	}
	for(var x=0; x<ingresarOnoModificar22.length; x++)
	{
		if(ingresarOnoModificar22[x]=="si")
		{
			var idMateriaM = $(idSelectMateriaModificar22[x]+" option:selected").val();
			var idHorarioMateriaM = idHorarioMateriaModificar22[x];
			
			modificarHorarioAula(idMateriaM, idHorarioMateriaM);
		}
		else if(ingresarOnoModificar22[x]=="no")
		{
			var idHorarioMateriaM = idHorarioMateriaModificar22[x];
			eliminarHorarioAula(idHorarioMateriaM);
		}
	}
	alert("Se Han Guardado Los Datos Satisfactoriamente");
	actionBotones('divYearHorarioAulasModificar2','tablaHorarioAulasModificar2');
	
}

function modificarHorarioAula (idMateria, idHorarioAula) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/modificarHorarioSalon.php?jsoncallback=?";
	$.getJSON(url,{
		horarioAula:idHorarioAula,
		materia:idMateria
	}).done(function(data){
		
	});
}
function eliminarHorarioAula (idHorarioAula) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarHorarioSalon.php?jsoncallback=?";
	$.getJSON(url,{
		horarioSalon:idHorarioAula
	}).done(function(data){
		
	});
}