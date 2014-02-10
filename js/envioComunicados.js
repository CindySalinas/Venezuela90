
$(document).on("ready", empezar);


function empezar(){

  $('#inputParaXalumno').on("change",function(){comprobarCedAlumno("AlumnoPadre",'inps')});
  $('#enviarComunicado1').on("click",enviarMensaje);
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
	$('texarea').val("");

}

function actionBotones(mostrar,ocultar)
{
	//resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function comprobarCedAlumno(campo,email){
  var ced = $('#inputParaXalumno').val();
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
  $.getJSON(url,{cedula:ced}).done(function(data){
      if(data.num !=0){
         $('#'+campo).show("slide");
         cargarEmailsPorCedula(ced,email);
      }
      else{
        $('#inputParaXalumno').attr("Placeholder","Cedula Invalida").val("");
        $('#'+campo).hide("slow");
      }
  })
}

function cargarEmailsPorCedula(ced,campo){
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarEmails.php?jsoncallback=?";
  var correos;
  $.getJSON(url,{cedula:ced}).done(function(data){
    $.each(data,function(i,item){
      $('#'+campo).append('<input type="text" Placeholder="Para: " class="correoSa" name="'+item.idRepre+'" id="emailPadresAlumnos" value="'+item.mailP+'" disabled>');
     

    })
  })
}

function enviarMensaje(){
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarMensaje.php?jsoncallback=?";
    var cedulaRemitente = $.cookie("cedulaProf");
    var destino = new Array();
    $('#emailPadresAlumnos').each(function(i,item){
       destino.push(item.value);
    });
    var tema = "Comunicado"
    var todoMensaje = $('#textoComunicado1').text();
    var fec = fecha();
    var hor = hora();
    $.getJSON(url,{
      userCedula:cedulaRemitente,
      destCorreo:destino,
      asunto:tema,
      destMensaje:todoMensaje,
      fecha:fec,
      hora:hor
    }).done(function(data){
      $("#divVerAlert").append("<div class='alert  alert-success'>"+data.mensaje+"</div>");
     // $("#destinatario").val("");
     // $("#asunto").val("");
      $("#textoComunicado1").val("");
    });
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
/*Funcion para obtener la fecha actual*/
function fecha()
{
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

  var f=new Date();
  var fecha;

  fecha = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

  return fecha;
}