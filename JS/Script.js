

                                   /*Buscador de contenido */

//Declarando Variables
const botonSearch = document.getElementById('botonSearch');
const botonProducto = document.getElementById('botonProductos');
const irAtras = document.getElementById('irAtras');
const irAtras1 = document.getElementById('irAtras1');
const botonesAccion = document.getElementById('button');
const barraSearch = document.getElementById('barraSearch');
const flechas = document.getElementById('flechasCarrusel');
const inputSearch = document.getElementById('inputSearch');
const boxSearch = document.getElementById('boxSearch');
const conteItemsCarrusel = document.getElementById('conteItemsCarrusel');
const Productos = document.getElementById('Estopera');
const Productos1 = document.getElementById('Rolinera');
const Productos2 = document.getElementById('Correa');
const Productos3 = document.getElementById('Aceite');
const Productos4 = document.getElementById('Filtro');
const Productos5 = document.getElementById('Pastilla');
const CajaArt = document.getElementById('articulos');
const eliminar = document.getElementById('elimi');

document.getElementById('botonProductos').addEventListener('click', MostarArticulo);
document.getElementById('irAtras').addEventListener('click', QuitarArticulo);
document.getElementById('botonSearch').addEventListener('click', mostrarInput);
document.getElementById('irAtras1').addEventListener('click', quitarInput);

//ocultar articulos
document.getElementById('articulo1').addEventListener("click", ocultar);
document.getElementById('articulo2').addEventListener("click", ocultar);
document.getElementById('articulo3').addEventListener("click", ocultar);
document.getElementById('articulo4').addEventListener("click", ocultar);
document.getElementById('articulo5').addEventListener("click", ocultar);
document.getElementById('articulo6').addEventListener("click", ocultar);

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
document.getElementById("botonSearch").addEventListener('click', borrar);

//Mostrar articulos
document.getElementById('articulo1').addEventListener('click', mostrarProducto1);
document.getElementById('articulo2').addEventListener('click', mostrarProducto2);
document.getElementById('articulo3').addEventListener('click', mostrarProducto3);
document.getElementById('articulo4').addEventListener('click', mostrarProducto4);
document.getElementById('articulo5').addEventListener('click', mostrarProducto5);
document.getElementById('articulo6').addEventListener('click', mostrarProducto6);

//Eliminar resultado
document.getElementById('elimi').addEventListener('click', eliminarR);

function MostarArticulo(){
    conteItemsCarrusel.style.display = "block";
    botonSearch.style.display = "none";
    botonProducto.style.display = "none";
    irAtras.style.display = "flex";
    flechas.style.display = "flex";
    botonesAccion.style.flexDirection = "column";
}
function QuitarArticulo(){
    conteItemsCarrusel.style.display = "none";
    botonSearch.style.display = "flex";
    botonProducto.style.display = "flex";
    flechas.style.display = "none";
    irAtras.style.display = "none";
    botonesAccion.style.flexDirection = "row";
}
function mostrarInput(){
    Productos.style.display = "none";
    Productos1.style.display = "none";
    Productos2.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
    CajaArt.style.display = "flex";
    barraSearch.style.display = "flex";
    botonProducto.style.display = "none";
    botonSearch.style.display = "none";
    irAtras1.style.display = "flex";
    botonesAccion.style.flexDirection = "column";
}
function quitarInput(){
    CajaArt.style.display = "none";
    barraSearch.style.display = "none";
    botonProducto.style.display = "flex";
    botonSearch.style.display = "flex";
    irAtras1.style.display = "none";
    botonesAccion.style.flexDirection = "row";
}
function borrar(){
    inputSearch.value = "";
}

//Mostrar producto
function mostrarProducto1(){
    Productos.style.display = "flex";
    Productos2.style.display = "none";
    Productos1.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
}
function mostrarProducto2(){
    Productos1.style.display = "flex";
    Productos2.style.display = "none";
    Productos.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
}
function mostrarProducto3(){
    Productos2.style.display = "flex";
    Productos1.style.display = "none";
    Productos.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
}
function mostrarProducto4(){
    Productos3.style.display = "flex";
    Productos1.style.display = "none";
    Productos2.style.display = "none";
    Productos.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
}
function mostrarProducto5(){
    Productos4.style.display = "flex";
    Productos1.style.display = "none";
    Productos2.style.display = "none";
    Productos3.style.display = "none";
    Productos.style.display = "none";
    Productos5.style.display = "none";
}
function mostrarProducto6(){
    Productos5.style.display = "flex";
    Productos1.style.display = "none";
    Productos2.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos.style.display = "none";
}

//Eliminar resultado
function eliminarR(){
    Productos.style.display = "none";
    Productos2.style.display = "none";
    Productos1.style.display = "none";
    Productos3.style.display = "none";
    Productos4.style.display = "none";
    Productos5.style.display = "none";
}

//Ocultar resultados
function ocultar(){
    boxSearch.style.display = "none";
}

//Ejecutando funciones
document.getElementById('botonSearch').addEventListener("click", actionBarra);

function actionBarra(){
    inputSearch.focus();

    if(inputSearch.value === ""){
        boxSearch.style.display = "none";
    }
}
function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = boxSearch.getElementsByTagName("li");

    //Recorriendo elementos
    for(i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            boxSearch.style.display = "block";

            if(inputSearch.value === ""){
                boxSearch.style.display = "none";
            }
        }
        else{
            li[i].style.display = "none";
        }
    };

}
