/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
const Layout = props => {
  return (
    <div className="app">
      <Header
        title={props.title}
        titleSub={props.titleSub}
        titleContent={props.titleContent}
        display={props.display}
        content={props.content}
        background={props.background}
      />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout
