import React from "react"
import { theme } from "@chakra-ui/core"

// Icons by iconmonstr.com
const customIcons = {
  bookmark: {
    path: (
      <g fill="currentColor">
        <path d="M18 24l-6-5.269L6 24V0h12v24z" />
      </g>
    ),
  },
  "bookmark-add": {
    path: (
      <g fill="currentColor">
        <path d="M16 10.975V24l-6-5.269L4 24V0h6.816A6.501 6.501 0 009.5 2H6v17.582l4-3.512 4 3.512v-8.763a6.05 6.05 0 002 .156zM20 4.5A4.501 4.501 0 1115.5 0C17.982 0 20 2.015 20 4.5zM18 4h-2V2h-1v2h-2v1h2v2h1V5h2V4z" />
      </g>
    ),
  },
}

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body:
      'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
}

export default customTheme
