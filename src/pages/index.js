import React from "react"
import Layout from "../components/layout/layout"
import Main from "../components/component-home/main/Main"
import Seo from "../components/Seo"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
