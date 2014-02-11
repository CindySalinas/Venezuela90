$(document).on("ready", empezar);

function empezar(){
   var noti = $('#noticias');
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarNoticias.php?jsoncallback=?";
  var img;
 $.getJSON(url).done(function(data){
      $.each(data,function(i,item){
         if(item.imagenNoticia == ""){
               img = "/Archivo/logo.PNG"
         }
         else{
            img = item.imagenNoticia;
         }
         noti.append('<div class="contenidoNoticias"><h4><a id="'+item.idNoticia+'"><b>'+item.tituloNoticia+'</b></a></h4> <figure class="imgNoticia"><img width="70" src="../Noticias/'+img+'"></figure><p>'+item.noticia+'</p><hr></div>');
      })
  });
} 
