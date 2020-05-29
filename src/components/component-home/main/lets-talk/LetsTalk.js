import React from "react"
import "./lets-talk.scss"
export default function LetsTalk() {
  return (
    <div className="lets-talk">
      <div className="lets-talk__wrap">
        <div className="lets-talk__content">
          <div className="large-4">
            <h2>Let's Talk</h2>
            <p>
              We’ve been growing businesses since 2009, let us do it for you!
            </p>
          </div>
          <div className="schedule-consultation">
            <div className="schedule-consultation__wrap">
              <h1>Schedule a Consultation</h1>
              <form className="schedule-consultation__form">
                <div className="formi-tem">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div className="formi-tem">
                  <label>Company Name </label>
                  <input type="text" />
                </div>
                <div className="formi-tem">
                  <label>Last Name </label>
                  <input type="text" />
                </div>
                <div className="formi-tem">
                  <label>Website </label>
                  <input type="text" />
                </div>
                <div className="formi-tem">
                  <label>Email</label>
                  <input type="text" />
                </div>

                <div className="formi-tem">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
                <div className="form-checkbox">
                  <div className="label-title">
                    <span>Select the services you are interested in:</span>
                    <span>*</span>{" "}
                  </div>
                  <div className="checkbox-list">
                    <div className="checkbox-item">
                      <input id="seo" type="checkbox" />
                      <label for="seo">SEO</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="pcc" type="checkbox" />
                      <label for="pcc">PPC</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="web-design" type="checkbox" />
                      <label for="web-design">WEB DESIGN</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="seo-about" type="checkbox" />
                      <label for="seo-about">SEO AUDIT</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="white-label" type="checkbox" />
                      <label for="white-label">WHITE LABEL</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="reseller" type="checkbox" />
                      <label for="reseller"> RESELLER</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="local-listing" type="checkbox" />
                      <label for="local-listing">LOCAL LISTINGS</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="social" type="checkbox" />
                      <label for="social"> SOCIAL</label>
                    </div>
                    <div className="checkbox-item">
                      <input id="link-building" type="checkbox" />
                      <label for="link-building">LINK BUILDING</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="frm_submit">
                {" "}
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <p>Stay tuned with us on social networks!</p>
            <ul className="list-icon">
              <li className="item-icon">
                <i
                  className="fab fa-facebook"
                  style={{
                    fontSize: 45,
                    color: "white",
                    boderRadius: "50%",
                  }}
                />
              </li>
              <li className="item-icon">
                <i
                  className="fab fa-youtube-square"
                  style={{
                    fontSize: 45,
                    color: "white",
                    boderRadius: "50%",
                  }}
                />
              </li>
              <li className="item-icon">
                <i
                  className="fab fa-twitter-square"
                  style={{
                    fontSize: 45,
                    color: "white",
                    boderRadius: "50%",
                  }}
                ></i>
              </li>
              <li className="item-icon">
                <i
                  className="fab fa-linkedin"
                  style={{
                    fontSize: 45,
                    color: "white",
                    boderRadius: "50%",
                  }}
                ></i>
              </li>
            </ul>
            <p>Subscribe to our Newsletter</p>
            <div className="footer-subscribe">
              <form className="footer-subscribe__form">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
