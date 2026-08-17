import Bottomheader from "./Components/Header/Bottomheader"
import Topheader from "./Components/Header/Topheader"
import Home from "./Pages/Home/Home"
import { Routes , Route } from "react-router"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import Cart from "./Pages/Cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./Components/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./Pages/CategoryPage/CategoryPage"
import SearchResults from "./Pages/SearchResults"
import Favorites from "./Pages/Favorites/Favorites"


function App() {

  return (
    <>
    <header>
      <Topheader/>
      <Bottomheader/>
    </header>

    <Toaster position = "bottom-right" toastOptions={{
      duration: 3500,
      style: {
        background : '#e9e9e9',
        borderRadius: '5px',
        padding: '14px'
      }
    }}/>
    <ScrollToTop/>
    <AnimatePresence mode="wait">
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/search" element = {<SearchResults/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/favorites" element = {<Favorites/>}/>
      <Route path = "/products/:id" element = {<ProductDetails/>} />
      <Route path = "/category/:category" element = {<CategoryPage />} />
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
