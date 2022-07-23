import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DtrnContext } from '../context/DtrnContext'
import styles from "./Bn.module.css"
const BigNews = ({ data }) => {
    const { putdt } = useContext(DtrnContext)
    const navigate = useNavigate()
    return (
        <div className={styles.bgdiv} onClick={() => {
            putdt(data)
            navigate("/desc")
        }}  >
            <div className={styles.bgimgdiv} > <img src={data.image} alt="" /></div>
            <div className={styles.bgtext} >
                {data.title}
            </div>
        </div>
    )
}

export default BigNews