$(document).on("ready", empezar);

function empezar(){
 
$('#iconoconsultar').on("click",function(){actionBotones("mostrarCed","consultarCed,.titulo")});
$('#atr > #atras, #atr > #at').on("click",function(){actionBotones("consultarCed,.titulo","mostrarCed")});
//$('#sigw > #siguiente,#sigw > #sit').on("click",comprobarCedula);
$('#siguiente,#sit').prop("disabled",true).addClass("disabled");
$('#cedulaAl').on("change",comprobarCedula);
cargarDatos();
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