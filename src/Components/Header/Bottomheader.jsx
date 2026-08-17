
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { v4 as uuidv4 } from 'uuid';
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

  const arrCategories = categories.map((c) => {
  return <li key={uuidv4()}><Link to ={`/category/${c.slug}`}>{c.name}</Link></li>
});

  const location = useLocation()

  const linksNav = [
  {title : "Home", link : "/"},
  {title : "About", link : "/about"},
  {title : "Blog", link : "/blog"},
  {title : "Contact", link : "/contact"},
  ]

  useEffect(() => {
    setIsOpen(false)
  },[location])

  const linksBottomHeader = linksNav.map((l) => {
    return <li key={uuidv4()} className={location.pathname == l.link ? "active" : "" }>
            <Link to = {l.link}>{l.title}</Link>
          </li>
  })

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
              {arrCategories}
            </div>
          </div>
          <div className="navLinks">
            {linksBottomHeader}
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