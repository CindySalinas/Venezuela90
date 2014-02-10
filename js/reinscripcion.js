$(document).on("ready", empezar);

function empezar(){
 
$('#iconoconsultar').on("click",function(){actionBotones("mostrarCed","consultarCed,.titulo")});
$('#atr > #atras, #atr > #at').on("click",function(){actionBotones("consultarCed,.titulo","mostrarCed")});
//$('#sigw > #siguiente,#sigw > #sit').on("click",comprobarCedula);
$('#siguiente,#sit').prop("disabled",true).addClass("disabled");
$('#cedulaAl').on("change",comprobarCedula);
cargarDatos();
$('#cambiarDatos').on("click",reinscribir);
} 



function actionBotones(mostrar,ocultar)
{
   $('.'+mostrar).show("slide");
   $('.'+ocultar).hide("slow");  
}

function comprobarCedula(){
   var ced= $('#cedulaAl').val();
   var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
    if(ced != " " || ced !=""){
      $.getJSON(url,{cedula:ced}).done(function(data){
         if(data.num !=0){
               $('#sig').show("slide");
         }else{
            $('#sig').hide("slow");
            $('#cedulaAl').val("").attr("placeholder","Cedula No Valida");
         }
      });
   }else{
            $('#cedulaAl').css({"border":"2px solid rgb(242,20,20)"}   );
            $('#cedulaAl').val("").attr("placeholder","Cedula No Valida");
   }

   $('#sig > #siguiente,#sig > #sit').on("click",function(){
         window.location = "inscripcionReins.html?cedu="+ced
   });
}
function cargarDatos(){
   var cc = getQueryVariable("cedu");
   llenarDatosAlumno(cc);
   llenarDatosPradres();
   console.log(cc);
}
//Optioene los datos del URL por el metodo GET    
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

function llenarDatosAlumno(ced){
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarDatosAlumno.php?jsoncallback=?";
    $.getJSON(url,{cedula:ced}).done(function(data){
      if(data.num !=0){
          $.each(data,function(i,item){
              $('#appl').val(item.apll);
              $('#noms').val(item.nom);
              $('#fecha').val(item.fechaNac);
              $('#dondeNa').val(item.dondeNa);
              $('#entida').val(item.entida);
              $('#cedAlumno').val(item.ced);
              $('#direcc').val(item.direc);
              $('#telf').val(item.telf);
              $('#mailAlumno').val(item.mails);
              $('#genero option[value='+item.gener+']').attr("selected",true);
              $('#yearss option[value='+item.idGrado+']').attr("selected",true);
              $('#yearEscolar option[value='+item.idYearEs+']').attr("selected",true);
              $('#plantel').val(item.plantels);
              $('#matPen option[value='+item.matPend+']').attr("selected",true);
              $('#actividad option[value='+item.idActi+']').attr("selected",true);
              $('#religion option[value='+item.idReli+']').attr("selected",true);
              $('#aler').val(item.alergia);
              $('#enf').val(item.enferm);
              $('#almm').val(item.idEs);
        });
      }
      else{
        console.log("error");
      }
      
    })
}

function llenarDatosPradres(){
   var cc = getQueryVariable("cedu");
   var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarDatosPadres.php?jsoncallback=?";
   $.getJSON(url,{cedula:cc}).done(function(data){
      if(data.num !=0){
          $.each(data,function(i,item){
            console.log(item.pApll);
              $('#apPadre').val(item.pApll);
              $('#nomPadre').val(item.pNom);
              $('#cedPadre').val(item.pCed);
              $('#empresaPadre').val(item.pTra);
              $('#telfPadre').val(item.ptelf);
              $('#mailPadre').val(item.pMail);
              $('#profPadre option[value='+item.pProf+']').attr("selected",true);

              $('#apMadre').val(item.mApll);
              $('#nomMadre').val(item.mNom);
              $('#cedMadre').val(item.mCed);
              $('#empresaMadre').val(item.mTra);
              $('#teflMadre').val(item.mtelf);
              $('#mailMadre').val(item.mMail);
              $('#profMadre option[value='+item.mProf+']').attr("selected",true);
             
              $('#apEmer').val(item.eApll);
              $('#nomEmer').val(item.eNom);
              $('#cedEmer').val(item.eCed);
              $('#telfEmer').val(item.etelf);

              $('#alPa').val(item.idRepre);
              $('#alMa').val(item.idRepre2);
              $('#alEm').val(item.idRepre3);
        });
      }
      else{
        console.log("error");
      }
      
    })
}
function reinscribir(){
   var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/reinscribir.php?jsoncallback=?";
    $('.alert').remove();
    var datos = $('form').serialize();
    $.getJSON(url, datos).done(function(respuestaServer){
      if(respuestaServer.num != 0){
        $('form').hide();
        $('#tabControl').hide();
        $('#some').append("<br><br><div class='alert alert-success'>"+respuestaServer.mensaje+"</div>");
        $('#some2').show();
      }
      else
        $('#some').append("<br><br><div class='alert alert-danger'>"+respuestaServer.mensaje+"</div>");
      $('#some2').show();
  });
}
/*
function inscripcion(){
  // Obtiene automaticamente los valores del form
  $('.alert').remove();
  var datos = $('form').serialize();
  console.log(datos);
  //alert(datos)
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/inscribir.php?jsoncallback=?";
  $.getJSON(url, datos).done(function(respuestaServer){
      if(respuestaServer.num != 0){
        $('form').hide();
        $('#tabControl').hide();
        $('#some').append("<br><br><div class='alert alert-success'>"+respuestaServer.mensaje+"</div>");
        $('#some2').show();

      }
      else
        $('#some').append("<br><br><div class='alert alert-danger'>"+respuestaServer.mensaje+"</div>");
      $('#some2').show();
  });
  
} */