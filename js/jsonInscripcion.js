$(document).on("ready", aaaaa);
var si;
function aaaaa(){
	$('#some2').hide();
	$('form #enviarDatos').on("click",inscripcion);
	$('#restAtras').on("click",rst);
	$('#fechaIng').val(GetTodayDate);
	 //tabs 
  	$('.center-button #cambiar').on("click",changeTab);
	$('form').validate({
		errorElement: "span",
		rules: {
			//Alumno
		    lastName: {
		     	minlength: 2,
		        required: true,

		    },
		    firsName: {
		    	minlength: 3,
		        required: true
		    },
		    birthDay: {
		        required: true,
		        date: true
		    },
		    whereBorn: {
		        minlength: 5,
		        required: true
		    },
		    entity: {
		    	minlength : 3,
		    	required: true
		    },
		    genero:{
		    	required:true
		    },
		    matP:
		    {
		    	required: true
		    },
		    cI : { 
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		    email:{
		    	required: true,
		    	email:true
		    },
		     emailPadre:{
		    	required: true,
		    	email:true
		    },
		     emailMadre:{
		    	required: true,
		    	email:true
		    },
		    addres:{
		    	minlength: 10,
		    	required: true
		    },
		    phone1:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    phone2:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    year: {
		    	required: true	
		    },
		    plantel:{
		    	
		    },
		    matP:{
		    	required : true
		    },
		    actividad:{
		    	required: true
		    },
		    religion:{
		    	required: true
		    },
		    sicking:{
		    	minlength: 5
		    	
		    },
		    alergy:{
		    	minlength:5
		    	
		    },
		    //Padre
		   lastNameFather: {
		     	minlength: 2,
		        required: true
		    },
		    firsNameFather: {
		    	minlength: 3,
		        required: true
		    },
		    cIfather : { 
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		    profesion:{
		    	required: true
		    },
		    whereWork:{
		    	minlength: 5,
		    	required: true
		    },
		    phone3:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    phone4:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    // Madre
		    lastNameMother: {
		     	minlength: 2,
		        required: true
		    },
		    firsNameMother: {
		    	minlength: 3,
		        required: true
		    },
		    cIMother : { 
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		    profesionMother:{
		    	required: true
		    },
		    whereWorkMother:{
		    	minlength: 5,
		    	required: true
		    },
		    phone5:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    phone6:{
		    	minlength: 6,
		    	number: true,
		    	required: true
		    },
		    //Emergencia
		     lastNameE: {
		     	minlength: 2,
		        required: true
		    },
		    firsNameE: {
		    	minlength: 3,
		        required: true
		    },
		    cIE : { 
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		    phone7:{
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		    phone8:{
		    	minlength: 6,
		    	number : true,
		    	required: true
		    },
		},
		highlight: function(element) {
			$(element).closest('.movit')
			.removeClass('success').addClass('error');
			$('#enviarDatos').attr('disabled', true);
			$('#cambiar').attr('disabled',true);
			$('#tabControl').hide();
			si = 0;
		},
		success: function(element) {
			element
			.text('OK!').addClass('help-inline')
			.closest('.movit')
			.removeClass('error').addClass('success');
			$('#enviarDatos').attr('disabled', false);
			$('#cambiar').attr('disabled',false);
			$('#tabControl').attr('disabled',false);
			$('#tabControl').show();
			si=1;
		}
	});
	$('#enviarDatos').attr('disabled', true);
}

function inscripcion(){
	// Obtiene automaticamente los valores del form
	$('.alert').remove();
	var datos = $('form').serialize();
	console.log(datos);
	//alert(datos)
 	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/inscribir.php?jsoncallback=?";
 	$.getJSON(url, datos).done(function(respuestaServer){
 			if(respuestaServer.num != 0){
 				$('form').hide();
				$('#tabControl').hide();
				$('#some').append("<br><br><div class='alert alert-success'>"+respuestaServer.mensaje+"</div>");
				$('#some2').show();

 			}
			else
				$('#some').append("<br><br><div class='alert alert-danger'>"+respuestaServer.mensaje+"</div>");
			$('#some2').show();
	});
	
}	
function validar(){
	var inputs = $('input[type=text]');
	var texts = $('textarea').val();

	inputs.each(function(i,item){
		if(item.value = ""){
			item.closest('.movit').removeClass('success').addClass('error');
		}
		else{
			inputs.text('OK!').addClass('help-inline').closest('.movit').removeClass('error').addClass('success');
		}
	});

}
function changeTab(data){
  var num = data.currentTarget.name;
  if(si== 1){
  	$('#tabControl').show();
  	$('#tabControl li:eq('+num+') a').tab('show') 
  	$("form").submit(function(e){
    return false;
});
  }
  else{
  	$('#tabControl').hide();
  }
  //$('#tabControl li:eq('+num+') a').tab('show') 
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
    /*Funcion para obtener la fecha actual*/
function GetTodayDate() {
   var tdate = new Date();
   var dd = tdate.getDate(); //yields day
   var MM = tdate.getMonth(); //yields month
   var yyyy = tdate.getFullYear(); //yields year
  // var xxx = dd + "-" +( MM+1) + "-" + yyyy;
  if(dd < 10 || MM < 10){
  	 var xxx = yyyy+ "-" +0+(MM+1)+ "-" +0+ dd;
  }else{
  	var xxx = yyyy+ "-" +(MM+1)+ "-" + dd;
  }
  
   return xxx;
}
jQuery.fn.reset = function () {
  $(this).each (function() { this.reset(); });
}
function rst(){
	$('form').reset();
	$('form').show("slide");
	$('#some2').hide();
	$('#tabControl li:eq(0) a').tab('show') 
	$('.alert').remove();
}
