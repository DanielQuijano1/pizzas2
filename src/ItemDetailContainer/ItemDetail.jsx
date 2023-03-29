import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function ItemDetail({ title, img, detalle, precio, category, onAddToCart, isInCart }) {

    return (
        <div className="overlay">
            <div className="modal modal__card">

                <div className="content">
                    <div className="modal__card active">
                        <div className="modal__img">
                            <img src={img} alt={title} />
                            <Link to="/">
                                <Button className="close positionClose"></Button>
                            </Link>
                        </div>
                        <div className="description__flex">
                            <div className="description__category"> &#62;&#62; {category}</div>
                            <h3 className="description__title">{title}</h3>
                            <div className="description__detail">{detalle}</div>
                            <div className="description__price">
                                <div> ${precio} </div>
                            </div>
                            <div className="description__counter">
                                <ItemCount onAddToCart={onAddToCart} category={category} />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ItemDetail;