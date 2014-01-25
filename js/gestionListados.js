$(document).on("ready",empezar);

function empezar(){
	botonera1();
	$('#listTipo1').on("change",primeraLista);
	$('#listTipo2').on("change",segundaLista);
	$('#aceptarNuevaLista').on("click",mostrarNuevoIngresoLista);
}

function mostrarOcultar(mostrar,ocultar){
	$('.'+mostrar).show("slide");
	$('.'+ocultar).hide("slow");
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

function primeraLista(){
	var lista = $('#listTipo1 option:selected').val();
	if(lista == 1){
		mostrarOcultar("cedAlumno","listaMat1");
	}else{
		mostrarOcultar('','cedAlumno');
	}
}
function segundaLista(){
	var lista = $('#listTipo2 option:selected').val();
	if(lista == 1){
		mostrarOcultar("listado1","listado2");
	}else
	if(lista == 2){
		mostrarOcultar("listado2","listado1");
	}else
	if(lista == 3){
		mostrarOcultar("listado1,.listado2","");
	}
	else{
		mostrarOcultar('','listado1,.listado2');
	}
}
function mostrarNuevoIngresoLista(){
	mostrarOcultar('hideLista','nuevaLista');
}