import ItemCount from "../ItemCount/ItemCount";
import "./CardClose.css"

function CardClose(props) {

    const {close, img, title, detalle, precio, onAddToCart} = props

    return (
        <div className="overlay">
            <div className="modal modal__card">

                <div className="content">
                    <div className="modal__card">
                        <div className="modal__img">
                            <img src={img} alt={title} />
                        </div>

                        <div>
                            <h3>{title}</h3>
                        </div>

                        <div>
                            <small>{detalle}</small>
                        </div>

                        <div>
                            <h3>${precio} </h3>
                        </div>

                        <div>
                            <ItemCount text="Cantidad" onAddToCart={onAddToCart} />
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