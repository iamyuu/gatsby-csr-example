exports.onCreatePage = ({ page, actions }) => {
  if (page.path.startsWith(`/movie`)) {
    const { createPage } = actions

    page.matchPath = `/movie/:movieId`
    createPage(page)
  }
}
