import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        scrollTo({
            top: 0,
        })
    },[pathname])
  return null
}

export default ScrollToTop