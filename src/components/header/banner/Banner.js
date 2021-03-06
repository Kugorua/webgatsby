import React from "react"
import "./banner.scss"
export default function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__wrap">
        <h1>
          {props.title}
          <br style={{ display: props.display }} /> {props.titleSub}
          <br style={{ display: props.display }} />
          <em style={{ display: props.display }}>online leads</em>
          {props.titleContent}
          <em style={{ display: props.display }}>sales</em>
        </h1>
        <p style={{ display: props.displaycontent }}>{props.content}</p>
        <a href={"#"} style={{ display: props.displaybtn }}>
          SCHEDULE A CONSULTATION
        </a>
      </div>
    </div>
  )
}
