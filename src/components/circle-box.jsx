import React from "react"
import { Box, Skeleton, useColorMode } from "@chakra-ui/core"

export default function CircleBox({ children, loading = false, ...rest }) {
  const { colorMode } = useColorMode()

  return (
    <Box
      rounded="full"
      d="inline-block"
      p={!loading ? 2 : 0}
      fontWeight="semibold"
      background={colorMode === "dark" ? "#141821" : "white"}
      {...rest}
    >
      <Skeleton isLoaded={!loading} rounded="full" p={!loading ? 0 : 2}>
        {children}
      </Skeleton>
    </Box>
  )
}
