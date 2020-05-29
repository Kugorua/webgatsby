import React from "react"
import "./main.scss"
import Services from "./mainservice/Services"
import WhyHighervis from "./why-highervis/WhyHighervis"
import Partners from "./partners/Partners"
import CompanyRecognition from "./company-recognition/CompanyRecognition"
import LatestBlogs from "./latest-blogs/LatestBlogs"
import LetsTalk from "./lets-talk/LetsTalk"
import MainFooter from "./main-footer/MainFooter"
export default function Main() {
  return (
    <div className="main">
      <div className="main__wrap">
        <Services />
        <WhyHighervis />
        <Partners />
        <CompanyRecognition />
        <LatestBlogs />
        <LetsTalk />
        <MainFooter />
      </div>
    </div>
  )
}
