import React from 'react'
import styles from "./Bn.module.css"
const BigNews = ({ data }) => {
    return (
        <div className={styles.bgdiv} >
            <div className={styles.bgimgdiv} > <img src={data.image} alt="" /></div>
            <div className={styles.bgtext} >
                {data.title}
            </div>
        </div>
    )
}

export default BigNews