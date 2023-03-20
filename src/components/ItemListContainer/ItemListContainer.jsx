import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../../services/MockServices.js";
import Card from "../Card/Card";
import Flex from "../Flex/Flex";
import { obtenerProductoPorCategoria } from "../../services/MockServices.js";
import Loader from "../Loader/Loader";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [textoAlerta, setTextoAlerta] = useState()

    let categoryid = useParams().categoryid;

    useEffect(() => {
        if (!categoryid) {
            obtenerProductos()
                .then((respuesta) => {
                    setProductos(respuesta)
                    setIsLoading(false)
                    setTextoAlerta("Items Cargados Corrextamente")
                })
                .catch((error) => {
                    setTextoAlerta(error)
                })
                .finally(() => setIsLoading(false))
        } else {
            obtenerProductoPorCategoria(categoryid).then((respuesta) => {
                setProductos(respuesta)
                setIsLoading(false)
            })
                .finally(() => setIsLoading(false))
        }
    }, [categoryid]);

    return (
        <>
            {
                isLoading ? (
                    <Loader></Loader>
                )
                    : (
                        <>
                            <Flex>
                                {productos.map((item) => <Card key={item.id} item={item} />)}
                            </Flex>
                        </>
                    )
            }
        </>
    )
}

export default ItemListContainer;