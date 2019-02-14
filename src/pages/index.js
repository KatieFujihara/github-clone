import React from "react"
import { Link } from "gatsby"
import Input from "../components/input"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../styles/app.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Input/>
  </Layout>
)

export default IndexPage
