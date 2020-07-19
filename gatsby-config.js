const { description } = require("./package.json")

module.exports = {
  siteMetadata: {
    title: `Movie App`,
    description,
    author: `iamyuu`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-chakra-ui`],
}
