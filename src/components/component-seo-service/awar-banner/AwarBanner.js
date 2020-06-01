import React from "react"
import "./awar-banner.scss"
export default function AwarBanner() {
  return (
    <section className="award-banner">
      {" "}
      <img
        src="https://www.highervisibility.com/wp-content/uploads/2018/01/landys.webp"
        alt="SEO Agency of the Year"
      />
      <div className="award-content">
        <h2>SEO Agency of the Year</h2>
        <p>
          {" "}
          2017/18 Search Engine Land Award Winner»{" "}
          <a href="https://searchengineland.com/landy-awards-spotlights-top-performers-seo-sem-industry-285601">
            Learn More
          </a>
        </p>
      </div>
    </section>
  )
}
