import React from 'react'
import "./Lb.css"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Leftbar = () => {
  return (
    <div className='cont' >

      <div className='pagesdivs'><img src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" alt="" />Latest News</div>

      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" alt="" /> India</div>

      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" alt="" /> Entertainment</div>
      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" alt="" /> Sports</div>
      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" alt="" /> Viral News</div>
      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" alt="" /> Lifestyle</div>
      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" alt="" /> Business</div>
      <div className='pagesdivs'> <img src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" alt="" /> World</div>

    </div>
  )
}

export default Leftbar