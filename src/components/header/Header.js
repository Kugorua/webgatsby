import React from "react"
import "./header.scss"
import Nav from "./nav/Nav"
import Banner from "./banner/Banner"
export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <Nav />
        <Banner />
      </div>
    </header>
  )
}
