import './Header.css'
import logo from '../../imges/Logo-ULU-Tech-06-98x117.png'
import { useState, useEffect, useRef } from 'react'
import ModalNav from '../Modal/ModalNav'
import ModalSearch from '../Modal/ModalSearch'
import { motion } from "framer-motion"

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [showSearch, setShowSearch] = useState(false)


  return (
    <div id="home">
      <header>
        <div className="container">
          <motion.div
            initial={{ translateY: "100px" }}
            whileInView={{ translateY: "0px" }}
            transition={{ duration: .5 }}

            className="menu-navbar"
          >
            <div className="header-logo" >
              <a href=""><img src={logo} /></a>
            </div>
            <div className="links">
              <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#services"> Serveis</a> </li>
                <li> <a href="#about">About Us</a> </li>
                <li> <a href="#contact">Contact</a> </li>
              </ul>
            </div>
            <div className="controle"  >
              {!showNav && <i className="fa-solid fa-bars menu" onClick={() => setShowNav(!showNav)}></i>}
              {showNav && <i className="fa-solid fa-xmark close" onClick={() => setShowNav(false)}></i>}
              <i className="fa-solid fa-magnifying-glass SSearch" onClick={() => setShowSearch(!showSearch)}></i>
            </div>
          </motion.div>
          {showNav && <ModalNav showNav={showNav} onClose={() => setShowNav(false)} />}
          {showSearch && <ModalSearch setShowSearch={setShowSearch} />}
        </div>
      </header>
    </div>
  )
}

export default Header