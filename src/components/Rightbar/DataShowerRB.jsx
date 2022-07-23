import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DtrnContext } from '../../context/DtrnContext'
import "./dsrb.css"

const DataShowerRB = ({ data }) => {
    const { putdt } = useContext(DtrnContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className='smdivrb' onClick={() => {
                putdt(data)
                navigate("/desc")
            }} >
                <div className='imgdivrb' > <img src={data.image} alt="" /></div>
                <div className='textrb' >
                    {data.title}
                </div>
            </div>
        </div>
    )
}

export default DataShowerRB