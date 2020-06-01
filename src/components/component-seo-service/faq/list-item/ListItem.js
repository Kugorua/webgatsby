import React from "react"
import "./list-item.scss"
export default function ListItem(props) {
  return (
    <>
      <li
        role="presentation"
        key={props.key}
        className="item-faq"
        onClick={props.clickShowList}
      >
        <h3 className="item-title">
          <i
            className="fas fa-question-circle"
            style={{ color: "#717482" }}
          ></i>
          <p>{props.title}</p>
          {props.isShow ? (
            <i class="fas fa-angle-down"></i>
          ) : (
            <i class="fas fa-angle-right"></i>
          )}
        </h3>

        {props.isShow && (
          <>
            <p>{props.content}</p>
          </>
        )}
      </li>
    </>
  )
}
