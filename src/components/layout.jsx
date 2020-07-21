import React from "react"
import Meta from "./meta"

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Meta {...rest} />
      <main>{children}</main>
    </>
  )
}
