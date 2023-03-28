import { useContext, useState, useEffect } from "react";
import { cartContext } from "../storage/cartContext";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import "./CartContainer.css";
import "./CartItem.css"
import Popup from 'reactjs-popup';
import "./../ItemDetailContainer/ItemDetail.css"

function CartContainer() {
    const { cart, removeItem, clear, getTotalItemsInCart } = useContext(cartContext);

    const [windowsSize, setWindowsSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowsSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (

        <>
            { windowsSize < 700  ?
                <Popup
                    trigger={<button className="popUpCarrito"> {cart.length} items en el carrito </button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="overlay">
                            <div className="flexCarrito background">
                            <Button className="close arregloClose" onClick={() => {
                                    close();
                                }} />
                                <div className="titleCarrito">Mi Pedido</div>
                                
                                <div className="boxCarrito">
                                    {
                                        cart.length === 0 ?
                                            <div className="sinProductos">
                                                <img src="/assets/carro-vacio.png" className="carritoVacio" />
                                            </div >
                                            :
                                            <div className="flex">

                                                <div className="targetaCartTitle">
                                                    <div className="inicio">Producto</div>
                                                    <div className="final">Precio</div>
                                                </div>

                                                <div className="cartItems">
                                                    {cart.map((itemInCart) => (
                                                        <CartItem itemInCart={itemInCart} removeItem={removeItem}></CartItem>
                                                    ))}
                                                </div>

                                                <p className="totalDeCompra">El total de tu compra es de ${getTotalItemsInCart()}</p>

                                                <div className="buttonItems">
                                                    <Button onClick={clear} className="buttonCart" text="Limpiar Carrito" ></Button>
                                                    <Button className="buttonCart" text="Finalizar Compra" ></Button>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>

                :
                <div className="flexCarrito">
                    <div className="titleCarrito">Mi Pedido</div>
                    <div className="boxCarrito">
                        {
                            cart.length === 0 ?
                                <div className="sinProductos">
                                    <img src="/assets/carro-vacio.png" className="carritoVacio" />
                                </div >
                                :
                                <div className="flex">

                                    <div className="targetaCartTitle">
                                        <div className="inicio">Producto</div>
                                        <div className="final">Precio</div>
                                    </div>

                                    <div className="cartItems">
                                        {cart.map((itemInCart) => (
                                            <CartItem itemInCart={itemInCart} removeItem={removeItem}></CartItem>
                                        ))}
                                    </div>

                                    <p className="totalDeCompra">El total de tu compra es de ${getTotalItemsInCart()}</p>

                                    <div className="buttonItems">
                                        <Button onClick={clear} className="buttonCart" text="Limpiar Carrito" ></Button>
                                        <Button className="buttonCart" text="Finalizar Compra" ></Button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default CartContainer