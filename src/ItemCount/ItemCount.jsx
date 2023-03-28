import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ItemCount.css"

function ItemCount({ onAddToCart, category }) {
    const [count, setCount] = useState(0);

    function handleCountAdd() {
        setCount(count + 1);
    }

    function handleCountAddDoc() {
        setCount(count + 6)
    }


    function handleCountRemove() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleCountRemoveDoc() {
        if (count > 5) {
            setCount(count - 6);
        }
    }


    return (
        <div className="count__mainbox">
            <div className="count__title">Cantidad</div>

            {category === "Empanadas" ?
                <div className="count__flex arreglo">
                    <Button className="count__numero arregloCount" onClick={handleCountRemoveDoc} text="-6" />
                    <Button className="count__numero arregloCount" onClick={handleCountRemove} text="-1" />
                    <div className="count__numero"> {count} </div>
                    <Button className="count__numero arregloCount" onClick={handleCountAdd} text="+1" />
                    <Button className="count__numero arregloCount" onClick={handleCountAddDoc} text="+6" />
                </div>
                :
                <div className="count__flex">
                    <Button className="count__signo" onClick={handleCountRemove} text="-" />
                    <div className="count__numero"> {count} </div>
                    <Button className="count__signo" onClick={handleCountAdd} text="+" />
                </div>
            }

            <Link to="/">
                <Button className="count__cart" onClick={() => onAddToCart(count)} text="Agregar al Carrito" />
            </Link>
        </div>
    )
}

export default ItemCount;