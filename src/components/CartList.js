import CartItem from './CartItem';

export default function CartList(props) {
    // общая стоимость товаров в корзине
    const cost = props.items.reduce((sum, item) => sum + item.price * item.quantity, 0) 
    return (
        <div className="cart-modal">
            <i className="material-icons cart-modal-close" onClick={props.toggleShow}>
                close
            </i>
            <h5 className="red-text text-lighten-1">Ваша корзина</h5>
            {props.items.length ? (
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Сумма</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.items.map(item =>
                            <CartItem key={item.id} {...item} removeFromCart={props.removeFromCart} />
                        )}
                        <tr>
                            <th colSpan="3">Итого</th>
                            <th>{cost}</th>
                            <th>руб.</th>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Ваша корзина пуста</p>
            )}
        </div>
    );
}