
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


function Bottomheader() {

  const [categories, setCategories] = useState([])
  const [isOpen,setIsOpen] = useState(false)


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])


  const location = useLocation()

  const linksNav = [
  {id : 1, title : "Home", link : "/"},
  {id : 2, title : "About", link : "/about"},
  {id : 3, title : "Blog", link : "/blog"},
  {id : 4, title : "Contact", link : "/contact"},
  ]

  useEffect(() => {
    setIsOpen(false)
  },[location])


  return (
    <div className="bottomHeader">
      <div className="container">
        <nav>
          <div className="categoryNav">
            <div className="categoryBtn" onClick={() => setIsOpen(!isOpen)}>
              <p>Browser Category</p>
              <IoIosArrowDown />
            </div>
            <div className={`categoryList  ${isOpen ? "active" : "" }`}>
              {categories.map((c) => {
                return <li key={c.slug}><Link to ={`/category/${c.slug}`}>{c.name}</Link></li>
              })}
            </div>
          </div>
          <div className="navLinks">
            {linksNav.map((l) => {
            return <li key={l.id} className={location.pathname == l.link ? "active" : "" }>
                    <Link to = {l.link}>{l.title}</Link>
                  </li>
            })}
          </div>
        </nav>
        <div className="categoryIcon">
          <Link to = "/"><PiSignInBold /></Link>
          <Link to = "/"><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  )
}

export default Bottomheader