import React from 'react'
import styles from "./header.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
// import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
// import { faPause } from "@fortawesome/free-solid-svg-icons"
import Headlinescarousel from './carousels/Headlines'

const HeadlinesSlider = () => {
    return (
        <div className={styles.slider} >
            <div className={styles.topnews} >Top News</div>
            <div className={styles.slidenews}>
                <Headlinescarousel />
            </div>


        </div>
    )
}

export default HeadlinesSlider