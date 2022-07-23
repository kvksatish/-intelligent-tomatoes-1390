import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Search2Icon } from "@chakra-ui/icons"


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


  return (
    <div className={scroll ? styles.topbar2 : styles.topbar} >
      <div >
        <img className={styles.logo} src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
      </div>
      <div>
        <Search2Icon style={{ cursor: "pointer" }} boxSize={"24px"} />

      </div>

    </div>
  )
}

export default Header