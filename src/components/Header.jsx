import React, { useEffect } from 'react'
import styles from "./header.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Search2Icon } from "@chakra-ui/icons"


const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => console.log(window.scrollY))
  }, [])


  return (
    <div className={styles.topbar} >
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