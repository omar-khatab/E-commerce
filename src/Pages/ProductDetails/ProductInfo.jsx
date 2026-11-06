import { FaRegHeart, FaShare, FaShoppingCart, FaStar } from "react-icons/fa"
import { FaRegStarHalfStroke } from "react-icons/fa6"
import { CartContext } from "../../Components/Context/CartContext"
import { useContext } from "react"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"

function ProductInfo({product}) {
    const { t } = useTranslation()
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
            <p>{t("product.addedToCart")}</p>
            <button className="btn" onClick={() => navigate("/cart")}>{t("product.viewCart")}</button>
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
                t("product.removedFromFav", { title: product.title })
            )
        } else {
            addToFavorite(product)
            toast.success(
                t("product.addedToFav", { title: product.title })
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
                    <p className="price"><bdi>$ {product.price}</bdi></p>
                    <h5>{t("details.availability")} : <span>{t(`details.status.${product.availabilityStatus}`, { defaultValue: product.availabilityStatus })}</span></h5>
                    <h5>{t("details.brand")} : <span>{product.brand}</span></h5>
                    <h5>{t("details.stock")} : <span>{product.stock}</span></h5>
                    <p className="desc" dir="auto">{product.description}</p>
                    <h5 className="stock">{t("details.hurryUp")} <span>{t("details.leftInStock", { count: product.stock })}</span></h5>
                    <button className={`btn ${isInCart ? "inCart" : "" }`} onClick={handleAddToCart}>
                        {isInCart ? t("details.itemInCart") : t("details.addToCart")} <FaShoppingCart />
                    </button>
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