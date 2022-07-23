import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DtrnContext } from '../context/DtrnContext'

import "./Np.css"
const NewsReader = ({ data }) => {
    const { putdt } = useContext(DtrnContext)
    const navigate = useNavigate()
    return (
        <div className='smdiv' onClick={() => {
            putdt(data)
            navigate("/desc")
        }} >
            <div className='imgdiv' > <img src={data.image} alt="" /></div>
            <div className='text' >
                {data.title}
            </div>
        </div>
    )
}

export default NewsReader