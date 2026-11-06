
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Bottomheader() {
  
  const { t } = useTranslation();
  const [categories, setCategories] = useState([])
  const [isOpen,setIsOpen] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])


  const location = useLocation()

const linksNav = [
  { id: 1, key: "home", link: "/" },
  { id: 2, key: "about", link: "/about" },
  { id: 3, key: "blog", link: "/blog" },
  { id: 4, key: "contact", link: "/contact" },
];

  useEffect(() => {
    setIsOpen(false)
  },[location])


  return (
    <div className="bottomHeader">
      <div className="container">
        <nav>
          <div className="categoryNav">
            <div className="categoryBtn" onClick={() => setIsOpen(!isOpen)}>
              <p>{t("nav.browseCategory")}</p>
              <IoIosArrowDown />
            </div>
            <div className={`categoryList  ${isOpen ? "active" : "" }`}>
              {categories.map((c) => {
                return <li key={c.slug}>
                  <Link to ={`/category/${c.slug}`}>{t(`categories.${c.slug}`, { defaultValue: c.name })}</Link>
                  </li>
              })}
            </div>
          </div>
          <div className="navLinks">
            {linksNav.map((l) => {
            return <li key={l.id} className={location.pathname == l.link ? "active" : "" }>
                    <Link to = {l.link}>{t(`nav.${l.key}`)}</Link>
                  </li>
            })}
          </div>
        </nav>
        <div className="categoryIcon">
          <Link to = "/"><PiSignInBold /></Link>
          <Link to = "/"><FaUserPlus /></Link>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Bottomheader