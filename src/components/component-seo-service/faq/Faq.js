import React from "react"
import "./faq.scss"
import ListItems from "./list-item/ListItem"
import WrapListItem from "./WrapListItem"
import { graphql, StaticQuery } from "gatsby"
const ListItem = WrapListItem(ListItems)
export default function Faq() {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allFaqJson {
              edges {
                node {
                  list1 {
                    content
                    id
                    title
                  }
                  list2 {
                    content
                    id
                    title
                  }
                }
              }
            }
          }
        `}
        // SidebarItemsQuery :Cùng tên vơi file Json
        render={data => (
          <>
            <div className="fqa">
              <div className="fqa__wrap">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <div className="list-content">
                  <div className="list-item-faq">
                    <ul>
                      {data.allFaqJson.edges[0].node.list1.map(
                        (item, index) => {
                          return (
                            <ListItem
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          )
                        }
                      )}
                    </ul>
                    {/* {console.log(data.allFaqJson.edges)} */}
                  </div>
                  <div className="list-item-faq">
                    <ul>
                      {data.allFaqJson.edges[1].node.list2.map(
                        (item, index) => {
                          return (
                            <ListItem
                              key={index}
                              title={item.title}
                              content={item.content}
                            />
                          )
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      />
    </>
  )
}
