$(document).on("ready", empezar);

function empezar(){
	$("#submit").on("click", logged);
}    

function logged(){
	 // Realizar la petición
    var user1 = $('#user_login').val();
    var pass1 = $('#user_pass').val();
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/iniciarSesion.php?jsoncallback=?";
    
    $.getJSON(url,{ user:user1,pass:pass1}).done(function(datos) {
        
        alert(datos.mensaje)
        if(datos.validacion > 0 && datos.T== 1){       
            /// Si La Validacion Es Correcta, Muestra La Página Principal de Administracion        
           window.location='Administracion/Intranet.html';          
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
  
    });
    return false;
}