import React from "react"
import "./company-recognition.scss"
import Slider from "react-slick"
import { graphql, StaticQuery } from "gatsby"
const CompanyRecognition = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allCompanyJson {
              edges {
                node {
                  logo
                  name
                  intro
                }
              }
            }
          }
        `}
        // SidebarItemsQuery :Cùng tên vơi file Json
        render={data => (
          <>
            <div className="company-recognition">
              <div className="company-recognition__wrap">
                <h2>Company Recognitions</h2>
                <Slider {...settings}>
                  {data.allCompanyJson.edges.map((item, index) => {
                    return (
                      <>
                        <div className="item-wrap" key={index}>
                          <div className="item-recognition">
                            {" "}
                            <img src={item.node.logo} alt="UpCity Logo" />
                            <p>{item.node.name}</p>
                            <p>{item.node.intro}</p>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </Slider>{" "}
              </div>
            </div>
          </>
        )}
      />
    </>
  )
}
export default CompanyRecognition
