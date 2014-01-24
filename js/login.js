$(document).on("ready", empezar);

function empezar(){
	$("#submit").on("click", logged);
    escucharEnter();
}    
function prueba(){
  alert(document.cookie);
}
function logged(){
	 // Realizar la petición
    var user1 = $('#user_login').val();
    var pass1 = $('#user_pass').val();
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/iniciarSesion.php?jsoncallback=?";
    
    $.getJSON(url,{ user:user1,pass:pass1}).done(function(datos) {

    if(datos.validacion > 0 && datos.T== 1){       
            /// Si La Validacion Es Correcta, Muestra La Página Principal de Administracion 
          window.location='Administracion/intranetAdministracion.html';

        }
        else
             if(datos.validacion > 0 && datos.T== 2){       
            /// Si La Validacion Es Correcta, Muestra La Página Principal de Profesores        
            location.href='Docente/IntranetDocente.html';          
        }
        else
          if(datos.validacion > 0 && datos.T== 3)
        {   
           /// Si La Validacion Es Correcta, Muestra La Página Principal de Alumnos 
           location.href='Alumno/IntranetAlumno.html';             
        }

     if(datos.validacion == 0)
         {
             $('#user_login, #user_pass').css({"border":"2px solid rgb(242,20,20)"});
             $('#user_login').val("").attr("placeholder","usuario incorrector");
             $('#user_pass').val("").attr("placeholder","password incorrector");
         }
    });
  //  return false;
}

// Cookies
        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";

            var fixedName = '<%= Request["formName"] %>';
            name = fixedName + name;

            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }

function escucharEnter(){
    $(document).keypress(function(e) {
    if(e.which == 13) {
       // alert('You pressed enter!');
       logged();
    }
});
}