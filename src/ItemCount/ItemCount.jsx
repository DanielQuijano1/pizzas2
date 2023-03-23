import { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.css"

function ItemCount({ onAddToCart }) {
    const [count, setCount] = useState(0);

    function handleCountAdd() {
            setCount(count + 1); 
    }

    function handleCountRemove() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="count__mainbox">
            <div className="count__title">Cantidad</div>
            <div className="count__flex">
                <div className="count__numero"> {count} </div>
                <Button className="count__signo" onClick={handleCountRemove} text="-" />
                <Button className="count__signo" onClick={handleCountAdd} text="+" />
            </div>
            <Button className="count__cart" onClick={() => onAddToCart(count)} text="Agregar al Carrito" />
        </div>
    )
}

export default ItemCount;