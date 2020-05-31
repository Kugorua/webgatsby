import React from "react"
import "./latest-blogs.scss"
import Slider from "react-slick"
import { graphql, StaticQuery } from "gatsby"
export default function LatestBlogs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 813,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          allLatestBlogsJson {
            edges {
              node {
                date
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
          <div className="latest-blogs">
            <div className="latest-blogs__wrap">
              <h2>Latest from the Blog</h2>
              <Slider {...settings}>
                {data.allLatestBlogsJson.edges.map((item, index) => {
                  return (
                    <div className="owl-item active" key={index}>
                      <div className="item-blog">
                        <p className="date">{item.node.date}</p>
                        <h3>
                          <a href="https://www.highervisibility.com/blog/how-to-get-more-leads/">
                            {item.node.title}
                          </a>
                        </h3>
                        <p className="item-blog-content">{item.node.content}</p>
                      </div>
                    </div>
                  )
                })}
              </Slider>
              <div className="primarys">
                {" "}
                <a
                  href="https://www.highervisibility.com/blog"
                  className="button primary"
                >
                  See Our Blog
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    />
  )
}
