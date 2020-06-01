import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/Seo"
import ContactContent from "../components/component-contact/ContactContent"
export default function contact() {
  return (
    <div>
      <Layout
        title="CONTACT"
        titleSub=""
        titleContent=""
        display="none"
        displaybtn="none"
        displaycontent="none"
        background="backgroud-none"
      >
        <Seo title="Contact Us| Highervisibility" />
        <ContactContent />
      </Layout>
    </div>
  )
}
