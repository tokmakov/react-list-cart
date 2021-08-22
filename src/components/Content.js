import {useState} from 'react';
import CartIcon from './CartIcon';
import ShowAlert from './ShowAlert';
import CartList from './CartList';
import ShopList from './ShopList';

export default function Content() {
    const [cartItems, setCartItems] = useState([]);
    const [cartShow, setCartShow] = useState(false); // модальное окно
    // для показа сообщения после добавления в корзину
    const [showAlert, setShowAlert] = useState(null);

    const appendToCart = (item, quantity = 1) => {
        // нужно проверить, нет ли уже такого товара в корзине
        const itemIndex = cartItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) { // такого товара еще нет
            const newItem = {
                ...item,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        } else { // такой товар уже есть
            const newItem = {
                ...cartItems[itemIndex],
                quantity: cartItems[itemIndex].quantity + quantity
            };
            const newCart = cartItems.slice(); // копия массива cartItems
            newCart.splice(itemIndex, 1, newItem);
            setCartItems(newCart);
        }
        setShowAlert(item.name + ' добавлен в корзину');
    };

    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    }

    const toggleShow = () => setCartShow(!cartShow);

    const hideAlert = () => setShowAlert(null);

    return (
        <main className="container">
            <CartIcon length={cartItems.length} toggleShow={toggleShow} />
            {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
            <ShopList appendToCart={appendToCart} />
            {cartShow ? (
                <CartList items={cartItems} toggleShow={toggleShow} removeFromCart={removeFromCart} />
            ) : (
                null
            )}
        </main>
    );
}