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
        <div className="">
            <div className="">Cantidad</div>
            <div className="">
                <div className=""> {count} </div>
                <Button className="count__signo" onClick={handleCountRemove} text="-" />
                <Button className="count__signo" onClick={handleCountAdd} text="+" />
            </div>
            <Button className="" onClick={() => onAddToCart(count)} text="Agregar al Carrito" />
        </div>
    )
}

export default ItemCount;