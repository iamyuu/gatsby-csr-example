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
  "half-star": {
    path: (
      <g>
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="var(--half-star-bg-color)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half-star)"
          d="M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z"
        />
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
