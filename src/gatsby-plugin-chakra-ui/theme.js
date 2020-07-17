import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body:
      'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  },
}

export default customTheme
