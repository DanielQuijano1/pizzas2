const productos = [
    { id: 1, title: "Muzzarella", precio: 1300, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 2, title: "Jamon", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 3, title: "Jamon y morron", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0001.jpg", category: "Pizzas", stock: 20},
    { id: 4, title: "Jamon y Roquefort", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 5, title: "Jamon y Huevo", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0005.jpg", category: "Pizzas", stock: 20},
    { id: 6, title: "Napolitana", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 7, title: "Napolitana con Jamon", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 8, title: "Muzzarella y Roquefort", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 9, title: "Muzzarella y Huevo", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 10, title: "Muzzarella con Anchoas", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 11, title: "Anchoas", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 12, title: "Calabresa", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 13, title: "Caprese", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 14, title: "Fugazza", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 15, title: "Faina", precio: 1700, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 16, title: "Carne", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 17, title: "Carne a Cuchillo", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 18, title: "Carne Criolla", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 19, title: "Carne Picante", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 20, title: "Pollo", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 21, title: "Humita", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 22, title: "Verdura", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 23, title: "Jamon y queso", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 24, title: "Jamon y roquefort", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 25, title: "Arabe", precio: 210, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60}
]

const obtenerProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        },1000);
    })
}

const obtenerProducto = (idProducto) =>{
    return new Promise((resolve,reject) =>{
        let itemRequerido = productos.find((item) => {return (item.id === Number(idProducto))})
        setTimeout(() =>{
            if(itemRequerido) resolve(itemRequerido);
            else reject ("No se encontró el producto buscado")
        }, 200);
    });
}

const obtenerProductoPorCategoria = (categoriaURL) => {
    return new Promise((resolve, reject) =>{
        let productoRequerido = productos.filter(producto => producto.category === categoriaURL)
        setTimeout(() => {
            if (productoRequerido) resolve(productoRequerido);
            else reject("No se encontró la categoria buscada")
        },500);
    });
}

export default obtenerProductos;

export {obtenerProducto, obtenerProductoPorCategoria};