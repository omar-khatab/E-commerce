import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router'

function SearchBox () {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()
    const [suggestion, setSuggestion] = useState([])
    const location = useLocation()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        // empty the suggestion search after submit
        setSuggestion([])
    }

    // search with suggestion
    useEffect(() => {
        const fetchSuggestion = async () => {

            // no fetch if input is empty and empty the suggestion
            if(!searchTerm.trim()) {
                setSuggestion([])
                return
            }

            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                const data = await res.json()
                // in case of the data.products isn't existed make empty array and
                // slice to suggest five element only before press on the search
                setSuggestion(data.products.slice(0,5) || [])
            } catch (error) {
                console.error("Search Error :" , error)
            } 
        }
        // improve fetch on api and avoiding repetition
        const timeFetch = setTimeout(() => {
            fetchSuggestion()
        },300)

        return () => clearTimeout(timeFetch)
    },[searchTerm])
    
    // in case of move to another page, the suggestion will be closed
    useEffect(() => {
        setSuggestion([])
    },[location])


    return (
    <div className='searchBoxContainer'>
        <form onSubmit={handleSubmit} className="searchBox" >
            <input type = "text" name = "search" id = "search" placeholder="Search for Products " 
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete='off'/>
            <button type="submit">
                <FaSearch />
            </button>
        </form>
        {suggestion.length > 0 && 
        (
            <ul className="suggestions">
                {suggestion.map((item) => {
                    return <Link key={item.id} to = {`/products/${item.id}`}>
                    <li>
                                <img src={item.images[0]} alt="" />
                                <span>{item.title}</span>
                            </li>
                    </Link>
                })}
            </ul>
        )}
    </div>
    )
}

export default SearchBox