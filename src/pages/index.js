import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hello World!</h1>
      <div>
        <Link to={"/blog/"}>Blog</Link>
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </Layout>
)

export default IndexPage
