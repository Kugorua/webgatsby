import React from "react"
import { graphql, StaticQuery } from "gatsby"
const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        allSidebarItemsJson {
          edges {
            node {
              label
              img
            }
          }
        }
      }
    `}
    // SidebarItemsQuery :Cùng tên vơi file Json
    render={data => (
      <>
        <h1>{data.allSidebarItemsJson.edges[0].node.label}</h1>
        <img src={data.allSidebarItemsJson.edges[0].node.img} />
      </>
    )}
  />
)
export default Sidebar
