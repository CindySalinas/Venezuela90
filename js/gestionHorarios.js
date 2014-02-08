$(document).on("ready", empezar);

var ingresarCedulaDocenteHD1, ingresarIdDocenteHD1, ingresarYearDocenteHD1;
var ingresarAulaHorarioAula1, ingresarYearHorarioAula1;
var consultarCedulaDocenteHD1, consultarMateriaDocenteHD1;
var consultarAulaHA1;

var modificarCedulaHD1, modificarYearHD1;
var modificarAulaHA1, modificarYearHA1;

function empezar(){
	materias();
	$(".grados").css("border","0px solid white");
	$(".materias").css("border","0px solid white");
	$(".materias").css("font-size","12px");
	$(".grados").css("font-size","12px");
	
  	$('.ingresarHorario').on("click",function(){actionBotones('ingresar1','menuPrincipal');}); 

	$('.consultarHorario').on("click",function(){actionBotones('consultar1','menuPrincipal');}); 

	$('.modificarHorario').on("click",function(){actionBotones('modificar1','menuPrincipal');});  

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

	$('.linkAtrasCedulaModificar1').on("click",function(){actionBotones('menuPrincipal','modificar1');});   

	$('.linkAtrasYearModificar1').on("click",function(){actionBotones('divCedulaHorarioDocenteModificar1','divYearHorarioDocenteModificar1');});   

	$('.linkAtrasTablaModificar1').on("click",function(){actionBotones('divYearHorarioDocenteModificar1','tablaHorarioDocenteModificar1');});   

	$('.linkAtrasAulaModificar2').on("click",function(){actionBotones('menuPrincipal','modificar2');});   

	$('.linkAtrasYearModificar2').on("click",function(){actionBotones('divAulaHorarioAulasModificar2','divYearHorarioAulasModificar2');}); 

	$('.linkAtrasTablaModificar2').on("click",function(){actionBotones('divYearHorarioAulasModificar2','tablaHorarioAulasModificar2');});   

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

function guardarHorarioDocente1() 
{
	alert(ingresarIdDocenteHD1 + " - " +ingresarYearDocenteHD1);
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
			else if(nu>5 || nu<=10)
			{
				hora[x]="2";
			}
			else if(nu>10 || nu<=15)
			{
				hora[x]="3";
			}
			else if(nu>15 || nu<=20)
			{
				hora[x]="4";
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

		}
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
	alert(ingresarAulaHorarioAula1);
	actionBotones("divYearHorarioAulas1","divSeleccionHorarioAulas1");
}

function ingresarHorarioAulas1()
{
	ingresarYearHorarioAula1 = $("#yearHorarioAulas1 option:selected").val();
	alert(ingresarYearHorarioAula1);
	actionBotones("divTablaHorarioAulas1","divYearHorarioAulas1");
}

function guardarHorarioAulas1()
{
	alert(ingresarAulaHorarioAula1+" - "+ingresarYearHorarioAula1);
}

function consultarDocenteHorarioDocente1() 
{
	consultarCedulaDocenteHD1 = $("#cedulaHorarioDocenteConsultar2").val();
	alert(consultarCedulaDocenteHD1);
	actionBotones("divMateriaHorarioDocenteConsultar2","divCedulaHorarioDocenteConsultar2");
}

function consultarHD2 () 
{
	consultarMateriaDocenteHD1 = $("#materiaHorarioDocenteConsultar2 option:selected").val();
	alert(consultarMateriaDocenteHD1);
	actionBotones("divTablaHorarioDocenteConsultar2","divMateriaHorarioDocenteConsultar2");
}

function consultarAulaHA3()
{
	consultarAulaHA1 = $("#aulaHorarioAulasConsultar3 option:selected").val();
	alert(consultarAulaHA1);
	actionBotones("tablaConsultarAulasConsultar3","divAulaHorarioAulasConsultar3");
}

function modificarCedulaHD() 
{
	modificarCedulaHD1=$("#cedulaHorarioDocenteModificar1").val();
	alert(modificarCedulaHD1);
	actionBotones("divYearHorarioDocenteModificar1","divCedulaHorarioDocenteModificar1");
}

function modificarYearHD() 
{
	modificarYearHD1=$("#yearHorarioDocenteModificar1 option:selected").val();
	alert(modificarYearHD1);
	actionBotones("tablaHorarioDocenteModificar1","divYearHorarioDocenteModificar1");
}

function modificarHD11() 
{
	alert("guardar modificar1");
}

function modificarAulaHA1()
{
	modificarAulaHA1 = $("#aulaHorarioAulasModificar2 option:selected").val();
	alert(modificarAulaHA1);
	actionBotones("divYearHorarioAulasModificar2","divAulaHorarioAulasModificar2");
}

function modificarYearHA1()
{
	modificarYearHA1 = $("#yearHorarioAulasModificar2 option:selected").val();
	alert(modificarYearHA1);
	actionBotones("tablaHorarioAulasModificar2","divYearHorarioAulasModificar2");
}

function modificarHA11()
{
	alert("guardar aula");
}

