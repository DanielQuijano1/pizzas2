import "./Card.css"
import Popup from 'reactjs-popup';
import CardClose from "./CardClose";

function Card(props) {

  const { title, precio, img, detalle, onAddToCart } = props.item

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
          <CardClose close={close} onAddToCart={onAddToCart} title={title} img={img} detalle={detalle} precio={precio} />
        )}
      </Popup>
    </>
  )
}
export default Card;
