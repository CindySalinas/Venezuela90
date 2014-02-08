$(document).on("ready", empezar);

function empezar(){
   var noti = $('#noticias');
  var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarNoticias.php?jsoncallback=?";
 $.getJSON(url).done(function(data){
      $.each(data,function(i,item){
         noti.append('<div class="contenidoNoticias"><h4 class="alert alert-success"><a id="'+item.idNoticia+'">'+item.tituloNoticia+'</a></h4> <figure><img width="70" src="../Noticias/'+item.imagenNoticia+'"></figure><p>'+item.noticia+'</p></div>');
      })
  });
} 
