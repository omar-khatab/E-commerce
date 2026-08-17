import { FaRegHeart, FaShare, FaShoppingCart, FaStar } from "react-icons/fa"
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { CartContext } from "../../Components/Context/CartContext"
import { useContext } from "react"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"

function ProductInfo({product}) {

    const {cartItem, addToCart, favorites, addToFavorite, removeFromFav} = useContext(CartContext)
    // target the product that in the cart
    const isInCart = cartItem.some((i) => i.id === product.id)
    const navigate = useNavigate()
    const handleAddToCart = () => {
    addToCart(product)
    toast.success(
        <div className="toastWrapper">
        <img src= {product.images[0]} alt="" className="toastImg"/>

        <div className="toastContent">
            <strong>{product.title}</strong>
            <p>added to Cart</p>
            <button className="btn" onClick={() => navigate("/cart")}>View Cart</button>
        </div>
        </div>
    )
    }

    // target the product that in the favorite
    const isInfavorite = favorites.some((i) => i.id === product.id)

    const handleAddTOFav = () => {
        if (isInfavorite) {
            removeFromFav(product.id)
            toast.error(
            `${product.title} removed from favorites`
        )
        } else {
            addToFavorite(product)
            toast.success(
            `${product.title} added to favorites`
        )
        }
    }

    return (
    <div className="detailsItem">
                    <h1 className="name">{product.title}</h1>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                    <p className="price">$ {product.price}</p>
                    <h5>Availability : <span>{product.availabilityStatus}</span></h5>
                    <h5>Brand : <span>{product.brand}</span></h5>
                    <h5>Stock : <span>{product.stock}</span></h5>
                    <p className="desc">{product.description}</p>
                    <h5 className="stock">Harry Up ! Only <span>{product.stock} products left in stock</span></h5>
                    <button className={`btn ${isInCart ? "inCart" : "" }`} onClick={handleAddToCart}>
                        {isInCart ? "Item in cart" : "Add to cart"} <FaShoppingCart /></button>
                    <div className="icons">
                        <span 
                        className={`${isInfavorite ? "inFav" : "" }`}
                        onClick={handleAddTOFav}><FaRegHeart /></span>
                        <span><FaShare /></span>
                    </div>
    </div>
  )
}

export default ProductInfo