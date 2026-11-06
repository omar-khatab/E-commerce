import { useContext } from "react"
import { CartContext } from "../../Components/Context/CartContext"
import PageTransition from "../../Components/PageTransition"
import Product from "../../Components/SlideProduct/Product";
import { useTranslation } from "react-i18next"
function Favorites () {
    const {favorites} = useContext(CartContext)
    const { t } = useTranslation()
  return (
    <PageTransition>
        <div className="categoryProducts favoritePage">
            <div className="container">
                <div className="topSlide">
                    <h2>{t("favorites.title")}</h2>
                </div>
                {favorites.length == 0 ? (
                    <p>{t("favorites.empty")}</p>
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