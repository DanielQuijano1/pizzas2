import "./Card.css"
import { Link } from "react-router-dom";

function Card(props) {

  const { id, title, precio, img } = props.item

  return (
    <>
      <Link to={`/detalle/${id}`} className="text">
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
      </Link>
    </>
  )
}
export default Card;
