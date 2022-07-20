import React from 'react'
import styles from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { faPause } from "@fortawesome/free-solid-svg-icons"
import Headlinescarousel from './carousels/Headlines'

const HeadlinesSlider = () => {
  return (
      <div className={styles.slider} >
          <div className={styles.topnews} >Top News</div>
          <div className={styles.slidenews}>
              <Headlinescarousel/>
          </div>
          <div  className={styles.navbtns} >
              <FontAwesomeIcon style={{fontSize:"20px",cursor:"pointer"}} icon={faCaretLeft} />
              
                  <FontAwesomeIcon className={styles.pause} icon={faPause} />
              
              <FontAwesomeIcon style={{fontSize:"20px",cursor:"pointer"}} icon={faCaretRight} />
          </div>
      </div>
  )
}

export default HeadlinesSlider