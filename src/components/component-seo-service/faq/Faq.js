import React from "react"
import "./faq.scss"
import ListItems from "./list-item/ListItem"
import WrapListItem from "./WrapListItem"
const ListItem = WrapListItem(ListItems)
export default function Faq() {
  return (
    <div className="fqa">
      <div className="fqa__wrap">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="list-content">
          <div className="list-item-faq">
            <ul>
              <ListItem
                content="What is search engine optimization?"
                keys="0"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="1"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="2"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="3"
              />
            </ul>
          </div>
          <div className="list-item-faq">
            <ul>
              <ListItem
                content="What is search engine optimization?"
                keys="0"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="1"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="2"
              />
              <ListItem
                content="What is search engine optimization?"
                keys="3"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
