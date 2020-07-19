/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {% if cookiecutter.emotion == 'yes' %}
    `gatsby-plugin-emotion`
    {% endif %}
  ],
}
