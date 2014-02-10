$(document).on("ready", inicio);

var idForo, nomDelTemaRes;

function inicio()
{
  obtenerValores();
  $("#inputResForo").val("RE: "+unescape(nomDelTemaRes));
  $("#enviarResponderForo").on("click",ingresarRespuestaForo); 
}
function otra()
{
  alert("funciona");
}
//Llamas a la funcion que lee la url
function obtenerValores()
{
  idForo=getQueryVariable("foro");
	nomDelTemaRes=getQueryVariable("tema");
}
//Lee las Variables que se mandan por GET
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");

               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function ingresarRespuestaForo()
{
  var nom = $('#inputResForo').val();
  //var men = $('#mensajeFN').val();
  var men = $('.nicEdit-main').html();
  var nomUser = $.cookie("cedulaProf");
  var fec = fecha();
  var hor = hora();
  
  if(nom=="" || nom==" ")
  {
    $("#inputResForo").attr("placeholder", "Ingrese Un Asunto").blur();
    $("#asuntoFn").css("border-color","#b93207");
    $(".alert").hide("slide");
  }
  else if(men=="<br>")
  {
    $(".nicEdit-main").val(",,")
    $("#inputResForo").css("border-color","#ededed");
    $(".nicEdit-main").attr("placeholder", "Ingrese Un Mensaje").blur();
    $(".nicEdit-main").css("border-color","#b93207");
  }
  else
  {
    $("#inputResForo").css("border-color","#ededed");
    $("#textarea1").css("border-color","#ededed");
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarRespuestaForo.php?jsoncallback=?";

    $.getJSON(url,{
      user:nomUser,
      nombre:nom,
      tema:men,
      fecha:fec,
      hora:hor,
      idf:idForo
    }).done(function(data){
      alert("Su respuesta ha sido enviada");
      window.location="viewForos.html?foro="+idForo;
    });
  }
}
/*Funcion para obtener la hora actual*/
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

  var diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");

  var f=new Date();
  var fecha;

  fecha = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

  return fecha;
}