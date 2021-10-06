import CardStyles from "./UICss/Card.module.css";

const Card = (props) => {
    const classes = `${props.className} ${CardStyles.card}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;