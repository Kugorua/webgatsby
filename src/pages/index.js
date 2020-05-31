import React from "react"
import Layout from "../components/layout/layout"
import Main from "../components/component-home/main/Main"
import Seo from "../components/Seo"
const IndexPage = () => (
  <Layout
    title="GROW YOUR"
    titleSub="WEBSITE TRAFFIC"
    titleContent=" AND "
    content="Partner with an award winning digital marketing agency that has proven to deliver customers through SEO, PPC, and Social Media services."
    display={"inline"}
    background={"header__wrap"}
  >
    <Seo title="Highervisibility" />
    <Main />
  </Layout>
)

export default IndexPage
