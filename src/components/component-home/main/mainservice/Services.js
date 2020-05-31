import React from "react"
import "./services.scss"
import imgSearch from "../../../../images/search.png"
import { graphql, StaticQuery } from "gatsby"
const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        allServiceJson {
          edges {
            node {
              id
              title
              content
            }
          }
        }
      }
    `}
    // SidebarItemsQuery :Cùng tên vơi file Json
    render={data => (
      <>
        <div className="services">
          <div className="services__wrap">
            <h2>Our Services</h2>
            <div className="grid-x">
              {data.allServiceJson.edges.map((item, index) => {
                return (
                  <div key={index} className="content-wrap">
                    <div className="medium-4 cell">
                      <img src={imgSearch} alt="" />
                      <h3>{item.node.title}</h3>
                      <p>{item.node.content}</p>

                      <a
                        href="https://www.highervisibility.com/search-engine-optimization/"
                        className="button secondary"
                      >
                        More
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </>
    )}
  />
)
//   return (

//   )
// }
export default Services
