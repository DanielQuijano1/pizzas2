import Button from "../Button/Button";
import "./CartItem.css"


function CartItem({ itemInCart, removeItem }) {

    function precioFinal() {
        return itemInCart.precio * itemInCart.count
    }

    return (
        <div className="targetaCart">
            <div className="espaciadoCart">
                <div className="inicio">{itemInCart.category} ({itemInCart.title})</div>
                <div className=" final">{precioFinal()}</div>
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