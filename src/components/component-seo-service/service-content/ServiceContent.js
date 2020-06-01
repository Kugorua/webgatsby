import React from "react"
import "./service-content.scss"
export default function ServiceContent(props) {
  return (
    <div>
      <section className="service-content ">
        <div className="grid-container">
          <div className="align-middle">
            <div
              className="medium-12 large-7 cell content "
              style={{ order: props.number }}
            >
              <h2>Detailed Transparent Reporting</h2>
              <p>
                When you select an SEO company you have a right to know what you
                are paying for. We don’t believe in secrets and we are proud of
                our work. We keep you informed every step of the way.
              </p>
              <ul>
                <li className="e801">
                  <i
                    className="fas fa-search-dollar"
                    style={{ fontSize: 60, color: "#57a6fc" }}
                  />

                  <p>
                    Keyword ranking reports. Our client dashboard provides you
                    with detailed reporting on your search rankings, complete
                    with search position screenshots and updates every 24 hours.
                  </p>
                </li>
                <li className="e814">
                  {" "}
                  <i
                    class="far fa-clipboard"
                    style={{ fontSize: 60, color: "#57a6fc" }}
                  ></i>{" "}
                  <p>
                    Link building reports. You don’t need to guess what quality
                    links we have built for you. Each month you will receive a
                    report showing every link that we have acquired for your
                    website.
                  </p>
                </li>
                <li className="e80f">
                  <i
                    class="fas fa-paperclip"
                    style={{ fontSize: 60, color: "#57a6fc" }}
                  ></i>
                  <p>
                    {" "}
                    Website traffic reports. Our client dashboard integrates
                    with Google Analytics so that you can have access to all of
                    your important SEO campaign information all in one location.
                  </p>
                </li>
              </ul>
            </div>
            <div className="medium-12 large-5 cell double-screenshot ">
              {" "}
              <img
                className="img1"
                src="https://www.highervisibility.com/wp-content/uploads/2018/01/reporting-analytics-e1514929065322.webp"
                alt="Service Section "
              />
              <img
                className="img2"
                src="https://www.highervisibility.com/wp-content/uploads/2018/01/reporting-dashboard.webp"
                alt="Service Section "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
