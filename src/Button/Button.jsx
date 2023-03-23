function Button(props) {

    return (
        <a href={props.href}>
            <button onClick={props.onClick} className={props.className}>
                {props.text}
            </button>
        </a>
    )
}

export default Button;