import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageTransition from "../Components/PageTransition";
import SlideProductLoading from "../Components/SlideProduct/SlideProductLoading";
import Product from "../Components/SlideProduct/Product";

function SearchResults() {
    // get the string after query that inside the link of search
    const query = new URLSearchParams(useLocation().search).get("query")
    
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    // fetch search data
    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json()
                // in case of the data.products isn't existed
                setResults(data.products || [])
            } catch (error) {
                console.error("Search Error :" , error)
            } finally {
                setLoading(false)
            }
        }   
        // query isn't empty
        if (query) fetchResults();
    },[query])
    
    return (
        <PageTransition>
      <div className="categoryProducts">
      {loading ? (
        <SlideProductLoading />
      ): results.length > 0 ? (
        (
          <div className="container">
            <div className="topSlide">
                <h2>Results For : {query}</h2>
            </div>
          <div className="products">
            {results.map((item) => {
              return <Product item={item} key={item.id}/>
            })}
          </div>
      </div>
        )
      ) : (
      <div className="container">
            <p>Results Not Found</p>
      </div>
      )
      }
      </div>
    </PageTransition>
    )
}

export default SearchResults