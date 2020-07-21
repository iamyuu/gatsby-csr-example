import React from "react"
import { Box, Text, Icon } from "@chakra-ui/core"
import Layout from "./layout"

export default function ErrorFallback({
  icon = "warning",
  title = "Oops! something went wrong",
  message,
}) {
  return (
    <Layout title={title}>
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Icon name={icon} size="3rem" mb="5" />
        <Text as="h4" fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize="sm">{message}</Text>
      </Box>
    </Layout>
  )
}
