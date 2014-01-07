$(document).on("ready", inicio);

function inicio(){
	//alert("hola");
  cons_estudio();
  cons_conducta();
  cons_inscripcion();
  cons_retiro();
  cons();
  $('#cons').on('change',showForm);
  $('form #cons_1').on('click',imprirFormulario);
  $('#editar').on('click',editarForm);

  //tabs 
  $('.center-button #cambiar').on("click",changeTab);
}    
// Variables  de las constancias
    var nombre = getQueryVariable('nombre');
    var cedula = getQueryVariable('cedula');
    var year   = getQueryVariable('year');
    var conducta = getQueryVariable('conducta');
    var motivo = getQueryVariable('motivo');

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
//rellena constancia de estudio
function cons_estudio(){
    $('.cons_estudio').append("&nbsp; &nbsp; &nbsp; Quien suscribe Directora Academica de la <b>U.E. “Venezuela 90”, lic. Noris Chiquito,</b> Cedula de Indentidad <b>No. V-3.092.155</b>, por medio de la presente hace constar que el(a) alumno(a):<u><b class='up'>"+ nombre + "</b></u> Cedula de Identidad No. <u>V-<b>"+cedula+"</b></u>, cursa en nuestra institución el <b>"+year+" Año de Educiacion Media General</b> durante el año escolar: <b>2012-2013</b>");
}

//rellena constancia de conducta
function cons_conducta(){
    var conducta = getQueryVariable('conducta');
    $('.cons_conducta').append("&nbsp; &nbsp; &nbsp; Quien suscribe Directora Academica de la <b>U.E. “Venezuela 90”, lic. Noris Chiquito,</b> Cedula de Indentidad <b>No. V-3.092.155</b>, por medio de la presente hace constar que el(a) alumno(a):<u><b class='up'>"+ nombre + "</b></u> Cedula de Identidad No. <u>V-<b>"+cedula+"</b></u>, <b> curso el "+year+" Año de Educiacion Media General</b> en nuestra institución durante el año escolar: <b>2012-2013</b> demostrando durante su permanencia en el misma una conducta: ''<u><b class='up'>"+conducta+"</b></u>''");
}
//rellena constancia de inscripcion
function cons_inscripcion(){
    $('.cons_inscripcion').append("&nbsp; &nbsp; &nbsp; Quien suscribe Directora Academica de la <b>U.E. “Venezuela 90”, lic. Noris Chiquito,</b> Cedula de Indentidad <b>No. V-3.092.155</b>, por medio de la presente hace constar que el(a) alumno(a):<u><b class='up'>"+ nombre + "</b></u> Cedula de Identidad No. <u>V-<b>"+cedula+"</b></u> fue inscrito(a) para cursar el <b>"+year+" Año de Educiacion Media General</b> durante el año escolar: <b>2013-2014</b>");
}
//rellena constancia de retiro
function cons_retiro(){
    $('.cons_retiro').append("&nbsp; &nbsp; &nbsp; Quien suscribe Directora Academica de la <b>U.E. “Venezuela 90”, lic. Noris Chiquito,</b> Cedula de Indentidad <b>No. V-3.092.155</b>, por medio de la presente hace constar que : <u><b class='up'>"+ nombre + "</b></u> Cedula de Identidad No. <u>V-<b>"+cedula+"</b></u> curso el SEMESTRE 11-12 SEMESTRE de  Educación Media, durante el año escolar 2011-2012 en nuestra institución, siendo RETIRADO(A) a solicitud de su Representante.<br> <br> <u><b>Motivo:</u>"+' '+motivo+"</b>");
}
//rellena constancia Tramitacion de titulo
function cons(){
    $('.cons').append("&nbsp; &nbsp; &nbsp; Quien suscribe, Jede de Control de Estudio y Evaluacion de la <b class='up'>unidad educativa ''Venezuela 90''</b>, hace constar por medio del presente que el(la) Ciudadano(a) <b class='up'><u>"+nombre+"</u></b>. Portador(a) de la C.I: <u>V-<b>"+cedula+"</b></u>. Curso en este plantel el __________ Semestre, de Educación Media General Mencion:  <b class='up'><u> ciencias</u></b>.");
}

//Formulario.
function showForm(){
    var tipo = $('#cons option:selected').val();
     $('#framesImp').remove();
    if(tipo == "cons_conducta" ){
      $('#DatosAlumnos').css("display", "block");
      $('#conducta').css("display", "inline-table");
      $('#motivo').css("display", "none");
    }
    else if(tipo == "cons_estudios" || tipo== "cons_inscripcion" || tipo== "cons"){
      $('#DatosAlumnos').css("display", "block");
      $('#motivo').css("display", "none");
      $('#conducta').css("display", "none");
     
    }
    else if(tipo == "cons_retiro"){
        $('#DatosAlumnos').css("display", "block");
         $('#motivo').css("display", "inline-table");
      $('#conducta').css("display", "none")
   
    }
    else
      $('#DatosAlumnos').css("display", "none");
}


function imprirFormulario(){
      var url= $('form').serialize();
      var tipo = $('#cons option:selected').val();
      var panel = $('#panelImpresion');
      var datosA = $('#DatosAlumnos');
     panel.append('<iframe id="framesImp"src="../Constancias/'+tipo+'.html?'+url+' scrolling="no" "></iframe>');
     // panel.append('<iframe id="framesImp"src="../Constancias/cons.html?'+url+' scrolling="no" "></iframe>');
       datosA.hide();
       $('#editar').show();

}
function editarForm(){
    $('#editar').hide();
    $('#framesImp').remove();
    $('#DatosAlumnos').show();
}

////////////////////////////// Tabs de formulario de inscripcion /////////////////////////////
function changeTab(data){
  var num = data.currentTarget.name;
  $('#tabControl li:eq('+num+') a').tab('show') 
}

function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = [8,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }