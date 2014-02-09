
$(document).on("ready", empezar);


function empezar(){
   
  $('.comuRepre').on("click",function(){actionBotones("comunicadoRepresentante","listadoPrincipal");});
  $('.comuAlumn').on("click",function(){actionBotones("comunicadoAlumno","listadoPrincipal");});
  $('.reprePorAlumno').on("click",function(){actionBotones("comunicadoReprePorAlumn","comunicadoRepresentante");});
  $('.reprePorGrado').on("click",function(){actionBotones("comunicadoRepreGrado","comunicadoRepresentante");});
  $('.alumPorAlum').on("click",function(){actionBotones("comuAlumPorAlum","comunicadoAlumno");});
  $('.alumPorGrado').on("click",function(){actionBotones("comuAlumPorGrado","comunicadoAlumno");});

 ///////////////////////////// Botones Atras //////////////////////////////

  $('#atrasGL1 > #atras,#atrasGL1 > #at ').on("click",function(){actionBotones("listadoPrincipal","comunicadoRepresentante");});
  $('#atrasGL2 > #atras,#atrasGL2 > #at').on("click",function(){actionBotones("comunicadoRepresentante","comunicadoReprePorAlumn");});
  $('#atrasGL3 > #atras,#atrasGL3 > #at').on("click",function(){actionBotones("comunicadoRepresentante","comunicadoRepreGrado");});
  $('#atrasGL4 > #atras,#atrasGL4 > #at').on("click",function(){actionBotones("listadoPrincipal","comunicadoAlumno");});
  $('#atrasGL5 > #atras,#atrasGL5 > #at').on("click",function(){actionBotones("comunicadoAlumno","comuAlumPorAlum");});
  $('#atrasGL6 > #atras,#atrasGL6 > #at').on("click",function(){actionBotones("comunicadoAlumno","comuAlumPorGrado");});
  //////////////////////////// Fin Botones Atras //////////////////////
} 

function resetear()
{
	$('input[type=text]').val("");
	/*$("#tipoUsuarioIngresar1 option[value=1]").attr("selected","true");
	
	$(".tablaDocenteIngresar2").css("display","none");
	$(".tablaAlumnoIngresar2").css("display","none");
	$(".tablaRepresentanteIngresar2").css("display","none");*/

}

function actionBotones(mostrar,ocultar)
{
	//resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}



/*

<div id="atrasGL1" class="atras2 atr centrar">
	<a id="atras"></a>
	<a id="at">Atrás</a>
</div>

id="buttonDocEC"

				*/