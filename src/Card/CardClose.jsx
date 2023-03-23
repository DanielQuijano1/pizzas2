import ItemCount from "../ItemCount/ItemCount";
import "./CardClose.css"

function CardClose(props) {

    const { close, img, title, detalle, precio, onAddToCart, validarStock } = props

    return (
        <div className="overlay">
            <div className="modal modal__card">

                <div className="content">
                    <div className="modal__card">
                        <div className="modal__img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="description__flex">
                            <h3 className="description__title">{title}</h3>
                            <small className="description__detail">{detalle}</small>
                            <div className="description__price">${precio} </div>
                            <div>
                                <ItemCount text="Cantidad" stock={validarStock} onAddToCart={onAddToCart} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="actions ">
                    <button className="close" onClick={close}>
                        cerrar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CardClose;