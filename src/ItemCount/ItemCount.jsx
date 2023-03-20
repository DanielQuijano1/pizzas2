import { useState } from "react";
import Button from "../Button/Button";
import "./ItemCount.css"

function ItemCount({ onAddToCart, stock }) {
    const [count, setCount] = useState(1);

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
                <Button className="" onClick={handleCountRemove} text="-" />
                <div className=""> {count} </div>
                <Button className="" onClick={handleCountAdd} text="+" />
            </div>
            <Button className="" onClick={() => onAddToCart(count)} text="Agregar al Carrito" />
        </div>
    )
}

export default ItemCount;