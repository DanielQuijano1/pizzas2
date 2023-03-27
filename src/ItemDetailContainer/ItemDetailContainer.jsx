import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../storage/cartContext.js";
import { obtenerProducto } from "../storage/MockService.js";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail.jsx";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({ title: "Cargando", precio: "-" })
    const [isLoading, setIsLoading] = useState(true);
    const [isInCart, setIsInCart] = useState(false)

    let params = useParams();
    
    const { cart, addToCart } = useContext(cartContext)

    function handleAddToCart(count) {
        setIsInCart(true);
        addToCart({ ...producto, count: count })
    }

    function validarStock() {
        let itemInCart = cart.find(item => item.id === producto.id);
        let stockUpdate = producto.stock;
        if (itemInCart) {
            stockUpdate = producto.stock - itemInCart.count
        }
        return stockUpdate
    }

    function validarPrecio(count){
        let precioEstimado = producto.precio
        if (count > 1){
            precioEstimado = precioEstimado * count
        }
        return precioEstimado
    }

    useEffect(() => {
        obtenerProducto(params.itemid)
            .then((respuesta) => {
                setProducto(respuesta);
                setIsLoading(false)
            })
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <ItemDetail isInCart={isInCart} onAddToCart={handleAddToCart} title={producto.title} img={producto.img} detalle={producto.detalle} precio={validarPrecio()} validarStock={validarStock()} />
                )
            }
        </>

    )
}

export default ItemDetailContainer;