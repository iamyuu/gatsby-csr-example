import React from "react"
import { SimpleGrid, Box, Text, Icon } from "@chakra-ui/core"
import BoxMovie from "../components/box-movie"
import { useNowPlaying } from "../services/movie"

export default function Home() {
  const { status, error, data } = useNowPlaying()

  if (status === "error") {
    return (
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Icon name="warning" size="3rem" mb="5" />
        <Text as="h4" fontSize="xl" fontWeight="semibold">
          Oops! something went wrong
        </Text>
        <Text fontSize="sm">{error.message}</Text>
      </Box>
    )
  }

  return (
    <SimpleGrid m="2" minChildWidth="240px">
      {status === "loading"
        ? [...Array(10)].map((_, index) => <BoxMovie key={index} loading />)
        : data.results.map(movie => <BoxMovie key={movie.id} {...movie} />)}
    </SimpleGrid>
  )
}
