import React, { useState } from "react"
import Link from "gatsby-link"
import "./nav.scss"
export default function Nav() {
  const [isNav, setIsNav] = useState(false)
  const showNav = () => {
    setIsNav(!isNav)
  }
  return (
    <div className="nav">
      <div className="nav__wrap">
        <div className="nav__logo">
          <Link to="/">
            <img
              src="https://www.highervisibility.com/wp-content/themes/highervisibility_new/img/header-logo.png"
              alt="HigherVisibility Company Logo"
            />
          </Link>
        </div>
        <div className={`nav__main ${isNav && "nav__main-800"}`}>
          <ul className="nav__main-list">
            <li className="nav__main-list-item">
              <p>SERVICES</p>
              <div className="list-menu">
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <Link to="/seo-service">Page 1</Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link to="/contact">Page 2</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__main-list-item">
              <p>ABOUT</p>
              <div className="list-menu">
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href={"#"}>About Us</a>
                  </li>
                  <li className="sub-menu-item">
                    <a href={"#"}>Management Team</a>
                  </li>
                  <li className="sub-menu-item">
                    <a href={"#"}>Design Portfolio</a>
                  </li>
                  <li className="sub-menu-item">
                    <a href={"#"}>Client Reviews</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__main-list-item">
              <p>LEARN</p>
              <div className="list-menu">
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href={"#"}>BLOG</a>
                  </li>
                  <li className="sub-menu-item">
                    <a href={"#"}>RESOURCES</a>
                  </li>
                  <li className="sub-menu-item">
                    <a href={"#"}>FREE SEO TOOLS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__main-list-item">
              <p>
                <Link to="/contact">CONTACT</Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="contact">
          <a href={"#"}>888.212.4458</a>
          <a href={"#"}>Let's Talk</a>
        </div>
        <div className="icon-nav" onClick={showNav} role="presentation">
          <i className="fas fa-bars" style={{ fontSize: 30, color: "white" }} />
        </div>
      </div>
    </div>
  )
}
