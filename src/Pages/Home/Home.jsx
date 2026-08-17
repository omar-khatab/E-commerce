import HeroSlider from "../../Components/HeroSlider"
import PageTransition from "../../Components/PageTransition";
import SlideProduct from "../../Components/SlideProduct/SlideProduct"
import SlideProductLoading from "../../Components/SlideProduct/SlideProductLoading";
import './Home.css'

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Home() {

  const [products, setProducts] = useState({})
  // handle loading in fetch data >> data take a time to fetch, so this will return error
  const [loading, setLoading] = useState(true)
    const categories = [
      "smartphones",
      "mobile-accessories",
      "laptops",
      "tablets",
      "sunglasses"
    ]


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const results = await Promise.all(
            categories.map(async (c) => {
              const res = await fetch(`https://dummyjson.com/products/category/${c}`)
              const data = await res.json();
              return {[c] : data.products}
            })
          )

          const productsData = Object.assign({}, ...results)

          setProducts(productsData)

        } catch (error) {
          console.log("Error Fetching" , error) 
        } finally {
          setLoading(false)
        }
      }

      fetchProducts()

    },[])
    
  return (
    <PageTransition>
      <HeroSlider/>
      {loading ? 
      // Loading component of slide product
      categories.map(() => {
      return <SlideProductLoading key={uuidv4()}/>
      })
      :
      categories.map((c) => {
        return <SlideProduct key={uuidv4()} data = {products[c]} title = {c.replace("-", " ")} />
      })
      }
  </PageTransition>
  )
}

export default Home