import React from "react"
import "./header.scss"
import Nav from "./nav/Nav"
import Banner from "./banner/Banner"
export default function Header(props) {
  return (
    <header className="header">
      <div className={props.background}>
        <Nav />
        <Banner
          title={props.title}
          titleSub={props.titleSub}
          titleContent={props.titleContent}
          display={props.display}
          displaybtn={props.displaybtn}
          displaycontent={props.displaycontent}
          content={props.content}
        />
      </div>
    </header>
  )
}
