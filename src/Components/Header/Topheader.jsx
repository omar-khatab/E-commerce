import { Link } from "react-router"
import logo from "../../images/khatab-logo.png"
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import SearchBox from "./SearchBox";

function Topheader() {
    const {cartItem, favorites} = useContext(CartContext)
    return (
    <div className="topHeader">
        <div className="container">
            <Link to= "/"  className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <SearchBox/>
            <div className="headerIcons">
                <div className="icon">
                    <Link to="/favorites">
                    <FaRegHeart />
                    <span className="count">{favorites.length}</span>
                    </Link>
                </div>
                    <Link to = "/cart">
                <div className="icon">
                    <FaShoppingCart />
                    <span className="count">{cartItem.length}</span>
                </div>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Topheader