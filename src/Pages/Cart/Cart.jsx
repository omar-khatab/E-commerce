import { useContext } from "react"
import { CartContext } from "../../Components/Context/CartContext"
import { v4 as uuidv4 } from 'uuid';
import { IoTrashBin } from "react-icons/io5";
import './Cart.css'
import PageTransition from "../../Components/PageTransition";

function Cart() {
    const {cartItem, increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext)
    console.log(cartItem)

    // calculate total price of products that inside the cart
    const totalPrice = cartItem.reduce((a, c) =>  a + c.price * c.quantity ,0)

    return (
        <PageTransition>
            <div className="checkout">
                <div className="orderSummary">
                    <h1>Order Summary</h1>
                    <div className="items">
                        {/* Avoiding error in case of the cart is an empty */
                        cartItem.length == 0 ? (
                            <p>Your Cart is an empty</p>
                        ) : (
                            cartItem.map((item) => {
                                return <div className="itemCart" key={uuidv4()}>
                                    <div className="imageName">
                                        <div className="imgItem">
                                            <img src={item.images[0]} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p className="priceItem">${item.price}</p>
                                            <div className="quantityControl">
                                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                <span className="quantity">{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="deleteItem" onClick={() => removeFromCart(item.id)}><IoTrashBin /></button>
                                </div>
                            })
                        )
                        }
                    </div>
                    <div className="bottomSummary">
                        <div className="shopTable">
                            <p>Total</p>
                            <span className="totalCheckout">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="buttonDiv">
                            <button type="submit">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default Cart