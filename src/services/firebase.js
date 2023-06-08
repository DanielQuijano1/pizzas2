// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, doc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAY_DR32X7TmQHdhnFMcBiLoHvV57b_4rM",
    authDomain: "mia-pizza-1ff8d.firebaseapp.com",
    projectId: "mia-pizza-1ff8d",
    storageBucket: "mia-pizza-1ff8d.appspot.com",
    messagingSenderId: "200022043327",
    appId: "1:200022043327:web:4c9e3b26cecd37f7b8740a",
    measurementId: "G-J8KHFMRJ0B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function obtenerProductos() {
    const productosRef = collection(db, "productos")
    const snapshot = await getDocs(productosRef)
    const productos = snapshot.docs.map((e) => {
        let producto = e.data();
        producto.id = e.id;
        return producto
    });
    return productos;
}

export async function obtenerProducto(id) {
    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, id)
    const snapshot = await getDoc(docRef);
    return { ...snapshot.data(), id: snapshot.id }
}

export async function obtenerProductoPorCategoria(category) {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("category", "==", category));
    const snapshot = await getDocs(q)
    const productos = snapshot.docs.map((e) => {
        let producto = e.data();
        producto.id = e.id;
        return producto
    });
    return productos;
}

export async function createOrder(order) {
    const orderRef = collection(db, "order");
    let respuesta = await addDoc(orderRef, order);
    console.log(respuesta, respuesta.id);
    return respuesta.id;
}

export async function exportArray(){
    const productos = [
        { id: 1, title: "Muzzarella", precio: 1400, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 26, title: "Doble Muzzarella", precio: 1400, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, doble muzzarella, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 2, title: "Jamon", precio: 1700, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 3, title: "Jamon y morron", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, morron rojo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0001.jpg", category: "Pizzas", stock: 20 },
        { id: 4, title: "Jamon y Roquefort", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, queso roquefort, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 5, title: "Jamon y Huevo", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, huevo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0005.jpg", category: "Pizzas", stock: 20 },
        { id: 6, title: "Napolitana", precio: 1700, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, tomate, ajo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 7, title: "Napolitana con Jamon", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, jamón, tomate, ajo, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0006.jpg", category: "Pizzas", stock: 20 },
        { id: 8, title: "Muzzarella y Roquefort", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, roquefort, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 9, title: "Muzzarella y Huevo", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, huevos, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 10, title: "Muzzarella con Anchoas", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, anchoas, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 11, title: "Anchoas", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, anchoas, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0000.jpg", category: "Pizzas", stock: 20 },
        { id: 12, title: "Calabresa", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, longaniza, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0000.jpg", category: "Pizzas", stock: 20 },
        { id: 13, title: "Caprese", precio: 1800, detalle: "Pizza media masa moldeada a mano, con salsa de tomate, muzzarella, tomate, albahaca, aceitunas y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 14, title: "Fugazza", precio: 1700, detalle: "Pizza media masa moldeada a mano, con cebolla y adornada con especias", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 15, title: "Faina", precio: 1800, detalle: "", img: "/assets/IMG-20221205-WA0002.jpg", category: "Pizzas", stock: 20 },
        { id: 16, title: "Carne", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 17, title: "Carne a Cuchillo", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 18, title: "Carne Criolla", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 19, title: "Carne Picante", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 20, title: "Pollo", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 21, title: "Humita", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 22, title: "Verdura", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 23, title: "Jamon y queso", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 24, title: "Jamon y roquefort", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 },
        { id: 25, title: "Arabe", precio: 220, detalle: "", img: "/assets/IMG-20221205-WA0004.jpg", category: "Empanadas", stock: 60 }
    ]

    for (let item of productos){
        delete(item.id)
        addDoc( collection(db, "productos"), item).then(
            (respuesta) => console.log("item crado", respuesta.id)
        )
    }
}

export default db