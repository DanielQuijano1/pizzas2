

function Card(props) {

    const { title, price, img } = props.item

    return (
        <div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{img}</div>
        </div>
    )
}

export default Card