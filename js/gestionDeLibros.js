$(document).on("ready",iniciar);

function iniciar(){
registroLibros();
nuevoPrestamo();
$('#at,#atras').on("click",atras);
$('#botonBuscarLibro').on("click",fichaTecnica);
$('#ingresarLibro').on("click",ingresarLibro);
$('#fichaTecnia').on("click",'.de ,.ad',eliminarLibro);
$('.otroBlock').on("click",'.de ,.ad',eliminarPrestamo);
$('.tipoB').on("change",tipoBusqueda);
$('#buscEl').on("change",eliminarBusqueda);
$('#botonIngresarLibro').on("click",insertarPrestamo);
//$('#formuOpcion').on("Change",mostrarFlecha);
//$('.eliminar').on("click",mostrarEliminar)
//$('#buscarPrestamo').on("click",buscarPrestamo)
}

//$('#at,#atras,.atrasLibro');
function atras(data){
	 var num = data.currentTarget.name;
  	 $("article[name='"+num+"']").hide('slide');
}


//muestra la fichaTecnica()
function busqueda(){
	$('#botonBuscarLibro').click(
			$('.consult').hide("slide"),
			$('.delete').show("slide")
			);
}

//Eliminar Libros por id
function eliminarLibro(data){
	var num = data.currentTarget.name;
  	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/eliminarLibro.php?jsoncallback=?";
  	var añadir = $('#fichaTecnia #msj');
  	añadir.hide();
  	$.getJSON(url,{val1:num}).done(function(data){
  		$('.tecLibros, #numCant,.prestamo,.tec').remove();
  		añadir.append("<div class='alert alert-success'>"+data.mensaje+"</div>");
  	});	
}



//recibe los parametros de busqueda
//Realiza la consulta al servidor
function fichaTecnica(){
	var val1 = $("select[name=buscarLibro] option:selected").val().toLowerCase();
	var val2 = $("input[name=buscar]").val();
	var añadir = $('#fichaTecnia #msj');
	if(val1 == "año"){
		val1 = "year";
	}
	var url = "http://127.0.0.1:8080/JsonVenezuela90/libros.php?jsoncallback=?";
	var ficha = $('#fichaTecnia');
	$('.tecLibros, #numCant,.prestamo,.tec').remove();
	$('br + br').remove();
	busqueda();
	$.getJSON(url, {val1:val1,val2:val2}).done(function(data){
		if(data.num != 0){
			$.each(data, function(i,item){
				if(añadir.is(":visible")){
					añadir.hide();
				}
					ficha.append("<div class='tecLibros'><article class='tec'><div class='titulosLibros'>Nombre: </div><div>"+item.nom+"</div></article><article class='tec'><div class='titulosLibros'>Autor: </div><div>"+item.aut+"</div></article><article class='tec'><div class='titulosLibros'>Materia: </div><div>"+item.mat+"</div></article><article class='tec'><div class='titulosLibros'>Año: </div><div>"+item.year+"</div></article><article class='tec'><div class='titulosLibros'>Editorial: </div><div>"+item.edit+"</div></article><article class='tec'><div class='titulosLibros'>Edición: </div><div>"+item.edic+"</div></article></div><br><article class='tec'><div class='titulosLibros otro'>Cantidad De Libros: </div><div id='numCant'>"+item.cant+"</div></article><div class='prestamo'><div id='ladIz'><a id='icon1' class='ad'></a><a id='iz' >Prestar Libro</a><br></div><div><br><a id='icon2' name='"+item.idLibro+"' class='ad'></a><a name='"+item.idLibro+"' class='de' >Eliminar</a><br></div><br>");
					})
			}
		else
			añadir.append("<div class='alert alert-danger'>"+data.mensaje+"</div>");
	});
}
// Ingreso de Libros a la BD
function ingresarLibro(){
	 var nom = $('#nom').val();
	 var aut = $('#aut').val();
	 var mat = $('#mat').val();
	 var year = $('#year').val();
	 var edit = $('#edit').val();
	 var edic = $('#edic').val();
	 var cant = $('#cant').val();
	 var añadir = $("#msj");
 	 var url = "http://127.0.0.1:8080/JsonVenezuela90/ingresarLibro.php?jsoncallback=?";

 	 $.getJSON(url,{
 	 		val1:nom,
 	 		val2:aut,
 	 		val3:mat,
 	 		val4:year,
 	 		val5:edit,
 	 		val6:edic,
 	 		val7:cant
 	 }).done(function(data){
 	 	$('#formulario').hide("slide");
 	 	$('#at,#atras').hide();
 	 	$('#ingresarLibro').hide();
 	 	añadir.append("<div class='alert alert-success'>"+data.mensaje+"</div>");
 	 });
}

// Funcionalidad del boton "registrar libros"
function registroLibros(){
	// boton registro de libros
	var mostrarOcultar = $('#iconoconsultar').click(function(event){
		$('.modificar').css({display:"none"});
		if($('.consult').is(":visible") || $('.delete').is(":visible")|| $('#formularioIngresarLibro').is(":visible") || $('.hideLista, #at,#atras').is(":visible")){
			$('.consult').hide("slide");
			$('.delete').hide("slide");
			$('#formularioIngresarLibro').hide("slide");	
			$('.hideLista, #at,#atras').hide("slide");
			$('.hideLista2, #at,#atras').hide("slide");
			$('.consult2').hide("slide");
			$('#fichaTecnica').hide("slide");
			$('.delete2').hide("slide");
		}
		else
			$('.hideLista, #at,#atras').show("slide");
	});
	//boton ingresar- registro libros
	var ingresar =  $('.ingresar').click(function(){
		
		if($('.consult').is(":visible") || $('.delete').is(":visible") || $('#msj').is(":visible")){
			$('.consult').hide("slide");
			$('.delete').hide("slide");
			$('#formulario').show();
			$('#ingresarLibro').css("display","inline-block");
			$('#msj').hide();
			$('#formularioIngresarLibro').fadeToggle();	
		//	$('.tecLibros, #numCant,.prestamo,.tec, #msj').hide();
			//$('#fichaTecnia #msj').hide();	
		}
		else
			$('#formularioIngresarLibro').fadeToggle();
	});
	//boton consultar- registro libros
	var consultar = $('.consultar').click(function(){
		if($('#formularioIngresarLibro').is(":visible") || $('.delete').is(":visible")){
			$('.delete').hide("slide");
			$('#formularioIngresarLibro').hide("slide");	
			//$('.tecLibros, #numCant,.prestamo,.tec, #msj').hide();
			//$('#fichaTecnia #msj').hide();		
			$('.consult').fadeToggle();
		}
		else
			$('.consult').fadeToggle();
	});
	//boton eliminar- registro libros
	var eliminar = $('.eliminar').click(function(){
		if($('.consult').is(":visible") || $('#formularioIngresarLibro').is(":visible") || $('.delete').is(":visible")){
			$('.consult').hide("slide");
			$('#formularioIngresarLibro').hide("slide");
			//$('.tecLibros, #numCant,.prestamo,.tec, #msj').
			//$('#fichaTecnia #msj').empty();
			$('.delete').fadeToggle();
			mostrarEliminar();
		}
		else
			{
				//$('.tecLibros, #numCant,.prestamo,.tec').remove();
				mostrarEliminar();
				$('.delete').fadeToggle();	
		}
		
	});
/* ------------------------------------Prestamos de Libro------------------------------------------*/
	var mostrarPrestamo = $('#iconomodificar').click(function(event){
		$('.modificar2').css({display:"none"});
		$('.eliminar2').css({display:"none"});
		if($('.consult2').is(":visible") || $('.delete2').is(":visible")|| $('#fichaTecnica').is(":visible") || $('.hideLista2, #at,#atras').is(":visible")){
			$('.consult').hide("slide");
			$('.consult2').hide("slide");
			$('.delete').hide("slide");
			$('.delete2').hide("slide");
			$('#fichaTecnica').hide("slide");	
			$('#formularioIngresarLibro').hide("slide");	
			$('.hideLista, #at,#atras').hide("slide");
			$('.hideLista2, #at,#atras').hide("slide");
			$('.formulario3 #formPres').hide("slide");
		}
		else
			$('.hideLista2, #at,#atras').show("slide");

	});
	var ingresarPrestamo =  $('.ingresar2').click(function(){
		if($('.consult2').is(":visible") || $('.delete2').is(":visible")){
			$('.consult2').hide("slide");
			$('.delete2').hide("slide");
			$('#formulario3').hide();
			//$('#msj').hide();
			$('#fichaTecnica').fadeToggle();	
		}
		else
			$('#fichaTecnica').fadeToggle();
	});
	var consultarPrestamo = $('.consultar2').click(function(){
		if($('#fichaTecnica').is(":visible") || $('.delete2').is(":visible")){
			$('.delete2').hide("slide");
			$('#fichaTecnica').hide("slide");	
			$('#fichaTecnia').hide("slide");	
			$('.consult2').show("slide");

		}
		else
			$('.consult2').show("slide");
	});
	/*
	var eliminarPrestamo = $('.eliminar2').click(function(){
		if($('.consult2').is(":visible") || $('#formularioIngresarLibro').is(":visible")){
			$('.consult2').hide("slide");
			$('#fichaTecnica').hide("slide");
			//$('#fichaTecnia #msj').remove();	
			$('.delete2').fadeToggle();
		}
		else
			$('.delete2').fadeToggle();
	});
*/
}
// Muestra todos los libros 
function mostrarEliminar(){
	var url = "http://127.0.0.1:8080/JsonVenezuela90/eliminarVisible.php?jsoncallback=?";
	var ficha = $('#fichaTecnia');
	$('.tecLibros, #numCant,.prestamo,.tec').remove();
	$('br + br').remove();
	$('#fichaTecnia #msj').empty();	
	$.getJSON(url).done(function(data){
		if(data.num != 0){
			$.each(data, function(i,item){
					ficha.append("<div class='tecLibros'><article class='tec'><div class='titulosLibros'>Nombre: </div><div>"+item.nom+"</div></article><article class='tec'><div class='titulosLibros'>Autor: </div><div>"+item.aut+"</div></article><article class='tec'><div class='titulosLibros'>Materia: </div><div>"+item.mat+"</div></article><article class='tec'><div class='titulosLibros'>Año: </div><div>"+item.year+"</div></article><article class='tec'><div class='titulosLibros'>Editorial: </div><div>"+item.edit+"</div></article><article class='tec'><div class='titulosLibros'>Edición: </div><div>"+item.edic+"</div></article></div><br><article class='tec'><div class='titulosLibros otro'>Cantidad De Libros: </div><div id='numCant'>"+item.cant+"</div></article><div class='prestamo'><div id='ladIz'><a id='icon1' class='ad'></a><a id='iz' >Prestar Libro</a><br></div><div><br><a id='icon2' name='"+item.idLibro+"' class='ad'></a><a name='"+item.idLibro+"' class='de' >Eliminar</a><br></div><br>");
					})
			}
		else
			añadir.append("<div class='alert alert-danger'>"+data.mensaje+"</div>");
	});
}

/*-------------------------------Seccion Prestamo de Libros-----------------------------------*/

function nuevoPrestamo(){
	var flecha1 = $('#ingresa ,#linkIngresa');
	var flecha2 = $('#ingresare, #linkIngresare');
	
	flecha1.click(function(){
		$('#formuOpcion').toggle("slide");

		$('#formuOpcion').on("change", function(){
			if($('#formuOpcion').val()==""){
				$('.ocultaLista').hide("slide");
				$('#selectForm').hide("slide");
				$('#formPres').hide("slide");
			}else{
				$('.alert').remove();
				$('#selectForm option').remove();
				$('.ocultaLista').show("slide");
				//$('#selectForm').show("slide");
				datosPrestamo();
				$('#sig').show();
				
			}
		});
		$('#sig').click(function(){	
				$('#msjPres').remove();
				datosPrestamo2();
		});
			
	});

	flecha2.click(function(){
		$('#selectForm').toggle("slide");

	})
}
// LLena el select con resultado de la busqueda
function datosPrestamo(){
	var lista= $('#selectForm');
	var val1 ="nombre";
	var val2 = $('#formuOpcion').val();
	var url = "http://127.0.0.1:8080/JsonVenezuela90/libros.php?jsoncallback=?";
		$.getJSON(url, {val1:val1,val2:val2}).done(function(data){
		if(data.num != 0){
			$.each(data, function(i,item){
				lista.append("<option id='"+item.idLibro+"'>"+item.nom+"</option>");
				$('#sig').show();

			})
		}
		else{
			$('.ocultaLista').append("<div class='alert alert-danger'>"+data.mensaje+"</div>")
			lista.hide();
			$('#sig').hide();
		}
	});
	lista.show();
}

// se añaden los datos a los input  con los datos de la busqueda
function datosPrestamo2(){
	var lista= $('#selectForm');
	var url = "http://127.0.0.1:8080/JsonVenezuela90/libros.php?jsoncallback=?";
	var val1="id";
	var val2=  $('#selectForm option:selected').attr("id");
	$('.alert').remove();
	$.getJSON(url,{val1:val1,val2:val2}).done(function(data){
		if(data.num !=0){
			$.each(data,function(i,item){
				if(item.cant == 0){
					$('.ocultaLista').append("<div class='alert alert-danger'>No esta disponible</div>");
				}
				else {
					$('.alert .alert-danger').remove();
					$('#formPres #nom2').val(item.nom);
					$('#formPres #mat2').val(item.mat);
					$('#formPres #aut2').val(item.aut);
					$('#formPres #year2').val(item.year);
					$('#formPres').show("slide");
					$('#botonIngresarLibro').show();
					$('#formPres #nom2').attr("name",item.idLibro);
					$('#formPres #secE').attr("name",item.cant);
				}
			})
		}
		//else
			//$('.ocultaLista').append("<div class='alert alert-danger'>"+data.mensaje+"</div>");
	});
}
// Muestra los input para la busqueda de prestamos.
var val0;
var valtt = $('#cedPres').val();
var valttt= $('#datePres').val();
function tipoBusqueda(){
	var tipo = $('.tipoB option:selected').val();
	if(tipo == "Cedula"){
		$('#b3').hide();
		$('#b2').show("slide");
		$('#buscarPrestamo').show();
		$('.prestamo2').remove();
  		$('.otroTec').remove();
		$('#buscarPrestamo').click(function(){

				buscarPrestamo("cedula",$('#cedPres').val());
		});
	}
	else
		if(tipo == "Fecha"){
			$('#b2').hide();
			$('#b3').show("slide");
			$('#buscarPrestamo').show();
			//$('.otroTec').remove();
			$('.prestamo2 ,.otroTec').remove();

			$('#buscarPrestamo').click(function(){
				$('.prestamo2 ,.otroTec').remove();
				buscarPrestamo("dateP",$('#datePres').val());
			});
		}
	else
		if(tipo == "Todos"){
			$('.consult2 .alert .alert-danger').remove();
			$('#b2').show("slide");
			$('#b3').show("slide");
			$('#buscarPrestamo').show();
		}
	else{
		$('#b2').hide();
		$('#b3').hide();
		$('#buscarPrestamo').hide();
		$('.prestamo2 ,.otroTec').remove();
	}
	
}

function eliminarBusqueda(){
	var tipo = $('#buscEl option:selected').attr("name");
	
	if(tipo == "ced"){
		$('.buscYear').hide();
		$('.buscNom').hide();
		$('.buscCel').show("slide");
	}
	else
		if(tipo == "nomL"){
			$('.buscYear').hide();
			$('.buscCel').hide();
			$('.buscNom').show("slide");
		}
	else
		if(tipo == "fecha"){
			$('.buscYear').hide();
			$('.buscNom').hide();
			$('.buscYear').show("slide");
		}
}


function insertarPrestamo(){
	var idP = $('#formPres #nom2').attr("name");
	var cant = $('#formPres #secE').attr("name");
	var cedE = $('#formPres #cedE').val();
	var nomE = $('#formPres #nomE').val();
	var gra = $('#formPres #graE').val();
	var sec = $('#formPres #secE').val();
	var nom2 = $('#formPres #nom2').val();
	var fecha1 = $('#formPres #fechaS').val();
	var fecha2 = $('#formPres #fechaE').val();
	var msjj = $('#msjPres');
	var a1 = fecha1.replace("-","");
	var a2 = fecha2.replace("-","");

	$('#msjPres').remove();
	var nCan = cant - 1;
	var url = "http://127.0.0.1:8080/JsonVenezuela90/prestarLibro.php?jsoncallback=?";
	if(a2 > a1){
	 $.getJSON(url,{
 	 		val1:cedE,
 	 		id_libro:idP,
 	 		fechaS:fecha1,
 	 		fechaE:fecha2,
 	 		val5:nomE,
 	 		val6:gra,
 	 		val7:nCan
 	 }).done(function(data){
 	 		if(data.con !=1){
 	 		//	msjj.append("<div class='alert alert-danger'> No se pudo Prestar el Libro </div>");
 	 			$('#formPres').hide("slide");
 	 			$('#botonIngresarLibro').hide();
 	 		}
 	 		else{
 	 			//msjj.append("<div class='alert alert-success'>"+data.mensaje+"</div>");
 	 			alert(data.mensaje);
 	 			$('#formPres').hide("slide");
 	 			$('#botonIngresarLibro').hide();
 	 		}
 	 });
	}
	else{
		alert("Seleccione una Fecha Valida");
	}
}
//Buscar PRestamo de Libro
function buscarPrestamo(tipo,dato){
	var otroBlocK = $('.otroBlock');
  	var url = "http://127.0.0.1:8080/JsonVenezuela90/buscarPrestamoLibro.php?jsoncallback=?";
  	$('.prestamo2, .otroTec').remove();
 	$.getJSON(url,{val0:tipo,val1:dato}).done(function(data){
			$.each(data, function(i,item){
				otroBlocK.append("<div class='otroTec'><article class='tec'><div class='titulosLibros'>Cedula De Identidad: </div><div>"+item.cedPres+"</div></article><article class='tec'><div class='titulosLibros'>Nombre Del Estudiante: </div><div>"+item.nomPres+"</div></article><article class='tec'><div class='titulosLibros'>Grado: </div><div>"+item.graPres+"</div></article><article class='tec'><div class='titulosLibros'>Sección: </div><div>"+"manuel"+"</div></article><article class='tec'><div class='titulosLibros'>Nombre Del Libro: </div><div>"+item.nom+"</div></article><article class='tec'><div class='titulosLibros'>Autor: </div><div>"+item.aut+"</div></article><article class='tec'><div class='titulosLibros'>Materia: </div><div>"+item.mat+"</div></article><article class='tec'><div class='titulosLibros'>Año: </div><div>"+item.year+"</div></article><article class='tec'><div class='titulosLibros'>Editorial: </div><div>"+item.edit+"</div></article>	<article class='tec'><div class='titulosLibros' id='canti' name="+item.cant+">Edición: </div><div>"+item.edic+"</div></article></div><div class='prestamo2'><div><a id='icon2'  class='ad' name="+item.idPres+"></a><a id='de' name="+item.idPres+">Eliminar</a></div></div>");
				canti = item.cant;
				$('.otroTec').show("slide");
			//	 $('#fichaTecnia').show("slide");
				$('.prestamo2').show();
				otroBlocK.show("slide");
			});
	});
}
//Eliminar Prestamo de Libro
function eliminarPrestamo(data){
	var num = data.currentTarget.name;
	var canti = $('#canti').attr("name");
  	var url = "http://127.0.0.1:8080/JsonVenezuela90/eliminarPrestamo.php?jsoncallback=?";
  	var añadir = $('.otroBlock #msj3');
  	alert(canti);
  /*	añadir.hide();
  	$.getJSON(url,{val1:num}).done(function(data){
  		$('.prestamo2,.otroTec').remove();
  		//añadir.append("<div class='alert alert-success'>"+data.mensaje+"</div>");
  		alert("Prestamo Eliminado");
  	});	*/

}