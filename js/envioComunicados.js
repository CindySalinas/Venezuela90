
$(document).on("ready", empezar);


function empezar(){


  $('#paraXAlumno').on("click",function(){comprobarCedAlumno("AlumnoPadre",'inps',"inputParaXalumno");$('.correoSa').remove()});
  $('#paraXAlumno2').on("click",function(){comprobarCedAlumno2("esconder2",'inps3',"inputParaXalumno2");$('.correoSa2').remove()});


  $('#selectGrado1').on("change",function(){gradoEstudiantes("selectGrado1")});
  $('#selectGrado2').on("change",function(){gradoEstudiantes2("selectGrado2")});
  $('#enviarComunicado1').on("click",function(){
    enviarMensaje("correoSa","textoComunicado1");
  });
  $('#enviarComunicado2').on("click",function(){
    enviarMensaje("correoGra","textoComunicado2");
  });
  $('#enviarComunicado3').on("click",function(){
    enviarMensaje("correoSa2","textoComunicado3");
  });
  $('#enviarComunicado4').on("click",function(){
    enviarMensaje("correoGra2","textoComunicado4");
  });
  $('.comuRepre').on("click",function(){actionBotones("comunicadoRepresentante","listadoPrincipal");});
  $('.comuAlumn').on("click",function(){actionBotones("comunicadoAlumno","listadoPrincipal");});
  $('.reprePorAlumno').on("click",function(){actionBotones("comunicadoReprePorAlumn","comunicadoRepresentante");});
  $('.reprePorGrado').on("click",function(){actionBotones("comunicadoRepreGrado","comunicadoRepresentante");});
  $('.alumPorAlum').on("click",function(){actionBotones("comuAlumPorAlum","comunicadoAlumno");});
  $('.alumPorGrado').on("click",function(){actionBotones("comuAlumPorGrado","comunicadoAlumno");});

 ///////////////////////////// Botones Atras //////////////////////////////

  $('#atrasGL1 > #atras,#atrasGL1 > #at ').on("click",function(){actionBotones("listadoPrincipal","comunicadoRepresentante");});
  $('#atrasGL2 > #atras,#atrasGL2 > #at').on("click",function(){actionBotones("comunicadoRepresentante","comunicadoReprePorAlumn"); resetear();});
  $('#atrasGL3 > #atras,#atrasGL3 > #at').on("click",function(){actionBotones("comunicadoRepresentante","comunicadoRepreGrado");resetear();});
  $('#atrasGL4 > #atras,#atrasGL4 > #at').on("click",function(){actionBotones("listadoPrincipal","comunicadoAlumno");resetear();});
  $('#atrasGL5 > #atras,#atrasGL5 > #at').on("click",function(){actionBotones("comunicadoAlumno","comuAlumPorAlum");resetear();});
  $('#atrasGL6 > #atras,#atrasGL6 > #at').on("click",function(){actionBotones("comunicadoAlumno","comuAlumPorGrado");resetear();});
  //////////////////////////// Fin Botones Atras //////////////////////
} 

function resetear()
{
	$('input[type=text]').val("");
	$('texarea').val("");
  $('.correoSa,.correoGra,#noAlum,.alert,.correoSa2,.correoGra2').remove();
  $('#AlumnoPadre,#primerDivGH,#textoComunicadoss2,#esconder2,#esconder3').hide();
}

function actionBotones(mostrar,ocultar)
{
	//resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function comprobarCedAlumno(campo,email,cedu){
  var ced = $('#'+cedu).val();
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
  $.getJSON(url,{cedula:ced}).done(function(data){
      if(data.num !=0){
         $('#'+campo).show("slide");
         cargarEmailsPorCedula(ced,email);
        // cargarEmailsAlumno(ced,email);
      }
      else{
        $('#'+cedu).attr("Placeholder","Cedula Invalida").val("");
        $('#'+campo).hide("slow");
      }
  })
}

function comprobarCedAlumno2(campo,email,cedu){
  var ced = $('#'+cedu).val();
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
  $.getJSON(url,{cedula:ced}).done(function(data){
      if(data.num !=0){
         $('#'+campo).show("slide");
        cargarEmailsAlumno(ced,email);
      }
      else{
        $('#'+cedu).attr("Placeholder","Cedula Invalida").val("");
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

function cargarEmailsPorGrado(grado,campo,mostrar){
 
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarEmailsGradoRepre.php?jsoncallback=?";
  $.getJSON(url,{year:grado}).done(function(data){
    if(data.num != 0){
      $.each(data,function(i,item){
        $('#'+campo).append('<input type="text" Placeholder="Para: " class="correoGra" name="'+item.idAlum+'" id="emailGrado1" value="'+item.mailG+'" disabled>');
        $('#'+mostrar).show("slide");
      });
    }
    else{
      $('#pruebaError').append("<div id='noAlum' class='alert alert-danger'>No hay Alumnos para este grado</div>");
       $('#'+mostrar).hide("slow");
    }
  });
}
function cargarEmailsPorGrado2(grado,campo,mostrar){
 
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarEmailsGrado.php?jsoncallback=?";
  $.getJSON(url,{year:grado}).done(function(data){
    if(data.num != 0){
      $.each(data,function(i,item){
        $('#'+campo).append('<input type="text" Placeholder="Para: " class="correoGra2" name="'+item.idAlum+'" id="emailGrado1" value="'+item.mailG+'" disabled>');
        $('#'+mostrar).show("slide");
      });
    }
    else{
      $('#pruebaError2').append("<div id='noAlum2' class='alert alert-danger'>No hay Alumnos para este grado</div>");
       $('#'+mostrar).hide("slow");
    }
  });
}
function cargarEmailsAlumno(ced,campo){
   var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarEmailsAlum.php?jsoncallback=?";
  var correos;
  $.getJSON(url,{cedula:ced}).done(function(data){
    $.each(data,function(i,item){
      $('#'+campo).append('<input type="text" Placeholder="Para: " class="correoSa2" name="'+item.idRepre+'" id="emailPadresAlumnos" value="'+item.mailP+'" disabled>');
    })
  })
}

function enviarMensaje(campo,msjss){
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarMensaje2.php?jsoncallback=?";
    var cedulaRemitente = $.cookie("cedulaProf");
    var destino = new Array();
    $('.'+campo).each(function(i,item){
       destino.push(item.value);
    });
    var tema = "Comunicado"
    var todoMensaje = $('#'+msjss).val();
 
    var fec = fecha();
    var hor = hora();

  $.getJSON(url,{userCedula:cedulaRemitente,destCorreo:destino,asunto:tema,destMensaje:todoMensaje, fecha:fec,hora:hor}).done(function(data){
      //resetear()
      $("#msj").append("<div class='alert  alert-success centrar'>"+data.mensaje+"</div>");
      $("#msj2").append("<div class='alert  alert-success centrar'>"+data.mensaje+"</div>"); 
      $("#msj3").append("<div class='alert  alert-success centrar'>"+data.mensaje+"</div>"); 
      $("#msj4").append("<div class='alert  alert-success centrar'>"+data.mensaje+"</div>"); 
      $("#textoComunicado1,#textoComunicado2,#textoComunicado3,#textoComunicado4").val("");
    });
}


function gradoEstudiantes(lista){
  $('.correoGra,#noAlum').remove();
  var valor = $('#'+lista+' option:selected').val();
  cargarEmailsPorGrado(valor,"inps2","textoComunicadoss2");
  
  //alert(valor);
}
function gradoEstudiantes2(lista){
  $('.correoGra2,#noAlum2').remove();
  var valor = $('#'+lista+' option:selected').val();
  cargarEmailsPorGrado2(valor,"inps4","esconder3");
  //alert(valor);
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
