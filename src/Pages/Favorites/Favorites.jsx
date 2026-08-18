import { useContext } from "react"
import { CartContext } from "../../Components/Context/CartContext"
import PageTransition from "../../Components/PageTransition"
import Product from "../../Components/SlideProduct/Product";

function Favorites () {
    const {favorites} = useContext(CartContext)

  return (
    <PageTransition>
        <div className="categoryProducts favoritePage">
            <div className="container">
                <div className="topSlide">
                    <h2>Your Favorite</h2>
                </div>
                {favorites.length == 0 ? (
                    <p>No favorite Products</p>
                ) : (
                    <div className="products">
                        {favorites.map((item) => {
                            return <Product item={item} key={item.id}/>
                        })}
                    </div>
                )}
            </div>
        </div>
    </PageTransition>
  )
}

export default Favorites