import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Product from "../../Components/SlideProduct/Product"
import './CategoryPage.css'
import SlideProductLoading from "../../Components/SlideProduct/SlideProductLoading";
import PageTransition from "../../Components/PageTransition";

function CategoryPage() {
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
                <h2>{category.replace("-", " ")} : {categoryProducts.limit}</h2>
                <p>Add bestselling products to weekly line up</p>
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