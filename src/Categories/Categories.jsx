import { Link } from "react-router-dom";
import "./Categories.css"

function Categories() {
    return (
        <div className="flexCategorias">
            <div className="titleCategories">Nuestros Productos</div>
            <div className="categorias">
                <Link to="/category/Pizzas" className="flexCategoria">
                    <img src="/assets/2454219.png" className="imgCategory" />
                    <div className="textCategory">Pizzas</div>
                </Link>
                <Link to="/category/Empanadas" className="flexCategoria">
                    <img src="/assets/5100421.png" className="imgCategory" />
                    <div className="textCategory">Empanadas</div>
                </Link>
                <Link to="/category/Bebidas" className="flexCategoria">
                    <img src="/assets/3082015.png" className="imgCategory" />
                    <div className="textCategory">Bebidas</div>
                </Link>
            </div>
        </div>
    )

}

export default Categories;