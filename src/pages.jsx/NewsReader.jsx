import React, { useContext } from 'react'
import { Dtrn } from '../context/Dtrn'
import "./Np.css"
const NewsReader = ({ data }) => {
    const { putdt, getdt } = useContext(Dtrn)
    return (
        <div className='smdiv' onClick={() => {
            putdt(data)
            console.log(getdt())
        }} >
            <div className='imgdiv' > <img src={data.image} alt="" /></div>
            <div className='text' >
                {data.title}
            </div>
        </div>
    )
}

export default NewsReader