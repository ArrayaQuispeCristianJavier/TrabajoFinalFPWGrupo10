import React, {useState} from 'react';
function Productos() {
/*Objeto ProductoObj, se le agrego Obj para evitar el error en el anterior tp donde teniamos nombre iguales y causaba dificultad a la hora de leer*/
const ProductoObj = {
    /*atributo del objeto*/
    nombreProducto : "",
    precioProducto : 0,
    nombreLocal: ""
}
/*Estados; Se paso todos los let del anterior tp a react en forma de estados*/
const [newProductoObj, setNewProductoObj] = useState(ProductoObj);
const [producto, setProducto] = useState([]);
const [registroProducto, setRegistroProducto] = useState("");
const [productoBarato, setProductoBarato] = useState(null);//Es null por que no hay ningun producto que sea dado como el mas barato
const [registroProductoComparado, setRegistroProductoComparado] = useState("");



/*Funcion productoMenorPrecio*/
const productoMenorPrecio = () => {
//Se va a utilizar el foreach para recorrer el arreglo de producto
producto.forEach((elemento) =>{
//Desestructuramos a elemento solo obteniendo los atributos precio, nombre y local
const{ precio, nombre, local } = elemento;
//!productoBarato: Va a verificar que no se ingreso ningun producto, pero en caso que si producto1 se lo considerara hasta ese momento el mas barato 
if (!productoBarato || (nombre === productoBarato.nombre && precio < productoBarato.precio) || (nombre !== productoBarato.nombre)) {
productoBarato = {
    nombre: nombre,
    precio: precio,
    local: local
};   
}
});
setProductoBarato(productoBarato);

setRegistroProductoComparado(
//Usamos un operador terniario
//El "?" es una condicion que simula como un if(productoBarato)
//El ":" es una condicion que si se no se cumple el primero pasa a la segunda opcion como else {setRegistroProductoComparado}
productoBarato ? (
    <div>
     <h4> Producto con el precio mas bajo</h4>
    <p>
    Nombre del producto: {productoBarato.nombreProducto}<br></br>
    Precio del producto mas bajo: ${productoBarato.precioProducto}<br></br>
    Nomrbe del local : {productoBarato.nombreLocal}
    </p>
    </div>
    ):(
        <p>No hay producto registrado</p>
    )
)

const mostrarProducto = () => {
    setRegistroProducto(
        producto.map((elemento, index) => (
            <div key={index}>
                Nombre del producto: {elemento.nombreProducto} -- Precio del producto: ${elemento.precioProducto} -- Nombre del local: {elemento.nombreLocal}
            </div>
        ))
    );
};

return(
<>
<h1>Comparador Precio</h1>
<label>Nombre del producto</label><br></br>
<input ></input>
</>
);



}
}
export default Productos;