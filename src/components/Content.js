import {useState} from 'react';
import CartIcon from './CartIcon';
import ShowInfo from './ShowInfo';
import CartList from './CartList';
import ShopList from './ShopList';

export default function Content() {
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false); // модальное окно
    // для показа сообщения после добавления в корзину
    const [showInfo, setShowInfo] = useState(null);

    const AddToCart = (item, quantity = 1) => {
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
        setShowInfo(item.name + ' добавлен в корзину');
    };

    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    }

    const toggleCart = () => setCartVisible(!cartVisible);

    const hideInfo = () => setShowInfo(null);

    return (
        <main className="container">
            <CartIcon length={cartItems.length} toggleCart={toggleCart} />
            {showInfo && <ShowInfo text={showInfo} hideInfo={hideInfo} />}
            <ShopList addToCart={AddToCart} />
            {cartVisible ? (
                <CartList items={cartItems} toggleCart={toggleCart} removeFromCart={removeFromCart} />
            ) : (
                null
            )}
        </main>
    );
}