import React from "react"
import "./partners.scss"
export default function Partners() {
  return (
    <div className="partners">
      <div className="partners__wrap">
        <div className="partners__content">
          <div className="partners__content__intro">
            <h2>Our Partners</h2>
            <p>
              From small businesses to Fortune 1000 – hundreds of companies rely
              on HigherVisibility to help grow their revenue through digital
              marketing. Utilizing our years of experience and expertise, we are
              able to customize solutions to meet your specific needs regardless
              of size or industry.
            </p>
          </div>
        </div>
        <div className="partners__content">
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/allied-van-lines/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/allied-light-bg.webp"
                  alt="Allied Van Lines Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/allied-van-lines/">
                Allied Van Lines
              </a>
            </h3>
            <p className="stat-number">44.27%</p>
            <p className="stat-type">Increase in Organic Traffic</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/allure-bridals/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/allure-bridals-light-bg.webp"
                  alt="Allure Bridals Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/allure-bridals/">
                Allure Bridals
              </a>
            </h3>
            <p className="stat-number">45.51%</p>
            <p className="stat-type">Increased Interactions</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/caliber-collision-seo/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/caliber-light-bg.webp"
                  alt="Caliber Collision Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/caliber-collision-seo/">
                Caliber Collision
              </a>
            </h3>
            <p className="stat-number">141.51%</p>
            <p className="stat-type">Increase in Conversions</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/restoration-roofing/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/restoration-roofing-light-bg.webp"
                  alt="Restoration Roofing Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/restoration-roofing/">
                Restoration Roofing
              </a>
            </h3>
            <p className="stat-number">162%</p>
            <p className="stat-type">Increase in Organic Traffic</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/smartbox/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/smartbox-light-bg.webp"
                  alt="SmartBox Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/smartbox/">
                SmartBox
              </a>
            </h3>
            <p className="stat-number">210.22%</p>
            <p className="stat-type">Increase in Conversions</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/varco-pruden/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/vp-light-bg.webp"
                  alt="VP.com Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/varco-pruden/">
                VP.com
              </a>
            </h3>
            <p className="stat-number">2,337%</p>
            <p className="stat-type">Increase in Organic Visibility</p>
          </div>
          <div className="cell partner">
            <div className="case-study-logo">
              <a href="https://www.highervisibility.com/case-study/fitness-19/">
                <img
                  src="https://www.highervisibility.com/wp-content/uploads/2017/12/fitness19-light-bg.webp"
                  alt="Fitness 19 Logo"
                />
              </a>
            </div>
            <h3>
              <a href="https://www.highervisibility.com/case-study/fitness-19/">
                Fitness 19
              </a>
            </h3>
            <p className="stat-number">329%</p>
            <p className="stat-type">Increase in Conversions</p>
          </div>
          <div className="cell testimonial">
            <p className="company-name">
              Caliber Collision - Search Engine Optimization
            </p>
            <p>
              “HigherVisibility has delivered nothing but exemplary results
              since taking over Caliber Collision’s SEO/PPC account. Since
              taking over our account, HigherVisibility increased Caliber’s
              first through third Google rankings by 142% along with vaulting
              Caliber’s website to the top online authority in the collision
              industry. And Caliber’s PPC ROI across 25 markets improved over
              12X the previous calendar year. Nuff said!”
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
  )
}
