import { createContext, useEffect, useState } from "react"

export const CartContext = createContext() 
function CartProvider({children}) {

    // Cart
    const [cartItem, setCartItem] = useState(() => {
        // store target(inside cart) products inside the local storage
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : []
    })

    // Favorites
    const [favorites, setFavorites] = useState(() => {
        // store target(inside cart) products inside the local storage
        const savedFavorites = localStorage.getItem("favoritesItems");
        return savedFavorites ? JSON.parse(savedFavorites) : []
    })

    // increase quantity of products
    const increaseQuantity = (id) => {
        setCartItem((prevItem) =>  prevItem.map((item) => {
            return item.id === id ? {...item, quantity : item.quantity + 1} : item
        }))
    }

    // decrease quantity of products
    const decreaseQuantity = (id) => {
        setCartItem((prevItem) =>  prevItem.map((item) => {
            return item.id === id && item.quantity > 1 ? {...item, quantity : item.quantity - 1} : item
        }))
    }

    // remove from cart
    const removeFromCart = (id) => {
        setCartItem((prevItem) => prevItem.filter(item => item.id !== id))
    }

    const addToCart = (item) => {
        setCartItem((prevItem) => [...prevItem, {...item, quantity : 1}])
    }

    const addToFavorite = (item) => {
        setFavorites((prev) => {
            if (prev.some((i) => i.id == item.id)) return prev
            else return [...prev, item]
        })
    }

    // remove from favorite

    const removeFromFav = (id) => {
        setFavorites((prev) => prev.filter((i) => i.id != id ))
    }

    useEffect(() => {
        localStorage.setItem("cartItems" , JSON.stringify(cartItem))
    }, [cartItem])

    useEffect(() => {
        localStorage.setItem("favoritesItems" , JSON.stringify(favorites))
    }, [favorites])
    return (
        <CartContext.Provider value={{cartItem, addToCart, increaseQuantity , decreaseQuantity, removeFromCart, favorites, addToFavorite, removeFromFav}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider