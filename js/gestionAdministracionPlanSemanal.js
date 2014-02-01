$(document).on("ready", inicio);

function inicio()
{
	var idMateriaDocente=getQueryVariable("materiaDocente");
	planSemanal(idMateriaDocente);
}

function planSemanal(materiaDocente) 
{
	var url = "http://127.0.0.1:8080/Venezuela90/JsonVenezuela90/buscarPlanSemanal.php?jsoncallback=?";
	$.getJSON(url,{id:materiaDocente
	}).done(function(data){
		{
			$.each(data, function(i,item){
				$("#divAlerta").css("display","none");
				$("#noticias").append("<div class='planSem centrar'><div class='disIn disInUno'><figure><img width=200 src='../images/ministerio.png'></figure></div><div class='disIn disMe'><div class='bold'>REPÚBLICA BOLIVARIANA DE VENEZUELA</div><div class='bold'>MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN</div><div class='bold'>UNIDAD EDUCATIVA 'VENEZUELA 90'</div><div class='bold'>VALENCIA-ESTADO CARABOBO</div><div class='bold'>Telf. (0241) 8595806</div></div><div class='disIn disInDos'><figure><img width=150 src='../images/logo.png'></figure></div><div class='borderDivPS centrar'>PLANES SEMANALES</div><table><tr><td class='right marRig'>SEMANA N:</td><td class='left marLef'>"+item.numeroSemana+"</td><td class='right marRig'>FECHA:</td><td class='left marLef'>DESDE: "+item.fechaInicio+" HASTA: "+item.fechaFin+"</td><td class='right marRig'>SESIONES:</td><td class='left marLef'>"+item.sesiones+"</td></tr><tr><td class='right marRig'>AREA:</td><td class='left marLef'>"+item.nombreMateria+"</td><td class='right marRig'>DOCENTE:</td><td class='left marLef'>"+item.nombreDocente+" "+item.apellidoDocente+"</td><td class='right marRig'>N° ALUMNOS:</td><td class='left marLef'>"+item.numeroAlumnos+"</td></tr></table><table border=1 class='tablaCarCon'><tr class='heLin'><td rowspan=3 class='marObEs fontBold'><p>PRIMERA SESIÓN</p><p>FECHA: "+item.fechaInicio+"</p></td><td class='marTecEClass'>TEMA</td><td class='marTecEClass'>INICIO</td><td class='marTecEClass'>DESARROLLO</td><td class='marTecEClass'>CIERRE</td></tr><tr class='heightTr'><td><span>"+item.primerTema+"</span></td><td><span>"+item.primerInicio+"</span></td><td><span>"+item.primerDesarrollo+"</span></td><td><span>"+item.primerCierre+"</span></td></tr><tr></tr><tr class='heightTr'><td rowspan=3 class='fontBold'><p>SEGUNDA SESIÓN:</p><p>FECHA: "+item.fechaFin+"</p></td><td><span>"+item.segundoTema+"</span></td><td><span>"+item.segundoInicio+"</span></td><td><span>"+item.segundoDesarrollo+"</span></td><td><span>"+item.segundoCierre+"</span></td></tr><tr></tr><tr></tr><tr><td colspan=5 class='ppad'><label class='bold marRig'>OBSERVACIÓN: </label>"+item.observaciones+"</td></tr></table><ul id='listaGestion'><li><a id='bloque2' onclick='window.print(); void 0'></a><a class='textoAbajo' onclick='window.print(); void 0'>Imprimir</a></li></ul></div>");
			});
		}
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
