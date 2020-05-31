import React from "react"
import "./partners.scss"
import { graphql, StaticQuery } from "gatsby"
const Partners = () => (
  <StaticQuery
    query={graphql`
      query {
        allPartnerJson {
          edges {
            node {
              id
              title
              parameter
              content
              img
            }
          }
        }
      }
    `}
    // SidebarItemsQuery :Cùng tên vơi file Json
    render={data => (
      <>
        <div className="partners">
          <div className="partners__wrap">
            <div className="partners__content">
              <div className="partners__content__intro">
                <h2>Our Partners</h2>
                <p>
                  From small businesses to Fortune 1000 – hundreds of companies
                  rely on HigherVisibility to help grow their revenue through
                  digital marketing. Utilizing our years of experience and
                  expertise, we are able to customize solutions to meet your
                  specific needs regardless of size or industry.
                </p>
              </div>
            </div>
            <div className="partners__content">
              {data.allPartnerJson.edges.map((item, index) => {
                return (
                  <div className="cell partner" key={index}>
                    <div className="case-study-logo">
                      <a href="https://www.highervisibility.com/case-study/allied-van-lines/">
                        <img src={item.node.img} alt="Allied Van Lines Logo" />
                      </a>
                    </div>
                    <h3>
                      <a href="https://www.highervisibility.com/case-study/allied-van-lines/">
                        {item.node.title}
                      </a>
                    </h3>
                    <p className="stat-number">{item.node.parameter}</p>
                    <p className="stat-type">{item.node.content}</p>
                  </div>
                )
              })}
              <div className="cell testimonial">
                <p className="company-name">
                  Caliber Collision - Search Engine Optimization
                </p>
                <p>
                  “HigherVisibility has delivered nothing but exemplary results
                  since taking over Caliber Collision’s SEO/PPC account. Since
                  taking over our account, HigherVisibility increased Caliber’s
                  first through third Google rankings by 142% along with
                  vaulting Caliber’s website to the top online authority in the
                  collision industry. And Caliber’s PPC ROI across 25 markets
                  improved over 12X the previous calendar year. Nuff said!”
                </p>
                <div className="details">
                  <div className="testimonial-client">
                    <p className="name">Greg Clark</p>
                    <p className="title">CMO</p>
                  </div>
                  <div className="testimonial-logo">
                    {" "}
                    <img
                      src="https://www.highervisibility.com/wp-content/uploads/2017/04/caliber-dark-bg.webp"
                      alt="Greg Clark Testimonial Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)
export default Partners
