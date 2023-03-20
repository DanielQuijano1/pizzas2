import { Link } from "react-router-dom";
import "./Categories.css"

function Categories(props) {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/categorias/Pizzas' className="">Pizzas</Link>
                    <Link to='/categorias/Empanadas' className="">Empanadas</Link>
                    <Link to='/categorias/Bebidas' className="">Bebidas</Link>
                    <Link to='/categorias/Promos' className="">Promos</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Categories