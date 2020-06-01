import React from "react"
import AwarBanner from "./awar-banner/AwarBanner"
import ServiceContent from "./service-content/ServiceContent"
import ServiceCaseStudy from "./service-case-study/ServiceCaseStudy"
import "./seo-service.scss"
export default function SeoService() {
  return (
    <div className="seo-service">
      <AwarBanner />
      <ServiceContent number="0" />
      <ServiceContent number="1" />
      <ServiceContent number="0" />
      <div className="service-cta">
        <a
          className="button primary large scrollto"
          data-target="lets-talk"
          href="/"
        >
          Schedule a Consultation
        </a>
      </div>
      <ServiceCaseStudy />
    </div>
  )
}
