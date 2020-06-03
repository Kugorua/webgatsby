import React from "react"
import "./main-footer.scss"
export default function MainFooter() {
  return (
    <div className="main-footer">
      <div className="main-footer__wrap">
        <div className="main-footer__content">
          <div className="accredidations">
            <h3>Our Accreditations</h3>{" "}
            <a href={"#"}>
              <img
                src="https://www.highervisibility.com/wp-content/themes/highervisibility_new/img/google-partner.png"
                alt="Google Premier Partner Logo"
              />
            </a>{" "}
            <a href={"#"}>
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
                    <a href={"#"}>About</a>
                  </li>
                  <li>
                    <a href={"#"}>Blog</a>
                  </li>
                  <li>
                    <a href={"#"}>Resources</a>
                  </li>
                  <li>
                    <a href={"#"}>Free SEO Tools</a>
                  </li>
                  <li>
                    <a href={"#"}>Contact Us</a>
                  </li>
                </ul>
                <ul id="menu-footer-company-right" className="menu">
                  <li>
                    <a href={"#"}>Careers</a>
                  </li>
                  <li>
                    <a href={"#"}>Privacy Policy</a>
                  </li>
                  <li>
                    <a href={"#"}>Reseller Program</a>
                  </li>
                  <li>
                    <a href={"#"}>Marketing Scholarship</a>
                  </li>
                  <li>
                    <a href={"#"}>SEO CTR Grader</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-footer-nav">
              <h3> SERVICE</h3>
              <div className="service-footer-nav-list">
                <ul>
                  <li>
                    <a href={"#"}>All Services</a>
                  </li>
                  <li>
                    <a href={"#"}>Search Engine Optimization</a>
                  </li>
                  <li>
                    <a href={"#"}>PPC Management Services</a>
                  </li>
                  <li>
                    <a href={"#"}>Social Media Management</a>
                  </li>
                  <li>
                    <a href={"#"}>Link Building Services</a>
                  </li>
                  <li>
                    <a href={"#"}>Conversion Optimization</a>
                  </li>
                  <li>
                    <a href={"#"}>Web Design Services</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href={"#"}>Local SEO</a>
                  </li>
                  <li>
                    <a href={"#"}>Local Listings</a>
                  </li>
                  <li>
                    <a href={"#"}>Ecommerce SEO</a>
                  </li>
                  <li>
                    <a href={"#"}>Franchise SEO</a>
                  </li>
                  <li>
                    <a href={"#"}>SEO Auditing Services</a>
                  </li>
                  <li>
                    <a href={"#"}>Penalty Recovery</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href={"#"}>Enterprise</a>
                  </li>
                  <li>
                    <a href={"#"}>Lawyers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-options">
            <p className="call-us">
              <span>Call Us Toll Free:</span> <a href={"#"}>888.212.4458</a>
            </p>
            <p className="email-us">
              <span>Email Us:</span> <a href={"#"}>info@highervisibility.com</a>
            </p>
            <p className="visit-us">
              <span>
                <a href={"#"}>
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
