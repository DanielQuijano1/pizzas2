import Button from "../Button/Button";
import "./CartItem.css"


function CartItem({ itemInCart, removeItem}) {
    return (
        <div className="targetaCart">
            <div className="textoCartItem">{itemInCart.title}</div>
            <div className="espaciadoCart">
                <div className="textoCartItem">{itemInCart.precio}</div>
                <div className="cantidad">
                    <div className="textoCartItem">{itemInCart.count}</div>
                </div>
                <Button onClick={() => removeItem(itemInCart)} className="buttonRemove" text="X" />
            </div>
        </div>
    )
}

export default CartItem;