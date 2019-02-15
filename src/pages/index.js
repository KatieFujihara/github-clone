import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from '../../App'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <App/>
  </Layout>
)

export default IndexPage
