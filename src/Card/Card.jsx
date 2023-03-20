import "./Card.css"
import Popup from 'reactjs-popup';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../storage/cartContext";

function Card(props) {

  const { title, precio, img, detalle, onAddToCart } = props.item

  const {cart} = useContext(cartContext)

  return (
    <>
      <Popup
        trigger={<button className="button">
          <div className="card">
            <div className="card__flex">
              <div className="card__title">
                <h3>{title}</h3>
              </div>
              <div className="card__precio">
                <h4>${precio} </h4>
              </div>
            </div>
            <div className="card__img">
              <img src={img} alt={title} />
            </div>

          </div>
        </button>} modal nested
      >
        {close => (
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
        )}
      </Popup>
    </>
  )

}

export default Card;
