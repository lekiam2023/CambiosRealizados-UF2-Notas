






/*funcione correctamente*/
/*Funcion que controla el bloqueo para que le modal de bienvenida 
      /*Mas adelante jugaremos con la opcion de poner un temporizador */
function modalBienvenida(){
       document.getElementById("modalBienvenida").style.display="block";/*Hace que una vez iniciado la pagina se cargue el modal*/
       document.getElementById("tituloEncabezado").style.animationPlayState="paused";/*Desactiva las animaciones de los elementos seleccionados*/
       document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
       document.documentElement.style.overflow="hidden";/*No permite hacer scroll*/
      }



 

/*Funcion que activa los elementos desactivado anterior mente dicho del modal
de bienvenida, para que se restablesca los elementos de la pagina*/

function cerrarMBB(){
       document.getElementById("modalBienvenida").style.display="none";/*Hace que cuando se acabe el modal vuelva a su estado*/
       document.getElementById("tituloEncabezado").style.animationPlayState="running";/*Hace que las animaciones de los elementos vuelvan a funcionar*/
       document.getElementById("subtituloEncabezado").style.animationPlayState="running";
       document.documentElement.style.overflow="auto";/*Activa el scroll*/
} 
  /*Fin del modal de bienvenida*/






/*Aca comienza el codigo de slideshow automatico  */

 //Varible global que sera el contador de img
 var bgCounter = 0;

 /*Funcion que permite que el fondo del heroImge cambie de imgen por una funcionalidad de tiempo*/
 function heroSlideshow() {

 /*Creamos un array con la lista de imagenes*/
 var listaImgBg = [
        "url('media/HeroImageSuperClean.png')",
        "url('media/HeroImageSuperClean2.jpg')",
        "url('media/HeroImageSuperClean3.jpg')"
      ];

       /*Contador*/
       bgCounter++;

       /*Comprobamos con el condicional si el contador ya es igual a la longitud del
       array que es de 3, si esto se cumple entonces el contador se recetea y vuelve a comenzar 
       el conteo*/
       if(bgCounter == listaImgBg.length){
            bgCounter = 0;

       }

       /*Atacamos a un elemento del CSS que es el que contiene el (backgroundImage), y ponemos de nuestro array el elemento que tenga como indice el valor 
       del contador*/
       document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3))," +listaImgBg[bgCounter];
}
/*Aca finaliza el codigo de slideshow automatico */



/*Comienza el SlideShow con animacion*/
var conterNext = 0;
var conterMain = 0;
function slideShowAnim(){

    /*comenzamos extraer nuestras imagenes en una array*/
    var listImBgAnim = document.getElementsByClassName("fondosHero");

  /*Declaramos dos varibles como contadores*/
       conterNext ++;
       conterMain = conterNext -1;

     /*Comprobamos de que nuestro conterNext no sea igual que nuestro 
     tamaño del array*/
      if( conterNext == listImBgAnim.length){

           /*Si se cumple, entonces no receteamos a 0*/
            conterNext = 0;
      }

      /*Comprobamos de que nuestro conterMain mo sea menor que 0 */
      if(conterMain < 0){

      /*Si esto se cumple, entonces nuestro conterMain sera igual que nuestro array -1, entonces el valor
      de conterMain quedaria en 2*/
            conterMain = listImBgAnim.length -1; 
      }

    /*Crearemos un for para rrecorrer el array de imagenes y decidir que imagen le sera
    asignada la class con el efecto*/

    for (var i = 0; i < listImBgAnim.length; i++){
 
      /*Aca sacamos las imagnes que ya han sido usadas del efecto correspondiente*/
      listImBgAnim[i].classList.remove("nextSlide");
      listImBgAnim[i].classList.remove("mainSlide");
      listImBgAnim[i].classList.remove("hiddenSlide");

      /*Hacemos una comprobacion de que si se cumple esta condicion 
      entonces se aplicara la class con el efecto a numero de indice que corresponda la imagen,
      hacinedo que la imagen correspondiente se vay a la izquierda del todo*/
      if(i == conterNext){
         listImBgAnim[i].classList.add("nextSlide");
      }

      /*En este otro condicional comprobamos que caundo el condicional sea cierto, es decir
      cuando el indice del array coincida con le mismo numero de contador entonces la imagen se desplazara desde 
      la derecha al medio */
      else if(i == conterMain){
            listImBgAnim[i].classList.add("mainSlide");

      }

      /*Por ultimo lo vamos hacer es que la imgen que no se este ejecutando la esconderemos con 
      esta calse llamada hiddenSlide*/
      else{
        listImBgAnim[i].classList.add("hiddenSlide");  
      }

     }

}
/*Finaliza el slideShow con animacion*/



/*Funcion que controla lo que el usuario eintroduzca por el formulario, en respuesta
le devolvemos un mensaje que muestre los datos que ha ingresado en el formulario*/
function modalReserva(){
       document.getElementById("modalEncuentranos").style.display="block";
       document.documentElement.style.overflow="hidden";

       /*Aca creamos unas variables que seran donde se almacenaran los valores 
       que ingrese el suario en el formulario*/

       var Nombre = document.getElementById("formNombre").value;
       var Apellido = document.getElementById("formApellido").value;
       var Email = document.getElementById("formEmail").value;
       var Asunto = document.getElementById("formAsunto").value;
       var Descripcion = document.getElementById("formDescripcion").value;

       var mensaje;

       /*Funcion que se instancia y se llama a la vez, lo que hace esta funcion es 
       combrobar mediante unos validadores llamados (if-else) y tambien con algunas 
       propiedades de JavaScript como el checkValidity, que comprieba que lo que se esta 
       evaluando en el if sea correcto.*/
       (function formCheck(){
         if(!document.getElementById("formNombre").checkValidity()){
            mensaje ="Introduzca un Nombre valido";
            document.getElementById("mensajeRespuesta").innerHTML = mensaje;
          }
            
              else if(!document.getElementById("formApellido").checkValidity()){
                   mensaje ="Introduzca un Apellido valido";
                   document.getElementById("mensajeRespuesta").innerHTML = mensaje;

              }
               else if(!document.getElementById("formEmail").checkValidity()){
                   mensaje ="Introduzca un Email valido";
                   document.getElementById("mensajeRespuesta").innerHTML = mensaje;

              }
               else if(!document.getElementById("formAsunto").checkValidity()){
                   mensaje ="Introduzca un Asunto valido";
                   document.getElementById("mensajeRespuesta").innerHTML = mensaje;

              }
               else if(!document.getElementById("formDescripcion").checkValidity()){
                   mensaje ="Introduzca un Descripcion valido";
                   document.getElementById("mensajeRespuesta").innerHTML = mensaje;

              }

           else {
                /*Variable que guarda un mensaje que se le mostrara al usuario en el modal*/
              mensaje ="Señor/a " + Nombre + " " + Apellido + " le informamos que su cosulta ha sido correctamente procesada. Le llegara un mensaje de confirmacion al correo: " + Email + " con asunto: " + Asunto + " y su descripcion: " + Descripcion + " ";
      
               /*Aca invocamos el id que sera donde se muestre la informacion ingresada por el usuario*/
             document.getElementById("mensajeRespuesta").innerHTML = mensaje;
         }
  })();
       
}  




/*Funcion  que cierra el modal de formulario mediante un onclick en el HTML 
de el elemento button*/
function cerrarMBR(){
        document.getElementById("modalEncuentranos").style.display="none";
        document.documentElement.style.overflow="auto";

       document.getElementById("formNombre").value="";
       document.getElementById("formApellido").value="";
       document.getElementById("formEmail").value="";
       document.getElementById("formAsunto").value="";
       document.getElementById("formDescripcion").value="";
}
/*Fin de funcion que cierra el formulario*/




  /*Comienzo de codigo de Menu*/

      /*Es varible que se queda con la posicion anterior del scroll*/
      var posPreviaScroll = document.documentElement.scrollTop;
    window.onscroll = function() {esconderMostrarMenu()};
 function esconderMostrarMenu() {

            /*Es varible calcula cada vez que se hace scroll*/
            var posActualScroll = document.documentElement.scrollTop;

            /*Calculo de la posicion previa y la actual */
            /*Si esto es true entonces estamos subiendo y se muestra el menu*/ 
            if(posPreviaScroll>posActualScroll){ 
                 document.getElementById("contenedorOpcionesMenu").style.top ="0px";


                /*Este condicional comprueba que la posicion actual este en una medida en px de 200
                que es su estado original, si esto es verdadero mantendra el tamaño actual */

                 if(posActualScroll > 200){
                 document.getElementById("contenedorOpcionesMenu").style.height ="50px";
                 document.getElementById("contenedorOpcionesMenu").style.fontSize ="1.50rem";
                 document.getElementById("menu").style.lineHeight ="50px";
                 document.getElementById("submenu").style.top ="37px";
                 document.getElementById("logo").style.padding ="50px";


                 }else{
                    document.getElementById("contenedorOpcionesMenu").style.height ="160px";
                    document.getElementById("contenedorOpcionesMenu").style.fontSize ="2rem";
                    document.getElementById("menu").style.lineHeight ="50px";
                    document.getElementById("submenu").style.top ="156px";
                 }

            }
            else {
                  /*En lo que la compracion sea false entonces estara bajando y en su efecto se escodera el menu*/
               

                  if(posActualScroll < 200){
                  document.getElementById("contenedorOpcionesMenu").style.height ="50px";
                  document.getElementById("contenedorOpcionesMenu").style.fontSize ="1.50rem";
                  document.getElementById("menu").style.lineHeight ="50px";
                  document.getElementById("elementoSubmenu").style.top ="40px";
                  document.getElementById("logo").style.padding ="0px";
                  }
                  else{
                  document.getElementById("contenedorOpcionesMenu").style.top ="-180px";
                  }
                 posPreviaScroll = posActualScroll;
           }
      }
  /*Fin del codigo de Menu*/


 //Variables globales de lightbox de galeria
       var listaRutaImgG = [];
       var numeroImg = 0;

 function  readyLightbox(){
             /*Variable que guardara una lista de imagenes */
            var listaImgGal = document.getElementsByClassName("conteImg");

             /*Sacamos la lista de las imagenes con el bucle*/
             for (var i = 0; i < listaImgGal.length; i++ ){
                 listaRutaImgG.push(listaImgGal[i].src);

             }
             /*A cada uno de los elementos del array de imagenes se les va agregar
             un listener para saber si las imagenes son clicadas o no*/
             for(var i = 0; i < listaImgGal.length; i++){
                listaImgGal[i].addEventListener('click', openLightbox);
             }
             /*Funcion dentro de otra funcion, esta ya fue agregada en el for con el listener*/
             function openLightbox(){
                  /*Guardamos la informacion de la imagen que se haya clicado, mediante el 
                  metodo de currentTarget que lo que hace es detectar que elemento hemos clicado*/
                  var rutaImgClicada = event.currentTarget.src;

                  /*Aca ya pasamos a comparar nuestro contador de imagenes con la lista de imganes que tenemos para
                  ver cual es el orden que tenemos, cual es numero de indice que tiene la que hemos clicado*/
                  numeroImg = listaRutaImgG.indexOf(rutaImgClicada);

                  

             /*Como en todas las funciones anteriores mostramos la imagen*/
             document.getElementById("imageToShow").innerHTML = "<img class='FormatoImgModalG' src="+listaRutaImgG[numeroImg]+">"; 

             /*Aca de igual forma, que no permita hacer scroll y que se muestre el modal*/
             document.getElementById("modalLightboxGale").style.display = "block";
             document.documentElement.style.overflow = "hidden";

             /*Llamaos a nuestra funcion de cerrar el modal desde esta otra funcion*/
             closeLightbox();
             }

              /*Funcion que permite cerrar el modal de las imagens pulsado
              en el marco del modal*/
             function closeLightbox(){

                  /*Con este trozo de codigo escuchamos si se clica en cualquier lado de la pantalla*/
                  window.addEventListener("click", function(event) {

                        /*En este condicional lo que hacemos es que se declaren los lugares de la pantalla que 
                        no queremos que se toquen para el cierre del modal con un operador logico && que basicaente lo que 
                        controla es que se cumpla todo lo que esta en el if, para que todo este correcto*/
                        if(!event.target.matches(".FormatoImgModalG") && !event.target.matches(".conteImg") && !event.target.matches(".lbButtons") && !event.target.matches(".fa-solid")){
                          
                          /*En este punto lo que haceos es volver activar del scroll y desactivar el modal de la 
                          galeria*/
                              document.getElementById("modalLightboxGale").style.display = "none";
                              document.documentElement.style.overflow = "auto";
                        }

                  });

             } 

       }

  /*Comienzo de function de el boton de next-right*/
 function nextImgGaleria(){
            /*Variable global instanciada contadora incrementada en +1*/
            numeroImg++;
            /*Condicional que controla que el pasador de imagenes cambie hasta un limite de imagenes,
            cada que termina el limite de rutas de imagenes que hay en la variable "listaRutaImgG" 
            se reinicia a 0 y vuelve a mostrar la primera imagen*/

            if (numeroImg == listaRutaImgG.length) { 
                   numeroImg = 0;
            }
       //Aca vamos añadir las rutas de imagenes que marque el contador numeroIMG
       document.getElementById("imageToShow").innerHTML = "<img class='FormatoImgModalG' src="+listaRutaImgG[numeroImg]+">"; 
 }

       

 /*Boton que permite tirar hacia atras las imagenes*/

 function prevImgGaleria() {
            /*Variable global instanciada contadora decrementada en -1 para mostrar la imagen anterior*/
            numeroImg--;

            if(numeroImg < 0) {
               numeroImg = listaRutaImgG.length-1;
            }
        /*Aca vamos  restando las rutas de imagenes que marque el contador numeroIMG
        para poder retroceder a ver una imagen*/
       document.getElementById("imageToShow").innerHTML = "<img class='FormatoImgModalG' src="+listaRutaImgG[numeroImg]+">"; 
       }
 /*Fin de lightbox del boton-right*/



 /*Aca comienza el codigo de logros de las pestañas*/

 function marcarPestana(contenedorAMostrar, tabClicada){
         /*Extraemos el elemento del HTML que contiene los contenedores*/
         var listaConPestanas = document.getElementsByClassName("contenedorPestanas");

         /*Recorremos y Escondeos todos los contenedores, para despues llamar solamente uno*/
         for(var i = 0; i < listaConPestanas.length; i++){
              listaConPestanas[i].style.display="none";
         }

           document.getElementById(contenedorAMostrar).style.display="block";
           /*Para quitar la clase primaria*/
           /*Aca guardamos en una varible la lista de pestañas que tiene esta class en
           el HTML*/
            var tabLinks = document.getElementsByClassName("pestanas");

          /*Recorremos la lista de <p> o pestañas, que tenemos en nuestra variable tabLinks con un for*/
         for(var i = 0; i < tabLinks.length; i++ ){
            /*En este trozo de codigo seleccionamos la pestaña que sea seleccionada
            para desactivarla*/
            tabLinks[i].classList.remove("pestanaActiva");
         }
            /*Le damos la class de pestaña activa a la pestaña que sea clicada en el html*/
            document.getElementById(tabClicada).classList.add("pestanaActiva");

           /*Creamos una variable donde se guardara la class que contine las pestañas*/
           var logros = document.getElementsByClassName("contenedorImg");

        /*Le quitanos la clase a la que este asignada el efecto de animacion*/
         for(var i = 0; i < logros.length; i++ ){
            logros[i].classList.remove("LogroAnimado");
           }

           /*Ahora asignamos la class correspodiente a la pestaña que se este implementando */

           /*En esta varible guardaremos la clase que obtengamos de nuestro contenedor de pestañas.
           Con la propiedad childrem cogemos de este contenedor las clases que son hijos/as   */
           var logrosContenedor = document.getElementById(contenedorAMostrar).children;

           for(var i=0; i<logros.length; i++){
            logros[i].classList.add("LogroAnimado");

           }
       }
       /*Fin de las pestañas de logros*/

       /*Aca comienza el codigo del acordeon de menu de la seccion de nosotros*/

      
               
/*Funcion que controla mediante un evento onclic cual es el panel que se ha seleccionado por 
el usuario*/
var elementosAcordeon = document.getElementsByClassName("BonotesActivos");
   for(var i=0; i< elementosAcordeon.length; i++){
    elementosAcordeon[i].addEventListener("click",function(){
         this.classList.toggle("active");

     var panel = this.nextElementSibling;

     if(panel.style.display == "block"){
         panel.style.display="none";
     }else {
        panel.style.display="block";
     }
});  

}











