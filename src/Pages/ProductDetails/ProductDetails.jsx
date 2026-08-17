import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './ProductDetails.css'
import SlideProduct from "../../Components/SlideProduct/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../Components/SlideProduct/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../Components/PageTransition";
function Productdetails() {
    
    const {id} = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState(null)
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    }, [id])
    
    
    useEffect(() => {
        // to confirm that the product is existed 
        if(!product) return

        fetch(`https://dummyjson.com/products/category/${product.category}`)
        .then((res) => res.json())
        .then((data) => {
            setRelatedProducts(data.products)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoadingRelatedProducts(false))
    },[product])

    
    // if product is not found or error in fetch data
    if(!product) return <p>Product Not Found</p>

    return (
        <PageTransition>
        {/* show loading component of ProductDetails */}
        {loading ? (
            <ProductDetailsLoading/>
            ):(
            <div className="itemDetails">
                <div className="container">
                    <ProductImages product = {product}/>
                    <ProductInfo product = {product}/>
                </div>
            </div>
            )
        }
        
        {loadingRelatedProducts ? (
            <SlideProductLoading/>
            ):(
            <SlideProduct title = {product.category.replace("-", " ")} data = {relatedProducts} />
            )
        }
        </PageTransition>
    )
}

export default Productdetails