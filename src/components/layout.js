import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"
import Header from "./header"
import "./layout.css"
import styles from '../styles/app.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavBar />
        <div
          style={{
            minWidth: 960,
            padding: `0 20%`,
            paddingTop: 0,
          }}
          className={styles.codelines}
        > 
            <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
