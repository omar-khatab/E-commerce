
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({item}) {
  const {cartItem, addToCart, favorites, addToFavorite, removeFromFav} = useContext(CartContext)

  // target the product that in the cart
  const isInCart = cartItem.some((i) => i.id === item.id)

  const navigate = useNavigate()
  const handleAddToCart = () => {
    addToCart(item)
    toast.success(
      <div className="toastWrapper">
        <img src= {item.images[0]} alt="" className="toastImg"/>

        <div className="toastContent">
          <strong>{item.title}</strong>
          <p>added to Cart</p>
          <button className="btn" onClick={() => navigate("/cart")}>View Cart</button>
        </div>
      </div>
      
    )
  }

  // target the product that in the favorite
  const isInfavorite = favorites.some((i) => i.id === item.id)

  const handleAddTOFav = () => {
    if (isInfavorite) {
      removeFromFav(item.id)
      toast.error(
        `${item.title} removed from favorites`
      )
    } else {
      addToFavorite(item)
      toast.success(
        `${item.title} added to favorites`
      )
    }
  }

  return (
    <div className ={`product ${isInCart ? "inCart" : "" }`}>
      <Link to = {`/products/${item.id}`}>
        <span className="statusCart"><FaCheck /> In cart</span>

        <div className="imgProduct">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="nameProduct">
          {item.title}
        </p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <span className="price">$ {item.price}</span>
        <div className="icons">
          <span onClick={(e) => {
            e.preventDefault()
            handleAddToCart()
          }}><FaCartArrowDown /></span>
          <span
          onClick={(e) => {
            e.preventDefault()
            handleAddTOFav()
          }}
          className={isInfavorite ? "inFav" : ""}
          ><FaRegHeart/></span>
          <span><FaShare /></span>
        </div>
      </Link>
    </div>
  )
}

export default Product