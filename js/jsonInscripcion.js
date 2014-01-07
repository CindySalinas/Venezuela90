$(document).on("ready", aaaaa);

function aaaaa(){
	$('form #enviarDatos').on("click",inscripcion);
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
		    cI : { 
		    	minlength: 6,
		    	number : true,
		    	required: true
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
		    	minlength: 4,
		    	number: true,
		    	required: true	
		    },
		    plantel:{
		    	required: true
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
		    	minlength: 5,
		    	required: true
		    },
		    alergy:{
		    	minlength:5,
		    	required: true
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
		    	minlength: 10,
		    	number : true,
		    	required: true
		    },
		    profesion:{
		    	minlength: 5,
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
		    	minlength: 10,
		    	number : true,
		    	required: true
		    },
		    profesionMother:{
		    	minlength: 5,
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
		    	minlength: 10,
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
		}
	});
	$('#enviarDatos').attr('disabled', true);
}

function inscripcion(){
	// Obtiene automaticamente los valores del form
	var datos = $('form').serialize();
	//alert(datos)
 	var url = "http://127.0.0.1:8080/JsonVenezuela90/inscribir.php?jsoncallback=?";
 		$.getJSON(url, datos).done(function(respuestaServer){
			$('form').hide();
			$('#tabControl').hide();
			$('#some').append("<div class='alert alert-success'>"+respuestaServer.mensaje+"</div");
	});
 	
	
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