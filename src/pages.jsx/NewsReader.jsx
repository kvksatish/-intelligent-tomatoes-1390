import React from 'react'
import "./Np.css"
const NewsReader = ({ data }) => {
    return (
        <div className='smdiv' >
            <div className='imgdiv' > <img src={data.image} alt="" /></div>
            <div className='text' >
                {data.title}
            </div>
        </div>
    )
}

export default NewsReader