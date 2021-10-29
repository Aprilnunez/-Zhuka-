/* */
const textosBanners =  document.getElementById("textosBanners");

const ocultarMensajeBanner = () => {
   
    if($('#textosBanners').css('display') == 'none'){
        $("#textosBanners").show();
     }else{
        $("#textosBanners").hide();
     }
}
/* */

const verMasRemeras = (m) =>{
    window.location = 'paginas/remeras.html'
}
const verMasBuzos = (m) =>{
   window.location = 'paginas/buzos.html'
}
const verMasBarbijos = (m) =>{
   window.location = 'paginas/barbijos.html'
}

const verMasGorras = (m) =>{
   window.location = 'paginas/gorras.html'
}

const verProducto = (m) =>{
    window.location = 'detalle.html'
}

//------------------------------------------------------------------------------------------------------------------------------//
let i = 0
let listaProductos = []

// Objetos ---->  

class Producto {
    constructor(id, categoria, nombre, precio, cantidad, talla, imagen, color ){
        this.id = id
        this.categoria = categoria
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.talla = talla
        this.imagen = imagen
        this.color = color
    }
}

//------LOCAL STORAGE-------------------//

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

//-------------------------------------//

//----FILTRO CATEGORIA REMERAS


var remeras = productos
. filter(function(producto) {
   return producto.categoria === 'Remeras';
})

console.log(remeras);

//---- FILTRO CATEGORIA BUZOS


var buzos = productos
. filter(function(producto) {
   return producto.categoria === 'Buzos';
})

console.log(buzos);

//---- FILTRO CATEGORIA GORRAS


var gorras = productos
. filter(function(producto) {
   return producto.categoria === 'Gorras';
})

console.log(gorras);

//---- FILTRO CATEGORIA BARBIJOS


var barbijos = productos
. filter(function(producto) {
   return producto.categoria === 'Barbijos';
})

console.log(barbijos);



//-----------OPCION 2 ARRAY REMERAS: ----------------------------------------------------------------------------------------//

 const toAppend = remeras.map((prod, i)  => {

  const startRowLabel="<div class='row'>";
  const endRowLabel="</div>";
  let start = "";
  let end="";
 

     let card = `
     <div class="col-sm-6 col-md-3" style="padding-top: 1.5rem;">
        <div class="card conLink" onclick="detalleProducto(${prod.id},'remeras')">
             <img src="${prod.imagen}" class="card-img-top welcome-imagen" alt="">
             <div class="card-body">
             <h5 class="card-title welcome-titulo titulo-producto" alt="">${prod.nombre}</h5>
             <span class="card-title welcome-precio" alt="" >$ ${prod.precio}</span >
             <div>
             <div class="welcome-color1" style="display: inline-block;"></div>
             <div class="welcome-color2" style="display: inline-block;"></div>
             <div class="welcome-color3" style="display: inline-block;"></div>                                        
             </div>
             <div class="btn btn-primary welcome-vermas-producto"  onclick="detalleProducto(${prod.id},'remeras')"  >VER M&Aacute;S</div>
             </div>
         </div>
     </div>`


 
     start="";
     if(i%4==0 || i == 0) {
        start=startRowLabel;
 
     }
     end="";
 
     if(i!=0  && (i%4==3 || i == remeras.length - 1)) {
        end=endRowLabel;
     }
 
     return Append = start + card + end;
         
 
  })
 
  $('#remeras').append(toAppend.join(''))
 
  
/*
        ARRAY BUZOS:
*/

 const toAppendBuzos = buzos.map((prod, i)  => {

    const startRowLabel="<div class='row'>";
    const endRowLabel="</div>";
    let start = "";
    let end="";
   
  
       let card = `
       <div class="col-sm-6 col-md-3" style="padding-top: 1.5rem;">
          <div class="card conLink" onclick="detalleProducto(${prod.id},'buzos')">
               <img src="${prod.imagen}" class="card-img-top welcome-imagen" alt="">
               <div class="card-body">
               <h5 class="card-title welcome-titulo titulo-producto" alt="">${prod.nombre}</h5>
               <span class="card-title welcome-precio" alt="" >$ ${prod.precio}</span >
               <div>
               <div class="welcome-color1" style="display: inline-block;"></div>
               <div class="welcome-color2" style="display: inline-block;"></div>
               <div class="welcome-color3" style="display: inline-block;"></div>                                        

               </div>
               <div class="btn btn-primary welcome-vermas-producto"  onclick="detalleProducto(${prod.id},'buzos')"  >VER M&Aacute;S</div>
               </div>
           </div>
       </div>`
  
       start="";
       if(i%4==0 || i == 0) {
          start=startRowLabel;
   
       }
       end="";
   
       if(i!=0  && (i%4==3 || i == remeras.length - 1)) {
          end=endRowLabel;
       }
   
       return Append = start + card + end;
           
   
    })
   
    $('#buzos').append(toAppendBuzos.join(''))
  
  /*
         ARRAY Gorras:
*/

 const toAppendGorras = gorras.map((prod, i)  => {

    const startRowLabel="<div class='row'>";
    const endRowLabel="</div>";
    let start = "";
    let end="";

       let card = `
       <div class="col-sm-6 col-md-3" style="padding-top: 1.5rem;">
          <div class="card conLink" onclick="detalleProducto(${prod.id},'gorras')">
               <img src="${prod.imagen}" class="card-img-top welcome-imagen" alt="">
               <div class="card-body">
               <h5 class="card-title welcome-titulo titulo-producto" alt="">${prod.nombre}</h5>
               <span class="card-title welcome-precio" alt="" >$ ${prod.precio}</span >
               <div>
                   <div ></div>
                   <div ></div>
                   <div ></div>                                        
               </div>
               <div class="btn btn-primary welcome-vermas-producto"  onclick="detalleProducto(${prod.id},'gorras')"  >VER M&Aacute;S</div>
               </div>
           </div>
       </div>`
  
       start="";
       if(i%4==0 || i == 0) {
          start=startRowLabel;
   
       }
       end="";
   
       if(i!=0  && (i%4==3 || i == remeras.length - 1)) {
          end=endRowLabel;
       }
   
       return Append = start + card + end;
           
   
    })
   
   $('#gorras').append(toAppendGorras.join(''))
   
  
   
  /*
        OPCION 2 ARRAY BARBIJOS:
*/

 const toAppendBarbijos = barbijos.map((prod, i)  => {

    const startRowLabel="<div class='row'>";
    const endRowLabel="</div>";
    let start = "";
    let end="";

       let card = `
       <div class="col-sm-6 col-md-3" style="padding-top: 1.5rem;">
          <div class="card conLink" onclick="detalleProducto(${prod.id},'barbijos')">
               <img src="${prod.imagen}" class="card-img-top welcome-imagen" alt="">
               <div class="card-body">
               <h5 class="card-title welcome-titulo titulo-producto" alt="">${prod.nombre}</h5>
               <span class="card-title welcome-precio" alt="" >$ ${prod.precio}</span >
               <div>
                   <div ></div>
                   <div ></div>
                   <div ></div>                                        
               </div>
               <div class="btn btn-primary welcome-vermas-producto"  onclick="detalleProducto(${prod.id},'barbijos')"  >VER M&Aacute;S</div>
               </div>
           </div>
       </div>`
  
       start="";
       if(i%4==0 || i == 0) {
          start=startRowLabel;
   
       }
       end="";
   
       if(i!=0  && (i%4==3 || i == remeras.length - 1)) {
          end=endRowLabel;
       }
   
       return Append = start + card + end;
           
   
    })
   
   $('#barbijos').append(toAppendBarbijos.join(''))
   


// ---Funcion: detalleProducto ------------------------------------------------------//
 
  function detalleProducto(i,categoria) {

    // PASO POR PARAMETROS EL INDICE DEL PRODUCTO Y SU CATEGORIA.
    window.location = `detalle.html?id=${i}&categoria=${categoria}`;


  }

// ---Funcion: detalleRemera ------------------------------------------------------//
 
function detalleRemera(i, categoria) {

   // PASO POR PARAMETROS EL INDICE DEL PRODUCTO Y SU CATEGORIA.
   window.location = `detalle.html?id=${i}&categoria=${categoria}`;


 }

//  // ---Funcion: detalleBuzo ------------------------------------------------------//
 
 function detalleBuzo(i, categoria) {

   // PASO POR PARAMETROS EL INDICE DEL PRODUCTO Y SU CATEGORIA.
   window.location = `detalle.html?id=${i}&categoria=${categoria}`;


 }





 let btnBuscarProductos = document.querySelector('#btnBuscarProductos');
 let inputBusqueda = document.querySelector('#buscador');
 let busqueda = '';
 btnBuscarProductos.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('asd');
      busqueda = inputBusqueda.value
      window.location = `busqueda.html?busqueda=${busqueda}&catBusqueda=general`;
 });


