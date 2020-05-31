import React from "react"
import "./main-footer.scss"
export default function MainFooter() {
  return (
    <div className="main-footer">
      <div className="main-footer__wrap">
        <div className="main-footer__content">
          <div className="accredidations">
            <h3>Our Accreditations</h3>{" "}
            <a href="https://www.google.com/partners/#a_profile;idtf=5461624892">
              <img
                src="https://www.highervisibility.com/wp-content/themes/highervisibility_new/img/google-partner.png"
                alt="Google Premier Partner Logo"
              />
            </a>{" "}
            <a href="https://www.bbb.org/memphis/business-reviews/internet-marketing-services/higher-visibility-in-cordova-tn-44049603">
              <img
                src="https://www.highervisibility.com/wp-content/themes/highervisibility_new/img/bbb.png"
                alt="BBB Logo"
              />
            </a>
          </div>
          <div className="footer-nav">
            <div className="company-footer-nav">
              <h3>Company</h3>
              <div className="company-footer-nav-list">
                {" "}
                <ul>
                  <li>
                    <a href="https://www.highervisibility.com/about-us/">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/blog/">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/resource/">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/free-seo-tools/">
                      Free SEO Tools
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/contact-us/">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul id="menu-footer-company-right" className="menu">
                  <li>
                    <a href="https://www.highervisibility.com/careers/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/seo-reseller-program/">
                      Reseller Program
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/marketing-scholarship/">
                      Marketing Scholarship
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/free-seo-tools/ctr-tool/">
                      SEO CTR Grader
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-footer-nav">
              <h3> SERVICE</h3>
              <div className="service-footer-nav-list">
                <ul>
                  <li>
                    <a href="https://www.highervisibility.com/online-marketing-services/">
                      All Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/search-engine-optimization/">
                      Search Engine Optimization
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/ppc-management/">
                      PPC Management Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/social-media-marketing/">
                      Social Media Management
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/link-building/">
                      Link Building Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/conversion-rate-optimization/">
                      Conversion Optimization
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/website-design/">
                      Web Design Services
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.highervisibility.com/local-seo-company/">
                      Local SEO
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/local-listings/">
                      Local Listings
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/ecommerce-seo-services/">
                      Ecommerce SEO
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/franchise-seo-services/">
                      Franchise SEO
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/seo-audit/">
                      SEO Auditing Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/google-penalty-recovery/">
                      Penalty Recovery
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.highervisibility.com/industries/enterprise/">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="https://www.highervisibility.com/industries/lawyers/">
                      Lawyers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-options">
            <p className="call-us">
              <span>Call Us Toll Free:</span>{" "}
              <a href="tel:8882124458">888.212.4458</a>
            </p>
            <p className="email-us">
              <span>Email Us:</span>{" "}
              <a href="mailto:info@highervisibility.com">
                info@highervisibility.com
              </a>
            </p>
            <p className="visit-us">
              <span>
                <a href="https://www.highervisibility.com/memphis-marketing">
                  8000 Centerview Parkway Suite 203, Memphis, TN 38018
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
