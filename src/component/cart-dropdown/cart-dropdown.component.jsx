import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
      navigate('/checkout')
    }

    return (
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    );
  };

export default CartDropdown;