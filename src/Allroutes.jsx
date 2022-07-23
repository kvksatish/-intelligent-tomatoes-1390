import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages.jsx/Home'
import NewsPage from './pages.jsx/NewsPage'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:news' element={<NewsPage />} />
            {/* <Route path='/World' element={<NewsPage />} />
            <Route path='/Entertainment' element={<NewsPage />} />
            <Route path='/Business' element={<NewsPage />} />
            <Route path='/Sports' element={<NewsPage />} />
            <Route path='/Viral' element={<NewsPage />} />
            <Route path='/Lifestyle' element={<NewsPage />} />
            <Route path='/LatestNews' element={<NewsPage />} /> */}
        </Routes>

    )
}

export default Allroutes