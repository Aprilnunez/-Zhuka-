
// FUNCION QUE ME DEVUELE UN ARRAY CON LOS PRODUCTOS FILTRADOS SEGUN LA BUSQUEDA Y LA CATEGORIA.
function busquedaProducto (busqueda,categoria){
    let productoNombre = "";
    console.log(categoria);
    // BUSCO LOS PRODUCTOS QUE COINCIDAN CON EL PARAMETRO DE BUSQUEDA
    let arrayProductosFiltrados = [];
    categoria.forEach(producto => {
        
        productoNombre = producto.nombre.toLowerCase();
        if(productoNombre.indexOf(busqueda) >= 0){
            arrayProductosFiltrados.push(producto);
        }
    });

    return arrayProductosFiltrados;
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
// OBTENGO LA BUSQUEDA DESDE EL PARAMETRO DE LA URL
let nombreBusqueda = params.busqueda;
let categoriaBusqueda = params.catBusqueda;
console.log(categoriaBusqueda);

// CONVIERTO LA BUSQUEDA A LOWERCASE 
nombreBusqueda = nombreBusqueda.toLowerCase();

let spanBusqueda = document.querySelector('#spanBusqueda');
spanBusqueda.innerHTML =`<b>${nombreBusqueda}</b> - Categoria: <b>${categoriaBusqueda} <b>`;
inputBusqueda.value = nombreBusqueda;
let arrayBusqueda = [];


// LLAMO A LA FUNCION BUSQUEDA PARA RELLENAR EL ARRAY CON PRODUCTOS FILTRADOS
if(categoriaBusqueda == 'general'){
    arrayBusqueda = busquedaProducto(nombreBusqueda,productos);
}else if (categoriaBusqueda == 'remeras'){
    arrayBusqueda = busquedaProducto(nombreBusqueda,remeras);
}else if (categoriaBusqueda == 'buzos'){
    arrayBusqueda = busquedaProducto(nombreBusqueda,buzos);
}else if (categoriaBusqueda == 'barbijos'){
    arrayBusqueda = busquedaProducto(nombreBusqueda,barbijos);
}else{
    arrayBusqueda = busquedaProducto(nombreBusqueda,gorras);
}

console.log(arrayBusqueda);


// ARMADO DE LA ESTRUCTURA 
if(arrayBusqueda.length > 0){

    const toAppendProdFiltrados = arrayBusqueda.map((prod, i)  => {

        const startRowLabel="<div class='row'>";
        const endRowLabel="</div>";
        let start = "";
        let end="";
    
           let card = `
           <div class="col-sm-6 col-md-3" style="padding-top: 1.5rem;">
              <div class="card conLink" onclick="detalleProducto(${prod.id},'${prod.categoria.toLowerCase()}')">
                   <img src="${prod.imagen}" class="card-img-top welcome-imagen" alt="">
                   <div class="card-body">
                   <h5 class="card-title welcome-titulo titulo-producto" alt="">${prod.nombre}</h5>
                   <span class="card-title welcome-precio" alt="" >$ ${prod.precio}</span >
                   <div>
                       <div ></div>
                       <div ></div>
                       <div ></div>                                        
                   </div>
                   <div class="btn btn-primary welcome-vermas-producto"  onclick="detalleProducto(${prod.id},'')"  >VER M&Aacute;S</div>
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
       
       $('#productosFiltrados').append(toAppendProdFiltrados.join(''))
    
}else{
    console.log('No se encontraron resultados para esa busqueda')
}