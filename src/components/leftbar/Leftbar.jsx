import React, { useEffect, useState } from 'react'
import "./Lb.css"
// import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

const Leftbar = () => {
  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {

        setscroll(false)
      }
      else {
        setscroll(true)
      }
    })
  }, [])

  let navigate = useNavigate();
  return (
    <div>
      <div className={scroll ? "cont2" : "cont"} >

        <div className='pagesdivs' onClick={() => navigate("/new")} ><img src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" alt="" />Latest News</div>
        <div className='pagesdivs' onClick={() => navigate("/india")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" alt="" /> India</div>
        <div className='pagesdivs' onClick={() => navigate("/entertainment")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" alt="" /> Entertainment</div>
        <div className='pagesdivs' onClick={() => navigate("/sports")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" alt="" /> Sports</div>
        <div className='pagesdivs' onClick={() => navigate("/viral")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" alt="" /> Viral News</div>
        <div className='pagesdivs' onClick={() => navigate("/lifestyle")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" alt="" /> Lifestyle</div>
        <div className='pagesdivs' onClick={() => navigate("/business")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" alt="" /> Business</div>
        <div className='pagesdivs' onClick={() => navigate("/world")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" alt="" /> World</div>

      </div></div>
  )
}

export default Leftbar