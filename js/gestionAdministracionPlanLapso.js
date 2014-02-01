$(document).on("ready", inicio);

function inicio()
{
	var idMateriaDocente=getQueryVariable("materiaDocente");
	planLapso(idMateriaDocente);
}

function planLapso(materiaDocente) 
{var num=0;
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarPlanLapso.php?jsoncallback=?";
	$.getJSON(url,{id:materiaDocente
	}).done(function(data){
		
			$.each(data, function(i,item){
				num++;
				$("#divAlerta").css("display","none");
				$("#noticias").append("<div class='planSem centrar'><div class='disIn disInUno'><figure><img width=200 src='../images/ministerio.png'>	</figure></div><div class='disIn disMe'><div class='bold'>REPÚBLICA BOLIVARIANA DE VENEZUELA</div><div class='bold'>MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN</div><div class='bold'>UNIDAD EDUCATIVA 'VENEZUELA 90'</div><div class='bold'>VALENCIA-ESTADO CARABOBO</div><div class='bold'>Telf. (0241) 8595806</div></div><div class='disIn disInDos'><figure><img width=150 src='../images/logo.png'>	</figure></div><table><tr><td class='right marRig'>DOCENTE:</td><td class='left marLef'>"+item.nombreDocente+" "+item.apellidoDocente+"</td><td class='right marRig'>ASIGNATURA:</td><td class='left marLef'>"+item.nombreMateria+"</td><td class='right marRig'>AÑO:</td><td class='left marLef'>"+item.grado+"</td></tr><tr><td class='right marRig'>MENCIÓN:</td><td class='left marLef'>"+item.mencion+"</td><td class='right marRig'>LAPSO:</td><td class='left marLef'>"+item.lapso+"</td><td class='right marRig'>AÑO ESCOLAR:</td><td class='left marLef'>"+item.yearEscolar+"</td></tr></table><table border=1 class='tablaCarCon'><thead><tr class='heLin'><td class='marObEs'>OBJETIVOS ESPECIFICOS</td><td class='marCon'>CONTENIDO</td><td class='marEsMe'>ESTRATEGIAS METODOLÓGICAS</td><td class='marRe'>RECURSOS</td><td class='marTecE'>TECNICAS DE EVALUACIÓN</td><td class='marPon'>PONDERACIÓN</td><td class='marPon'>FECHA</td></tr></thead><tbody class='"+num+"'>");	

				var url2 = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarPlanLapsoActividades.php?jsoncallback=?";
				$.getJSON(url2,{id:item.idplanificacion, lapso:item.idlapso, numero:num
				}).done(function(data){
					$.each(data, function(i,item){
						$("."+item.numerito).append("<tr><td>"+item.objetivos+"</td><td>"+item.contenido+"</td><td>"+item.estrategia+"</td><td>"+item.recurso+"</td><td>"+item.tecnicaEvaluacion+"</td><td>"+item.ponderacion+"</td><td>"+item.fecha+"</td></tr>");
					});
				});
				$("#noticias").append("</tbody></table><ul id='listaGestion'><li><a id='bloque2' onclick='window.print(); void 0'></a><a class='textoAbajo' onclick='window.print(); void 0'>Imprimir</a></li></ul></div>");
		});
	});	
	
}

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