$(document).on("ready",empezar);

function empezar(){
	botonera1();
	disableds();
	$('#listTipo1').on("change",primeraLista);
	$('#listTipo2').on("change",segundaLista);
	$('#listTipo4').on("change",cuartaLista);
	$('#aceptarNuevaLista').on("click",crearNuevaLista);
	$('#ingresarAlumnoCed').on("click",agregarAlumnoCed);
	$('#cedAInsertar').on("change",comprobarCedula);
	$('#nuevaListaNom').on("change",comprobarLista);
	$('#ingresarAlumnoLista2').on("click",agregarAlumoCed2);
	$('#eliminarLista').on("click",eliminarList);
	ValidNum();
	llenarLista();
	
}
// ------------------------ Variables Globales ------------------//
	var opcionesP1, opcionesP2, opcionesP3,opcionesP4, nuevaListaNombre, lastID;

// --------------------- FIN Variables Globales ------------------//

function agregarAlumnoCed(){
	var ced = $('#cedAInsertar').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarAlumnoLista.php?jsoncallback=?";
	$.getJSON(url,{id: opcionesP1, cedula : ced }).done(function(data){
		alert("alumno Agregado");
		resetear();
	});
}

function botonera1(){
	$('.ingresarListado').on("click",function(){
		mostrarOcultar("ocultaLista,.titulo1","tituloPrincipal");
	});
	// Seleccionar Lista
	$('.selectList').on("click",function(){
		mostrarOcultar("listaMat1","ocultaLista");
	});
	// Nueva Lista
	$('.nuevaList').on("click",function(){
		mostrarOcultar("nuevaLista","ocultaLista");
	});
	// Nueva Lista - Por Alumno
	$('.ingresarPorAl').on("click",function(){
		mostrarOcultar('ingresarAlumnoLista','hideLista');
	});
	// Nueva Lista - Por Grado
	$('.ingresarPorGra').on("click",function(){
		mostrarOcultar('ingresarGradoLista','hideLista');
	});
	// Nueva Lista - Por AlumnoGrado
	$('.ingresarPorGraAl').on("click",function(){
		mostrarOcultar('gradoSeccionLista','hideLista');
	});

	//Consultar
	$('.consultarListado').on("click",function(){
		mostrarOcultar("buscarLista,.titulo2","tituloPrincipal");
	});

	//Eliminar
	$('.eliminarListado').on("click",function(){
		mostrarOcultar("listado3","tituloPrincipal");
	});
	// Botones de Atras
	// Primer boton Atras
	$('#atrasGL1 > #atras').on("click",function(){mostrarOcultar("tituloPrincipal","ocultaLista,.titulo1");});
	$('#atrasGL1 > #at').on("click",function(){mostrarOcultar("tituloPrincipal","ocultaLista,.titulo1");});

	// Ingreso - Primer Boton Atras 
	$('#atrasGL2 > #atras').on("click",function(){mostrarOcultar("ocultaLista","listaMat1");});
	$('#atrasGL2 > #at').on("click",function(){mostrarOcultar("ocultaLista","listaMat1");});


	// Ingreso - Segundo Boton Atras
	$('#atrasGL2 > #atras').on("click",function(){mostrarOcultar("ocultaLista","listaMat1");});
	$('#atrasGL2 > #at').on("click",function(){mostrarOcultar("ocultaLista","listaMat1");});

	//Ingreso - Tercer Boton Atras
	$('#atrasGL3 > #atras').on("click",function(){mostrarOcultar("listaMat1","cedAlumno");});
	$('#atrasGL3 > #at').on("click",function(){mostrarOcultar("listaMat1","cedAlumno");});

	//Ingreso - Cuarto Boton Atras
	$('#atrasGL6 > #atras').on("click",function(){mostrarOcultar("nuevaLista","hideLista");});
	$('#atrasGL6 > #at').on("click",function(){mostrarOcultar("nuevaLista","hideLista");});

	// Ingreso - Boton Atras- Nueva lista
	$('#atrasGL5 > #atras').on("click",function(){mostrarOcultar("ocultaLista","nuevaLista");});
	$('#atrasGL5 > #at').on("click",function(){mostrarOcultar("ocultaLista","nuevaLista");});

	// Ingreso - Neva lista - Atras Alumno
	$('#atrasGL7 > #atras').on("click",function(){mostrarOcultar("hideLista","ingresarAlumnoLista");});
	$('#atrasGL7 > #at').on("click",function(){mostrarOcultar("hideLista","ingresarAlumnoLista");});

	// Ingreso - Neva lista - Atras Grado
	$('#atrasGL8 > #atras').on("click",function(){mostrarOcultar("hideLista","ingresarGradoLista");});
	$('#atrasGL8 > #at').on("click",function(){mostrarOcultar("hideLista","ingresarGradoLista");});

	// Ingreso - Neva lista - Atras AlumnoGrado
	$('#atrasGL9 > #atras').on("click",function(){mostrarOcultar("hideLista","gradoSeccionLista");});
	$('#atrasGL9 > #at').on("click",function(){mostrarOcultar("hideLista","gradoSeccionLista");});

	// Consultar - Atras 
	$('#atrasGL10 > #atras').on("click",function(){mostrarOcultar("tituloPrincipal","ocultaLista,.titulo2,.buscarLista,.listado1,.listado2");});
	$('#atrasGL10 > #at').on("click",function(){mostrarOcultar("tituloPrincipal","ocultaLista,.titulo2,.buscarLista,.listado1,.listado2");});

	// Eliminar - Atras
	$('#atrasGL11 > #atras').on("click",function(){mostrarOcultar("tituloPrincipal","listado3");});
	$('#atrasGL11 > #at').on("click",function(){mostrarOcultar("tituloPrincipal","listado3");});
}

function comprobarCedula(ced){
	ced = $('#cedAInsertar').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarCedula.php?jsoncallback=?";
	$.getJSON(url, {cedula:ced}).done(function(data){
		if(data.num == 1){
			$('#ingresarAlumnoCed,#ingresarAlumnoLista2,#genrarLista').prop("disabled",false);
			$('#cedAInsertar,#cedAlumno2').css({"border":"2px solid rgb(212, 208, 186)"});
		}
		else{
			$('#ingresarAlumnoCed').prop("disabled",true).addClass("disabled");
			$('#cedAInsertar,#cedAlumno2').css({"border":"2px solid rgb(242,20,20)"});
			$('#cedAInsertar,#cedAlumno2').val("").attr("placeholder","Cedula Invalida");
		}
	});

}
function comprobarLista(nom){
	nom = $('#nuevaListaNom').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/comprobarLista.php?jsoncallback=?";
	$.getJSON(url,{nomLista:nom}).done(function(data){

		if(data.num == 0){
			$('#aceptarNuevaLista,#listaTipo3').prop("disabled",false);
			$('#nuevaListaNom').css({"border":"2px solid rgb(212, 208, 186)"});
		}
		else{
			$('#aceptarNuevaLista').prop("disabled",true).addClass("disabled");
			$('#listaTipo3').prop("disabled",true).addClass("disabled");
			$('#nuevaListaNom').css({"border":"2px solid rgb(242,20,20)"});
			$('#nuevaListaNom').val("").attr("placeholder","Esta lista ya existe");
		}
	})
}
function consultarLista(id){
	var sex,n=1;
	var list = $('#listados2 tbody');
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/consultarListas.php?jsoncallback=?";
	$('#del > tr').remove();
	$.getJSON(url,{idList:id}).done(function(data){
		$.each(data,function(i,item){
			if(item.sexo == 1){
				sex = "F";
			}
			else{
				sex = "M";
			}
			list.append("<tr><td value="+item.idLista+">"+n+"</td><td>"+item.nombApellido+"</td><td>"+sex+"</td><td><a href="+'#'+">Eliminar</a></td></tr>");
			n++;
			mostrarOcultar('listado2','a');
			//console.log("nombre:"+item.nombApellido+"\n sexo: "+ sex +" \n id: "+item.idLista );
		});
	});
}
function disableds(){
	$('#ingresarAlumnoCed').prop("disabled",true).addClass("disabled");
	$('#aceptarNuevaLista').prop("disabled",true).addClass("disabled");
	$('#listaTipo3').prop("disabled",true).addClass("disabled");
	//$('#eliminarLista').prop("disabled",true).addClass("disabled");
	$('#ingresarAlumnoLista2,#genrarLista').prop("disabled",true).addClass("disabled");
}
function eliminarList(){
	//var eliminar = $('#list')
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarLista.php?jsoncallback=?";
	$.getJSON(url,{idL: opcionesP4}).done(function(data){
		alert(data.mensaje);
		//var listaaas = $('#listTipo1 option:selected,#listTipo2 option:selected,#listTipo4 option:selected').remove();
		var listaaas = $('#listTipo1 option, #listTipo2 option, #listTipo4 option').remove();
		llenarLista();
	});
}
function crearNuevaLista(){
	var lista = $('#listaTipo3 option:selected').val();
    nuevaListaNombre = $('#nuevaListaNom').val();
    var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/crearLista.php?jsoncallback=?";
    comprobarLista(nuevaListaNombre);
    if(nuevaListaNombre == "" || lista ==0){
    	$('#aceptarNuevaLista,#listaTipo3').prop("disabled",true).addClass("disabled");
		$('#nuevaListaNom').css({"border":"2px solid rgb(242,20,20)"});
		$('#nuevaListaNom').val("").attr("placeholder","Inserte Nombre/Lista");
    }
    else{
		$.getJSON(url,{idLista: lista, nomLista: nuevaListaNombre}).done(function(data){
			mostrarOcultar('hideLista','nuevaLista');
			var last = data.ultimaID;
			lastID = last;
			resetear();
		});
    }
}

function agregarAlumoCed2(){
	var ced = $('#cedAlumno2').val();
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/ingresarAlumnoLista.php?jsoncallback=?";
	comprobarCedula(ced);
	$.getJSON(url,{id: lastID, cedula : ced }).done(function(data){
		alert("alumno Agregado");
		resetear();
	});
}

function llenarLista(){
	var listaas = $('#listTipo1');
	var listaaas = $('#listTipo2,#listTipo4');
	listaas.append("<option value='0'>---------------------</option> ");
	listaaas.append("<option value='0'>---------------------</option> ");
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/cargarListaListados.php?jsoncallback=?";
	$.getJSON(url).done(function(data){
		$.each(data,function(i,item){
			listaas.append("<option value='"+item.idLista+"' name='"+item.tipoLista+"'>"+item.nomLista+"</option>");
			listaaas.append("<option value='"+item.idLista+"' name='"+item.tipoLista+"'>"+item.nomLista+"</option>");
		});
	});
	listaaas.append("<option value='T'>Todas</option> ");
}

function mostrarOcultar(mostrar,ocultar){
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");
}
function primeraLista(){
	var lista = $('#listTipo1 option:selected').val();
	if(lista !=0){
		mostrarOcultar("cedAlumno","listaMat1");
		opcionesP1 = lista;
	}else{
		mostrarOcultar('','cedAlumno');
	}
}
function resetear(){
	$('input[type=text]').val("");
}
function segundaLista(){
	var lista = $('#listTipo2 option:selected').val();
	var lista2 = $('#listTipo2 option:selected').attr("name");
	if(lista2 == 1){
		mostrarOcultar("listado1","listado2");
		
		consultarLista(lista);
	}else
	if(lista2 == 2){
		mostrarOcultar("listado2","listado1");
		consultarLista(lista);
	}else
	if(lista2 == 3){
		mostrarOcultar("listado2","listado1");
		
		consultarLista(lista);
	}else
	if(lista == "T"){
		mostrarOcultar("listado1,.listado2","a");
	}
	else{
		mostrarOcultar('a','listado1,.listado2');
	}
}

// tipo lista
function tercerlaLista(){
	 var lista = $('#listaTipo3 option:selected').val();
	 var  nom = $('#nuevaListaNom').val();
	 if(lista !=0 && nom!= ""){
	 	  opcionesP3 = lista;
	 	 // mostrarOcultar('hideLista','nuevaLista');
	 }
	 else{
	 	alert("Seleccione una Opcion Valida/ Inserte Nombre de lista");
	 }
	
}

function cuartaLista(){
	var lista = $('#listTipo4 option:selected').val();
	if(lista !=0 && lista == "T2"){
		console.log("todos 2");
		opcionesP4 = lista;
		//$('#eliminarLista').prop("disabled",false);
	}
	else
		if(lista !=0){
			opcionesP4 = lista;
		//	$('#eliminarLista').prop("disabled",false);
		}
	else{
		alert("Seleccione una opcion Valida")
	}
}
function ValidNum() {
	$("#cedAInsertar,#cedAlumno2").attr("onkeypress", "return ValidNum(event);")
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
    }
}