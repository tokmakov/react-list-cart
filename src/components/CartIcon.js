export default function CartIcon(props) {
    return (
        <div className="cart-icon" onClick={props.toggleCart}>
            <i className="material-icons">shopping_cart</i>
            {props.length ? <span>{props.length}</span> : null}
        </div>
    );
}