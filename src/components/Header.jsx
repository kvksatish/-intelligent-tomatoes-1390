import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import Searchbar from './Searchbar'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import { useNavigate } from "react-router-dom"

const Header = () => {
  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {

        setscroll(false)
      }
      else {
        setscroll(true)
      }
    })
  }, [])
  let navigate = useNavigate();

  return (
    <div className={scroll ? styles.topbar2 : styles.topbar} >
      <div onClick={() => navigate("/")} >
        <img className={styles.logo} src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
      </div>
      <Searchbar />


    </div>
  )
}

export default Header