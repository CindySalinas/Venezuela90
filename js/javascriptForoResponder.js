$(document).on("ready", inicio);

var idForo, nomDelTemaRes;

function inicio()
{
  obtenerValores();
  $("#inputResForo").val("RE: "+unescape(nomDelTemaRes));  
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