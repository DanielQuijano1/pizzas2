import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {

    const [cart, setCart] = useState([]);

    function addToCart(item) {
        let isInCart = cart.findIndex(itemInCart => itemInCart.title === item.title)
        let newCart = cart.map(item => item);
        if (newCart.some(itemS => itemS.title === item.title)) {
            newCart[isInCart].count += item.count
            setCart(newCart)
        } else {
            newCart.push(item)
            setCart(newCart);
        }
    }


    function removeItem(itemInCart) {
        let newCart = cart.filter(elem => elem !== itemInCart)
        setCart(newCart)
    }

    function clear() {
        setCart([])
    }

    function multiplicar(a, b) {
        return a * b
    }
    
    function getTotalItemsInCart() {
        let total = 0;
        total = cart.reduce(
            (totalCuenta, i) => totalCuenta + multiplicar(i.precio, i.count),
            total)
        return total;
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeItem, clear, getTotalItemsInCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }; 