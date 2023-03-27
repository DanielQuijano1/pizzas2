import Button from "../Button/Button";
import "./CartItem.css"


function CartItem({ itemInCart, removeItem }) {
    return (
        <div className="targetaCart">
            <div className="espaciadoCart">
                <div className="inicio">{itemInCart.category} ({itemInCart.title})</div>
                <div className=" final">{itemInCart.precio}</div>
            </div>
            <div className="cantidad">
                <div className="textoCartItem">cantidad</div>
                <div className="textoCount">{itemInCart.count}</div>
                <Button onClick={() => removeItem(itemInCart)} className="buttonRemove" text="Eliminar" />
            </div>
            
        </div>
    )
}

export default CartItem;