import React from "react"
import "./company-recognition.scss"

export default function CompanyRecognition() {
  return (
    <div className="company-recognition">
      <div className="company-recognition__wrap">
        <h2>Company Recognitions</h2>
        <div className="list-recognition">
          <div className="item-recognition">
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2018/01/upcity.webp"
              alt="UpCity Logo"
            />
            <p>UpCity</p>
            <p>Ranked as a Top 10 SEO Agency</p>
          </div>

          <div className="item-recognition">
            {" "}
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2018/01/landys.webp"
              alt="Search Engine Land Logo"
            />
            <p>Search Engine Land</p>
            <p>2017/18 SEO Agency of the Year</p>
          </div>
          <div className="item-recognition">
            {" "}
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2018/01/inc5000.webp"
              alt="Inc 5000 Logo"
            />
            <p>Inc 5000</p>
            <p>Fastest Growing Companies</p>
          </div>
          <div className="item-recognition">
            {" "}
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2018/01/google-partner.webp"
              alt="Google Logo"
            />
            <p>Google</p>
            <p>Premier Partner Agency</p>
          </div>
          <div className="item-recognition">
            {" "}
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2019/09/web-award-2019.png"
              alt="WebAwards - Eclipse Awning Logo"
            />
            <p>WebAwards - Eclipse Awning</p>
            <p>Best Professional Service Website</p>
          </div>
        </div>
      </div>
    </div>
  )
}
