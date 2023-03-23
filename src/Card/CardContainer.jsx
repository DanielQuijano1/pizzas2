import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../storage/cartContext.js";
import { obtenerProducto } from "../storage/MockService.js";
import Card from "./Card";
import Loader from "../Loader/Loader";

function CardContainer() {
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
                    <Card isInCart={isInCart} onAddToCart={handleAddToCart} title={producto.title} img={producto.img} detalle={producto.detalle} precio={producto.precio} validarStock={validarStock()} />
                )
            }
        </>

    )
}

export default CardContainer;