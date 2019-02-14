import React from "react"
import ReactDOM from "react-dom"
import App from "../../app"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <App/>
  </Layout>
)

export default IndexPage
