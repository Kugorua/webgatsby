import React from "react"
import "./service-case-study.scss"
export default function ServiceCaseStudy() {
  return (
    <div>
      <section className="service-case-study">
        <div className="grid-container">
          <div className="grid-x">
            <div className="text-center">
              <div className="case_study_screenshot">
                {" "}
                <img
                  id="mobile_screenshot"
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/caliber-mobile.webp"
                  alt="Case Study Mobile Screenshot"
                />
                <div className="iphone-frame-container">
                  {" "}
                  <img
                    id="iphone-frame"
                    src="https://www.highervisibility.com/wp-content/themes/highervisibility_new/img/iphonex-frame.png"
                    alt="iPhone X Frame"
                  />
                </div>
              </div>
            </div>
            <div className="service-case-study__content">
              <h2>
                How We Helped Caliber Collision Generate a 141.51% Increase in
                Organic Conversions in 12 Months
              </h2>
              <p>
                Caliber Collision had extremely aggressive growth goals. Their
                business was expanding and they needed experts that could help
                them become a market leader.
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Their SEO service partner had to be able to recommend
                  best-in-class strategies and tactics to&nbsp;try to establish
                  and maintain Page 1 organic positioning on in every market
                  they are present in for branded and non-branded search terms.
                </span>
              </p>
              <p>
                <a
                  className="button primary"
                  href="https://www.highervisibility.com/case-study/caliber-collision-seo/"
                >
                  Read the Case Study
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
