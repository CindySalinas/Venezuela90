$(document).on("ready", empezar);

var idTipoUsuario;

function empezar(){
   
   $('.linkAtrasConsultar1').on("click",function(){actionBotones('menuPrincipal','consultar1');});

   $('.linkAtrasConsultar2').on("click",function(){actionBotones('consultar1','consultar2');});

   $('.linkAtrasIngresar1').on("click",function(){actionBotones('menuPrincipal','ingresar1');});

   $('.linkAtrasIngresar2').on("click",function(){actionBotones('ingresar1','ingresar2');});

   $('.linkAtrasEliminar1').on("click",function(){actionBotones('menuPrincipal','eliminar1');});

   $('.linkIngresar').on("click",function(){actionBotones('ingresar1','menuPrincipal');});

   $('.linkConsultar').on("click",function(){actionBotones('consultar1','menuPrincipal');});

   $('.linkEliminar').on("click",function(){actionBotones('eliminar1','menuPrincipal');});

   $('#bontonConsultar1').on("click", consultar1);

   $('#aceptarIngresar1').on("click", ingresar1);

   $('#botonIngresar2').on("click", ingresar2);

   $('#botonEliminar1').on("click", eliminar1);
   $('#inputCedulaConsultar1').on("change",function(){
   		comprobarCedula($(this).val())
   });
$('#cedulaEliminar1').on("change",function(){
		comprobarCedula($(this).val())
	});
   ValidNum();
} 

function resetear()
{
	$('input[type=text]').val("");
	$("#tipoUsuarioIngresar1 option[value=1]").attr("selected","true");
	
	$(".tablaDocenteIngresar2").css("display","none");
	$(".tablaAlumnoIngresar2").css("display","none");
	$(".tablaRepresentanteIngresar2").css("display","none");

	$('.alert').remove();

}

function actionBotones(mostrar,ocultar)
{
	resetear();
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");	
}

function consultar1() 
{
	var cedula = $("#inputCedulaConsultar1").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarDatosCedula.php?jsoncallback=?";
	var rolss;
	$.getJSON(url,{cedula:cedula}).done(function(data){
		if(data != 0){
			$.each(data,function(i,item){
					if(item.rol == 1){
						rolss = "Administrador";
					}
					else if(item.rol == 2){
						rolss = "Docente";
					}
					else{
						rolss = "Estudiante";
					}
					$("#nombreConsultar2").text(item.nom);
					$("#apellidoConsultar2").text(item.apll);
					$("#cedulaConsultar2").text(item.ced);
					$("#emailConsultar2").text(item.mail);
					$("#generoConsultar2").text(item.gen);
					$("#edoCivilConsultar2").text(item.edoC);
					$("#telefonoConsultar2").text(item.celP);
					$("#direccionConsultar2").text(item.direc);	
					$("#rolConsultar2").text(rolss);
					//$("#").val(item.);
				actionBotones("consultar2","consultar1");
			});
		}
		else{
			alert("no hay usuario");
			actionBotones("consultar1","consultar2");
		}
	});
	
}

function ingresar1() 
{
	idTipoUsuario = $("#tipoUsuarioIngresar1 option:selected").val();
	actionBotones("ingresar2","ingresar1");
	if(idTipoUsuario=="2")
	{
		actionBotones("tablaDocenteIngresar2","");
	}
	else if(idTipoUsuario=="3")
	{
		actionBotones("tablaAlumnoIngresar2","");
	}
	else if(idTipoUsuario=="4")
	{
		actionBotones("tablaRepresentanteIngresar2","");
	}	
}

function ingresar2() 
{
	//alert(idTipoUsuario);
	$('.alert').remove();
	crearUsuario();
	resetear();
}

function eliminar1 () 
{
	var cedula = $("#cedulaEliminar1").val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarUsuario.php?jsoncallback=?";
	$.getJSON(url,{cedula:cedula}).done(function(data){
		resetear();
		alert("Usuario Eliminado");
	})
}
function crearUsuario(){
	//$('.alert').remove();
	var nom = $('#nombreIngresar2').val();
	var apll = $('#apellidoIngresar2').val();
	var ced = $('#cedulaIngresar2').val();
	var mail = $('#emailIngresar2').val();
	var gen = $('#generoIngresar2 option:selected').val();
	var edoC = $('#edoCivilIngresar2 option:selected').val();
	var tel = $('#telefonoIngresar2').val();
	var dir = $('#direccionIngresar2').val();
	var nacional = $('#nacionalidadIngresar2').val();
	var fech = $('#fechaNacDocenteIngresar2').val();
	var lug = $('#lugarNacDocenteIngresar2').val();

	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/crearUsuario.php?jsoncallback=?";
	if(nom != "" && apll != "" && ced != "" && mail != "" && tel!= "" && dir!= "" ){
	if(idTipoUsuario == 1){
			$.getJSON(url,{
			nombre:nom,
			apellido: apll,
			cedula: ced,
			email : mail,
			genero: gen,
			edCivil: edoC,
			telf : tel,
			direc: dir,
			idCrear : idTipoUsuario,
			nacion : nacional
		}).done(function(data){
			$('#msj').append("<div class='alert  alert-success'>Usuario Creado Con Exito</div>");
			$('#msj').show();
		});
	}
	else if(idTipoUsuario == 2){
		$.getJSON(url,{
		nombre:nom,
		apellido: apll,
		cedula: ced,
		email : mail,
		genero: gen,
		edCivil: edoC,
		telf : tel,
		direc: dir,
		fechNa: fech,
		lugar : lug,
		idCrear : idTipoUsuario,
		nacion : nacional
	}).done(function(data){
		$('#msj').append("<div class='alert  alert-success'>Usuario Creado Con Exito</div>");
		$('#msj').show();
	})
	}
}
else{
	$('#msj').append("<div class='alert  alert-danger'>Inserte Datos</div>");
	$('#msj').show();
}
	
}
function ValidNum() {
	$("#cedulaIngresar2,#cedAlumno2").attr("onkeypress", "return ValidNum(event);")
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
    }
}

function comprobarCedula(ced){
	
	//comprobarCedulaLista(idListaCheck,ced);
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
	var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedulaLista.php?jsoncallback=?";
	$.getJSON(url, {cedula:ced}).done(function(data){
		if(data.num == 1){
			$('#consultar1').prop("disabled",false).removeClass("disabled");
		}
		else{
			$('#consultar1').prop("disabled",true).addClass("disabled");
			//$('#cedAInsertar,#cedAlumno2').css({"border":"2px solid rgb(242,20,20)"});
			$('#inputCedulaConsultar1,#cedulaEliminar1').val("").attr("placeholder","Cedula Invalida");
		}
	});

}