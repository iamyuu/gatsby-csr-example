/**
 * Get full image url
 * @param {string} path
 * @param {string | number} width
 */
export function getImage(path, width = "original") {
  const size = typeof width === "number" ? `w${width}` : width
  return `https://image.tmdb.org/t/p/${size}${path}`
}

/**
 * Formating date
 * @param {string | Date} date
 * @returns {string} with format date: MMM, d YYYY
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}