import React from "react"
import Error from "../components/error-fallback"

export default function NotFound() {
  return (
    <Error
      icon="info"
      title="Not Found"
      message="Page you are looking for was not found"
    />
  )
}
