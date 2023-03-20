import { useContext, useState } from "react";
import { cartContext } from "../storage/cartContext";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import "./CartContainer.css";
import "./CartItem.css"

function CartContainer() {
    const { cart, removeItem, clear, getTotalItemsInCart } = useContext(cartContext);

    return (
        <div className="flexCarrito">
            <div className="titleCarrito">Mi Pedido</div>
            <div className="boxCarrito">
                {
                    cart.length === 0 ?
                        <div className="sinProductos"> No hay Items en el carrito</div>
                        :
                        <div className="flex">

                            <div className="targetaCart minimizado">
                                <div className="textoCartItem">
                                    Producto
                                </div>
                                <div className="espaciadoCart">
                                    <p className="textoCartItem">Precio</p>
                                    <p className="textoCartItem">Cantidad</p>
                                    <p className="textoCartItem">Eliminar</p>
                                </div>
                            </div>

                            <div className="cartItems">
                                {cart.map((itemInCart) => (
                                    <CartItem itemInCart={itemInCart} removeItem={removeItem}></CartItem>
                                ))}
                            </div>
                            <p className="targetaCart totalDeCompra">El total de tu compra es de ${getTotalItemsInCart()}</p>
                            <div className="buttonItems">
                                <Button onClick={clear} className="styleButton" text="Limpiar Carrito" ></Button>
                                <Button text="Finalizar Compra" ></Button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartContainer