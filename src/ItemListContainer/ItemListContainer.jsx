import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import obtenerProductos from "../storage/MockService.js";
import { obtenerProductoPorCategoria } from "../storage/MockService.js";
import Flex from "../Flex/Flex";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    let categoryid = useParams().categoryid;

    useEffect(() => {
        if (!categoryid) {
            obtenerProductos()
                .then((respuesta) => {
                    setProductos(respuesta)
                })
                .catch((error) => alert(error));
        }
        else {
            obtenerProductoPorCategoria(categoryid).then((respuesta) => {
                setProductos(respuesta)
            })
        }
    }, [categoryid]);

    return(
        <Flex>
            {productos.map((item) => <Card key={item.id} item={item} /> )}
        </Flex>
    )

}

export default ItemListContainer;