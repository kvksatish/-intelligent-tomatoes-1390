import React, { useEffect, useState } from 'react'
import "./Lb.css"
// import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

const Leftbar = () => {
  const [scroll, setscroll] = useState(false)
  var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY < 60 || window.scrollY > (limit / 2)) {

        setscroll(false)
      }
      else {

        setscroll(true)
      }
      console.log(window.scrollY, limit)
    })
  }, [limit])




  let navigate = useNavigate();
  return (
    <div>
      <div className={scroll ? "cont2" : "cont"} >

        <div className='pagesdivs' onClick={() => navigate("/new")} ><img src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" alt="" />Latest News</div>

        <div className='pagesdivs' onClick={() => navigate("/trending photos")} ><img src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg" alt="" />Trending Photos</div>

        <div className='pagesdivs' onClick={() => navigate("/trending videos")} ><img src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg" alt="" />Trending Videos</div>

        <div className='pagesdivs' onClick={() => navigate("/india")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" alt="" /> India</div>
        <div className='pagesdivs' onClick={() => navigate("/entertainment")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" alt="" /> Entertainment</div>
        <div className='pagesdivs' onClick={() => navigate("/sports")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" alt="" /> Sports</div>

        <div className='pagesdivs' onClick={() => navigate("/education")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-education.svg" alt="" /> Education</div>

        <div className='pagesdivs' onClick={() => navigate("/viral")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" alt="" /> Viral News</div>
        <div className='pagesdivs' onClick={() => navigate("/lifestyle")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" alt="" /> Lifestyle</div>
        <div className='pagesdivs' onClick={() => navigate("/business")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" alt="" /> Business</div>
        <div className='pagesdivs' onClick={() => navigate("/world")} > <img src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" alt="" /> World</div>
        <div className='pagesdivs' onClick={() => window.open("https://www.ezmall.com/?utm_source=Dnaindia.com&utm_medium=Affiliate&utm_campaign=Dnaindia.com_Traffic")} > <img src="https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png" alt="" /> EzMall</div>

      </div></div >
  )
}

export default Leftbar