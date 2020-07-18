/**
 * Get full image url
 * @param {string} path
 * @param {string | number} width
 */
export function getImage(path, width = "original") {
  if (!path) return undefined

  const size = typeof width === "number" ? `w${width}` : width
  return `https://image.tmdb.org/t/p/${size}${path}`
}

/**
 * Formatting date
 * @param {string | Date} date
 * @returns {string} with format date: MMM, d YYYY
 */
export function formatDate(date) {
  if (!date) return undefined

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

/**
 * Formatting movie duration
 * @param {string | number} runtime
 */
export function formatRuntime(runtime) {
  if (!runtime) return undefined

  const hour = Math.floor(runtime / 60)
  const minute = (hour * 60 - runtime) * -1

  if (hour < 1) {
    return `${minute}m`
  }

  return `${hour}h ${minute}m`
}

/**
 * Formatting to currency USD (en-US)
 * @param {string | number} number
 */
export function formatCurrency(number) {
  const options = {
    currency: "USD",
    style: "currency",
  }

  return new Intl.NumberFormat("en-US", options).format(number)
}
