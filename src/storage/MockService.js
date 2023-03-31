const productos = [
    { id: 1, title: "Muzzarella", precio: 1400, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    {id:26, title:"Doble Muzzarella", precio: 1400, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, doble muzzarella, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 2, title: "Jamon", precio: 1700, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 3, title: "Jamon y morron", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, morron rojo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0001.jpg", category: "Pizzas", stock: 20},
    { id: 4, title: "Jamon y Roquefort", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, queso roquefort, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 5, title: "Jamon y Huevo", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, huevo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0005.jpg", category: "Pizzas", stock: 20},
    { id: 6, title: "Napolitana", precio: 1700, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, tomate, ajo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 7, title: "Napolitana con Jamon", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, tomate, ajo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 8, title: "Muzzarella y Roquefort", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, roquefort, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 9, title: "Muzzarella y Huevo", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, huevos, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 10, title: "Muzzarella con Anchoas", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, anchoas, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 11, title: "Anchoas", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, anchoas, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 12, title: "Calabresa", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, longaniza, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 13, title: "Caprese", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, tomate, albahaca, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 14, title: "Fugazza", precio: 1700, detalle: "Pizza media masa moldeada a mano, con cebolla y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 15, title: "Faina", precio: 1800, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20},
    { id: 16, title: "Carne", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 17, title: "Carne a Cuchillo", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 18, title: "Carne Criolla", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 19, title: "Carne Picante", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 20, title: "Pollo", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 21, title: "Humita", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 22, title: "Verdura", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 23, title: "Jamon y queso", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 24, title: "Jamon y roquefort", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60},
    { id: 25, title: "Arabe", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60}
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