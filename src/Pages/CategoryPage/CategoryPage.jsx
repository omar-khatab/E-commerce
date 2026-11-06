import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Product from "../../Components/SlideProduct/Product"
import './CategoryPage.css'
import SlideProductLoading from "../../Components/SlideProduct/SlideProductLoading";
import PageTransition from "../../Components/PageTransition";
import { useTranslation } from "react-i18next"
function CategoryPage() {
  const { t } = useTranslation()
  const {category} = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      setCategoryProducts(data)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[category])
    
  return (
    <PageTransition>
      <div className="categoryProducts">
      {loading ? (
        <SlideProductLoading/>
      ):(
          <div className="container">
            <div className="topSlide">
              <h2>{t(`categories.${category}`, { defaultValue: category.replace("-", " ") })} : {categoryProducts.total}</h2>
              <p>{t("slide.subtitle")}</p>
            </div>
          <div className="products">
            {categoryProducts.products.map((item) => {
              return <Product item={item} key={item.id}/>
            })}
          </div>
      </div>
        )
      }
      </div>
    </PageTransition>
  )
}

export default CategoryPage