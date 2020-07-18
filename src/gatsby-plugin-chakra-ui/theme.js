import React from "react"
import { theme } from "@chakra-ui/core"

// Icons by iconmonstr.com
const customIcons = {
  heart: {
    path: (
      <g fill="currentColor">
        <path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z" />
      </g>
    ),
  },
  "heart-add": {
    path: (
      <g fill="currentColor">
        <path d="M15.653 19.415C14.491 20.556 13.264 21.746 12 23 5.57 16.619 0 11.853 0 7.192 0 3.187 3.098 1 6.281 1 8.478 1 10.715 2.042 12 4.248c1.279-2.195 3.521-3.238 5.726-3.238C20.903 1.01 24 3.181 24 7.192c0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031C3.965 2.999 2 4.516 2 7.192c0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zM23 14h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
      </g>
    ),
  },
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
